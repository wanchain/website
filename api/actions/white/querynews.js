import mysqlConfig from '../../mysql/connectMysql';

export default function querynews(req) {
    var limit = req.body.limit;
    var  userGetSql = 'select * FROM wanchain_news ORDER BY best_time DESC limit ? ';
    console.log('sql', userGetSql);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //查 query
            mysqlConfig.query(userGetSql,[limit], function (err, result) {
                if(err){
                    reject({errors: err.message, status: 0});
                    console.log('[SELECT ERROR] - ',err.message);
                }

                console.log('---------------QUERY NEWS----------------');
                resolve({result: result, status: 1});
                console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
            });
        }, 1000);
    });
}

