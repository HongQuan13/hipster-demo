const { Pool } = require("pg");
const fs = require("fs");

const pool = new Pool({
  user: "postgres",
  host: "benjamin-database-postgres.czccwe4oeg4q.ap-southeast-1.rds.amazonaws.com",
  password: "12345678",
  port: 5432,
});

module.exports = pool;
