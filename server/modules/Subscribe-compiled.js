'use strict';

var express = require('express');
var crypto = require('crypto');
var DataTypes = require("sequelize");

var sequelize = require('../mysql/sequelize');

Date.prototype.Format = function (fmt) {
    //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }return fmt;
};

var Subscribe = sequelize.define('wanchain_subscribe', {
    email: DataTypes.STRING,
    create_time: DataTypes.STRING
}, {
    instanceMethods: {
        retrieveAll: function retrieveAll(onSuccess, onError) {
            Subscribe.findAll({}, { raw: true }).success(onSuccess).error(onError);
        },
        retrieveById: function retrieveById(user_id, onSuccess, onError) {
            Subscribe.find({ where: { id: user_id } }, { raw: true }).success(onSuccess).error(onError);
        },
        add: function add(onSuccess, onError) {
            var email = this.email;
            var create_time = this.create_time;

            Subscribe.build({ email: email, create_time: create_time }).save().success(onSuccess).error(onError);
        },
        updateById: function updateById(user_id, onSuccess, onError) {
            var id = user_id;
            var email = this.email;
            var create_time = this.create_time;

            Subscribe.update({ email: email, create_time: create_time }, { where: { id: id } }).success(onSuccess).error(onError);
        },
        removeById: function removeById(user_id, onSuccess, onError) {
            Subscribe.destroy({ where: { id: user_id } }).success(onSuccess).error(onError);
        }
    }
});

// IMPORT ROUTES
// =============================================================================
var SubscribeRouter = express.Router();

// on routes that end in /users
// ----------------------------------------------------
SubscribeRouter.route('/subscribe')

// create a user (accessed at POST http://localhost:8080/api/users)
.post(function (req, res) {

    var email = req.body.email; //bodyParser does the magic
    var create_time = new Date().Format("yyyy-MM-dd hh:mm:ss");

    var subscribe = Subscribe.build({ email: email, create_time: create_time });

    subscribe.add(function (success) {
        res.json({ message: 'Subscribe created!' });
    }, function (err) {
        res.send(err);
    });
})

// get all the users (accessed at GET http://localhost:3001/api/users)
.get(function (req, res) {
    var user = Subscribe.build();

    user.retrieveAll(function (users) {
        if (users) {
            res.json(users);
        } else {
            res.send(401, "User Not Found");
        }
    }, function (error) {
        res.send("User Not Found");
    });
});

module.exports = SubscribeRouter;

//# sourceMappingURL=Subscribe-compiled.js.map