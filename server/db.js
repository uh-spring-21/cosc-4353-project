var mysql = require("mysql");
const Pool = require("pg").Pool;

const pool = mysql.createPool({
  host: "cosc4353.cegj7mcgdf3k.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "COSC4353123",
  database: "COSC4353"
});

// localhost 

// host: "localhost",
//   user: "root",
//   password: "",
//   database: "fuel_quote"

// AWS
// host: "cosc4353.cegj7mcgdf3k.us-east-2.rds.amazonaws.com",
// user: "admin",
// password: "COSC4353123",
// database: "COSC4353"





module.exports = pool;