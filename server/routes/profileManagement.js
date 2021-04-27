const router = require("express").Router();
const mysql = require("../db");
const cors = require("cors")
// const { Router } = require("express");




//go to profile page with userID
// router.get("/:userID", async (req, res) =>{
//   const userID = req.params.userID;
//   try {
//     const user = await mysql.query("SELECT * FROM COSC4353.UserCredentials where userID = ?", [userID], (err, results)=>{
//       if(err) throw err;
//       console.log(results);
//     res.status(200).json({
//       status: "successss",
//       data:{
//         data: results
//       },
//     })
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Server Error");

//     }
// })

//profile with username
router.get("/profileget", async (req, res) =>{
  const username = req.body.username;
  try {
    const user = await mysql.query("SELECT * FROM COSC4353.client_information where username = 'admin'",[username], (err, results)=>{
      if(err) throw err;
      console.log(results);
    res.status(200).json({
      status: "succcccess",
      data:{
        results
      },
    })
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");

    }
})


// submit client information
router.post("/update", async (req, res) => {
   // console.log(req.body);
    const {username, name, street, street2, city, state, zipcode} = req.body;

      try{
        const customer =  await mysql.query(
          "INSERT INTO COSC4353.client_information (username, name, street, street2, city,state,zipcode) VALUES (?, ?, ?, ?, ?, ?, ?);",
          [username, name, street, street2, city, state, zipcode],
          (err, results) =>{
            if (err) {
              console.error(err.message);
              return res.status(401);
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
          res.status(500).send("Server Error");

          }
        });

module.exports=router;