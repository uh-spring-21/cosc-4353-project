const express = require("express");
const app = express();
const db = require("/db");
const bodyParser = require("body-parser");
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// submit client information
app.post("/clientInformation", async (req, res) => {
    console.log(req.body);
    const street = req.body.street;
    const street2 = req.body.street2;
    const city = req.body.city;
    const state = req.body.state;
    const zipcode = req.body.zipcode;
      try{
        const customer =  await db.query(
          "INSERT INTO `clientInformation` (street, street2, city, state, zipcode) VALUES ( ?, ?, ?, ?, ?);",
          [street, street2, city, state, zipcode],
          (err, results) =>{
            if (err) {
              res.status(400).json({
                status: "Submit Failed",
                data: results,
              });
              console.log({ message: "Submit Failed" });
            };
            console.log(results);
  
            
          });
          /*
          const customer_last_inserted =  await db.query(
            "select * from `clientInformation` where client_id = LAST_INSERT_ID();",

            (err, results) =>{
              if (err) throw err;
              console.log(results);
              res.status(400).json({
                status: "success",
                data: results,
              });
            }
            );*/

        } catch (err) {
          console.log(err);
          }
        });