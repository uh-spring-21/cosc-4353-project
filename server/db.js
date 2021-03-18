var mysql = require("mysql");
const Pool = require("pg").Pool;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "fuel_quote"
});






module.exports = pool;