const express = require('express');
var crypto = require('crypto');
var DataTypes = require("sequelize");

var sequelize = require('../mysql/sequelize');


var User = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    instanceMethods: {
        retrieveAll: function(onSuccess, onError) {
            User.findAll({}, {raw: true}).success(onSuccess).error(onError);
        },
        retrieveById: function(user_id, onSuccess, onError) {
            User.find({where: {id: user_id}}, {raw: true}).success(onSuccess).error(onError);
        },
        add: function(onSuccess, onError) {
            var username = this.username;
            var password = this.password;

            var shasum = crypto.createHash('sha1');
            shasum.update(password);
            password = shasum.digest('hex');

            User.build({ username: username, password: password })
                .save().success(onSuccess).error(onError);
        },
        updateById: function(user_id, onSuccess, onError) {
            var id = user_id;
            var username = this.username;
            var password = this.password;

            var shasum = crypto.createHash('sha1');
            shasum.update(password);
            password = shasum.digest('hex');

            User.update({ username: username,password: password},{where: {id: id} }).success(onSuccess).error(onError);
        },
        removeById: function(user_id, onSuccess, onError) {
            User.destroy({where: {id: user_id}}).success(onSuccess).error(onError);
        }
    }
});


// IMPORT ROUTES
// =============================================================================
var UserRouter = express.Router();

// on routes that end in /users
// ----------------------------------------------------
UserRouter.route('/users')

// create a user (accessed at POST http://localhost:8080/api/users)
    .post(function(req, res) {

        var username = req.body.username; //bodyParser does the magic
        var password = req.body.password;

        var user = User.build({ username: username, password: password });

        user.add(function(success){
                res.json({ message: 'User created!' });
            },
            function(err) {
                res.send(err);
            });
    })

    // get all the users (accessed at GET http://localhost:3001/api/users)
    .get(function(req, res) {
        var user = User.build();

        user.retrieveAll(function(users) {
            if (users) {
                res.json(users);
            } else {
                res.send(401, "User not found");
            }
        }, function(error) {
            res.send("User not found");
        });
    });


// on routes that end in /users/:user_id
// ----------------------------------------------------
UserRouter.route('/users/:user_id')

// update a user (accessed at PUT http://localhost:8080/api/users/:user_id)
    .put(function(req, res) {
        var user = User.build();

        user.username = req.body.username;
        user.password = req.body.password;

        user.updateById(req.params.user_id, function(success) {
            console.log(success);
            if (success) {
                res.json({ message: 'User updated!' });
            } else {
                res.send(401, "User not found");
            }
        }, function(error) {
            res.send("User not found");
        });
    })

    // get a user by id(accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function(req, res) {
        var user = User.build();

        user.retrieveById(req.params.user_id, function(users) {
            if (users) {
                res.json(users);
            } else {
                res.send(401, "User not found");
            }
        }, function(error) {
            res.send("User not found");
        });
    })

    // delete a user by id (accessed at DELETE http://localhost:8080/api/users/:user_id)
    .delete(function(req, res) {
        var user = User.build();

        user.removeById(req.params.user_id, function(users) {
            if (users) {
                res.json({ message: 'User removed!' });
            } else {
                res.send(401, "User not found");
            }
        }, function(error) {
            res.send("User not found");
        });
    });



module.exports = UserRouter;