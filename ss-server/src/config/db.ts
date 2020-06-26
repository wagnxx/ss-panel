const env = process.env.NDOE_ENV;

// interface
interface ISQL {
  host: string;
  user: string;
  password: string;
  database: string;
  port: string | number;
}

interface IRids {
  host: string;
  port: string | number;
}

// cfg
let MYSQL_CONF: ISQL;
let REDIS_CONF: IRids;

// mysql  defualt
MYSQL_CONF = {
  host: '192.168.1.112',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'ss',
};
// redis defult
REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1',
};

if (env === 'dev') {
  MYSQL_CONF.host = 'localhost';
  REDIS_CONF.host = 'localhost';
}
if (env === 'production') {
  MYSQL_CONF.host = '192.168.1.112';
  REDIS_CONF.host = '192.168.1.112';
}
if (env === 'docker') {
  MYSQL_CONF.host = 'mysql';
  // MYSQL_CONF.host = 'redis';
}

console.log('mysql的配置项',REDIS_CONF)
console.log('redis的配置项',REDIS_CONF)

export { MYSQL_CONF, REDIS_CONF };
