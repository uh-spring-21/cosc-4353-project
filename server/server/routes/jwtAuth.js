const router = require("express").Router()
const mysql = require("../db")
const bcrypt = require('bcrypt');
//register

router.post("/register", async (req,res) => {
    //1 break down req body
    const {username,password}  = req.body;
    try {

        // check if user exist
         
            mysql.getConnection(function(err, conn){
                conn.query("select * from usercredentials where username =?",[username], function(err, rows) {
              
                     if (rows.length > 0){
                        return res.status(401).send("User already exists!");
                     }
                });
            });
            
        // decrypt password
            const saltRounds = 10;
            
            bcrypt.genSalt(saltRounds, function(err,salt) {
                bcrypt.hash(password,salt,function(err,hash){
                    //let sql = ("INSERT INTO usercredentials VALUES(?,?);",[username,hash]);
                    //console.log(sql);
                    mysql.query("INSERT INTO usercredentials VALUES(?,?);",[username,hash] ,(error, results, fields) =>{
                        if(error)
                        {
                            return console.error(error.message);
                        }
                    }); 
                    return res.status(200).send("Success user added!");
                  
                });
            });
        //enter the new user inside our database



        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// login module

router.post("/login", async (req,res)=>
{
    const {username,password}  = req.body;
    try {
        // destructure
        //check if user doesnt exist, if not error
        mysql.getConnection(function(err, conn){
        conn.query("SELECT * FROM usercredentials WHERE username =?;",[username] ,function (err,rows){
            if (rows.length === 0)
            {
              return res.status(401).send("Username does not exist.");
            }
            
            bcrypt.compare(password, rows[0].password, function(err, result) {
                if(!result)
                {
                    return res.json(401).send("Wrong credentials!");
                }

                
                return res.status(200).send("Login was successful!");
            });

        });
    });
        
        
        //check if incoming password is the same as DB


        //give them token?
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports=router;