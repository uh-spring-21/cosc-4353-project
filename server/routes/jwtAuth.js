const router = require("express").Router()
const mysql = require("../db")
const bcrypt = require('bcrypt');
const express = require("express");
const jwtGenerator = require('../utils/jwtGenerator')
const jwt = require('jsonwebtoken');
const valid = require("../middleware/valid")
const authorize = require("../middleware/authorize")


//register

router.post("/register", valid, async (req,res) => {
    //1 break down req body
    const {username,password}  = req.body;
    const salt =  await bcrypt.genSalt(10);
    const pwd =  await bcrypt.hash(password,salt);
    try {

        // check if user exist
            let x = false
            const user = await mysql.query("select * from usercredentials where username =?",[username], (err,results)=>{
                
                if(err){
                    console.error(err.message);
                    return res.status(401);

                }
                if (results.length > 0)
                {
                
                    return res.status(401).json("User already exists");
                
                }
                
                mysql.query("INSERT INTO usercredentials VALUES(?,?);",[username,pwd] ,(error, results, fields) =>{
                    if(error)
                    {
                        return console.error(error.message);
                    }
                    else
                        var x =1;
                        //return res.send("Success added!");
                        
                        const token = jwtGenerator(username);
                        res.json({token});
                }); 
            });



        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// login module

router.post("/login", valid,async (req,res)=>
{
    const {username,password}  = req.body;
    try {
        // destructure
        //check if user doesnt exist, if not error
        
        mysql.query("SELECT * FROM usercredentials WHERE username =?;",[username] ,function (err,rows){
            if(err){
                console.error(err.message);
                return res.status(401);
                
            }
            if (rows.length === 0)
            {
                return res.status(401).json("Username does not exist.");
            }
            
            
            bcrypt.compare(password, rows[0].password, function(err, result) {
                if(result)
                {
                    const token = jwtGenerator(username);
                    return res.json({token})
                    //return res.status(200).send("Login was successful!");
                }
                else
                {
                   var x =1
                    return res.status(401).json("Wrong credentials!");
                }
            });
        });
        
        
        
        //check if incoming password is the same as DB
        
        
        //give them token?
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

router.get("/is-verified", authorize, async(req,res) =>
{
    try {
        res.json(true)
    } catch (error) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
})

module.exports=router;