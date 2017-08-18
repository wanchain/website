import mysqlConfig from '../../mysql/connectMysql';

export default function users(req) {
    var username = req.body.username;
    var password = req.body.password;

    var  userGetSql = 'SELECT * FROM users where username = ? and password= ? ';
    console.log('sql', userGetSql);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //查 query
            mysqlConfig.query(userGetSql, [username, password], function (err, result) {
                if(err){
                    reject(errors);
                    console.log('[SELECT ERROR] - ',err.message);
                }

                console.log('---------------SELECT----------------');
                resolve(result);
                console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
            });

            // connection.end();
        }, 1000);
    });
}

