const express = require("express");
const app = express();
const cors = require("cors");

//database
const con = require("./db");
var mysql = require('mysql')

// middleware

app.use(cors());
app.use(express.json());

//ROUTES

//register and login routes
app.use("/auth", require("./routes/jwtAuth"));

//fuel quote form and order history and pricing module
//app.use("/order");

//client profile
app.use("/clientInformation",require("./routes/profileManagement"));


app.listen(5050,()=>{
    console.log("server has started");
});










