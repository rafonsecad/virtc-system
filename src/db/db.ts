import mysql from 'mysql';
import c from '../virtcrc.json';

const conn = mysql.createConnection({
    host: process.env.DB_HOST || c.config.db.host,
    user: process.env.DB_USER || c.config.db.user,
    password: process.env.DB_PASSWORD || c.config.db.password,
    database: process.env.DB_NAME || c.config.db.database,
});

module.exports = conn;
