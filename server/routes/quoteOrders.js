const router = require("express").Router();
const mysql = require("../db");
const cors = require("cors");
//const { Router } = require("express");

router.get("/", (req, res) => {
  res.send("Hello world!");
});

// app.use(cors());

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// submit fuel quote form
router.post("/fuelquoteform", async (req, res) => {
    console.log(req.body);
    const gallons = req.body.gallons;
    const street = req.body.street;
    const city = req.body.city;
    const state = req.body.state;
    const zipcode = req.body.zipcode;
    const delivery_date = req.body.delivery_date;
    const suggest_quote = req.body.suggest_quote;
      try{
        const customer =  await mysql.query(
          "INSERT INTO `fuel_quote` (gallons, street, city, state, zipcode, delivery_date, suggest_quote) VALUES ( ?, ?, ?, ?, ?, ?, ?);",
          [gallons, street,city,state,zipcode,delivery_date, suggest_quote],
          (err, results) =>{
            if (err) {
              res.status(400).json({
                status: "This form has already been placed",
                data: results,
              });
              console.log({ message: "This form has already been placed!!" });
            };
            // console.log(results);
            return res.send("Success!")
  
            
          });
          // const customer_last_inserted =  await db.query(
          //   "select * from `fuel_quote` where fuelquote_id=LAST_INSERT_ID();",
  
          //   (err, results) =>{
          //     if (err) throw err;
          //     console.log(results);
          //     res.status(200).json({
          //       status: "success",
          //       data: results,
          //     });
          //   }
          //   );
  
        } catch (err) {
          console.log(err);
          }
        });
  //get all quote history info
  router.get("/getquotehistory", (req, res) => {
    const sql = "SELECT * FROM fuelquote_order;";
    const query = mysql.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.status(400).json({
        status: "success",
        results,
      });
    });
  });

  //get pricing module info
  router.get("/api/v1/pricingmodule", (req, res) => {
    const sql = "SELECT * FROM pricingmodule;";
    const query = mysql.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.status(400).json({
        status: "Success",
        results,
      });
    });
  });

  module.exports=router;