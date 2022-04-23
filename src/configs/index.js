const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
  port: 5432,
});

module.exports = pool;
