var mysql  = require('mysql');
import mysqlConfig from '../../mysql/mysql.config';
import Date from '../../utils/Date';

var connection = mysql.createConnection({
    host     : mysqlConfig.host,
    user     : mysqlConfig.user,
    password : mysqlConfig.password,
    port: mysqlConfig.port,
    database: mysqlConfig.database,
});

export default function news(req) {
    connection.connect();

    var title = req.body.title;
    var des = req.body.des;
    var best_time = req.body.best_time;
    var details = req.body.details;
    var news_link = req.body.news_link;
    var create_time = new Date().Format("yyyy-MM-dd hh:mm:ss");

    var  newsSql = 'INSERT INTO wanchain_news(title, des, best_time, details, create_time, news_link) VALUE(?, ?, ?, ?, ?, ?) ';
    var insertNews = [title, des, best_time, details, create_time, news_link];
    console.log('sql', newsSql);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //增
            connection.query(newsSql, insertNews, function (err, result) {
                if(err){
                    reject({errors: err.message, status: 0});
                    console.log('[INSERT NEWS ERROR] - ',err.message);
                }

                console.log('---------------INSERT NEWS----------------');
                resolve({result: 'insert news success', status: 1});
                console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
            });

            connection.end();
        }, 1000);
    });
}

