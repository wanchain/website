import mysqlConfig from '../../mysql/connectMysql';
import Date from '../../utils/Date';

export default function news(req) {

    var white_mail = req.body.white_mail;
    var email_num = req.body.email_num;
    var create_time = new Date().Format("yyyy-MM-dd hh:mm:ss");

    var  sql = 'INSERT INTO wanchain_white(white_mail, email_num, create_time) VALUE(?, ?, ?) ';
    var insertWhite = [white_mail, email_num, create_time];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //增
            mysqlConfig.query(sql, insertWhite, function (err, result) {
                if(err){
                    reject({errors: err.message, status: 0});
                    console.log('[INSERT NEWS ERROR] - ',err.message);
                }

                // console.log('---------------INSERT NEWS----------------');
                resolve({result: 'insert news success', status: 1});
                // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
            });
        }, 1000);
    });
}

