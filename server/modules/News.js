const express = require('express');
var crypto = require('crypto');
var DataTypes = require("sequelize");

var sequelize = require('../mysql/sequelize');

Date.prototype.Format = function (fmt) { //author: meizz
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
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

var News = sequelize.define('wanchain_news', {
    title: DataTypes.STRING,
    des: DataTypes.STRING,
    best_time: DataTypes.STRING,
    details: DataTypes.STRING,
    news_link: DataTypes.STRING,
    create_time: DataTypes.STRING
}, {
    instanceMethods: {
        retrieveAll: function(onSuccess, onError) {
            News.findAll({orderByFirstCall: -best_time}, {raw: true}).success(onSuccess).error(onError);
        },
        retrieveByBest: function(best_time, onSuccess, onError) {
            News.find({where: {best_time: best_time}}, {raw: true}).success(onSuccess).error(onError);
        },
        add: function(onSuccess, onError) {
            var title = this.title;
            var des = this.des;
            var best_time = this.best_time;
            var details = this.details;
            var news_link = this.news_link;
            var create_time = this.create_time;

            News.build({ title: title, des: des, best_time: best_time, details: details, news_link: news_link, create_time: create_time })
                .save().success(onSuccess).error(onError);
        },
    }
});


// IMPORT ROUTES
// =============================================================================
var NewsRouter = express.Router();

// on routes that end in /users
// ----------------------------------------------------
NewsRouter.route('/news')

// create
    .post(function(req, res) {

        var title = req.body.title; //bodyParser does the magic
        var des = req.body.des;
        var best_time = req.body.best_time;
        var details = req.body.details;
        var news_link = req.body.news_link;
        var create_time = new Date().Format("yyyy-MM-dd hh:mm:ss");

        var news = News.build({ title: title, des: des, best_time: best_time, details: details, news_link: news_link, create_time: create_time });

        news.add(function(success){
                res.json({ message: 'news created!', status: 1 });
            },
            function(err) {
                res.json({ message: 'news failed!', status: 0 });
            });
    })

    // get
    .get(function(req, res) {
        var news = News.build();

        news.retrieveAll(function(users) {
            if (users) {
                res.json(users);
            } else {
                res.send(401, "news Not Found");
            }
        }, function(error) {
            res.send("news Not Found");
        });
    });


module.exports = NewsRouter;