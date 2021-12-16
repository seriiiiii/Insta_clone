const mysql = require('mysql2');

const client = mysql.createConnection({
    host:'localhost' ,
    user:'root' ,
    paddword:'pjss1967' ,
    database:'insta' ,
    port:'3306',
    multipleStatements:true,
});

module.exports = client;