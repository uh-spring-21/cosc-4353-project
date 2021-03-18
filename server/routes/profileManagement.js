const router = require("express").Router();
const app = require ("express");
const db = require("../db");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Router } = require("express");

router.get("/", (req, res) => {
  res.send("Hello world!");
});

//app.use(cors());

//app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));

// submit client information
router.post("/clientInformation", async (req, res) => {
    console.log(req.body);
    const full_name = req.body.full_name;
    const street = req.body.street;
    const street2 = req.body.street2;
    const city = req.body.city;
    const state = req.body.state;
    const zipcode = req.body.zipcode;
      try{
        const customer =  await db.query(
          "INSERT INTO `clientInformation` (full_name, address1, address2,city,state,zipcode) VALUES (?, ?, ?, ?, ?, ?);",
          [full_name, street, street2, city, state, zipcode],
          (err, results) =>{
            if (err) {
              res.status(400).json({
                status: "Submit Failed",
                data: results,
              });
            };
           // console.log(results);
            
            return res.send("Success!")
            
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

module.exports=router;