var mysql  = require('mysql');

import mysqlConfig from '../../mysql/mysql.config';

var connection = mysql.createConnection({
    host     : mysqlConfig.host,
    user     : mysqlConfig.user,
    password : mysqlConfig.password,
    port: mysqlConfig.port,
    database: mysqlConfig.database,
});

export default function users(req) {
    connection.connect();

    var username = req.body.username;
    var password = req.body.password;

    var  userGetSql = 'SELECT * FROM users where username = ? and password= ? ';
    console.log('sql', userGetSql);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //查 query
            connection.query(userGetSql, [username, password], function (err, result) {
                if(err){
                    reject(errors);
                    console.log('[SELECT ERROR] - ',err.message);
                }

                console.log('---------------SELECT----------------');
                resolve(result);
                console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
            });

            connection.end();
        }, 1000);
    });
}

