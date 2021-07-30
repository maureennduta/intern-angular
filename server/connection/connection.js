var mysql = require('mysql');
const config = require('../config/config.json');

const def = {
  connect
}

const pool = mysql.createPool({
  host: config.mysql.host,
  port:config.mysql.port,
  user: config.mysql.user,
  database:config.mysql.database,
  password: config.mysql.password
});

function connect(){
  return new Promise((resolve,reject) => {
    resolve(pool);

  })
}

module.exports = def;