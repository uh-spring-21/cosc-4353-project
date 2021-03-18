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
app.use("/order", require("./routes/quoteOrders"));

//client profile
app.use("/clientInformation", require("./routes/clientInformation"));


app.listen(5000,()=>{
    console.log("server has started");
});










