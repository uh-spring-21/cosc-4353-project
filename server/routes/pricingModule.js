const router = require("express").Router();
const mysql = require("../db");

router.get("/quote", (req,res)=>{

    
    const {username, gallons_req, delivery_date} = req.body;
    var delivery_state = "GA";
    try{

    const getState = mysql.query("SELECT * from COSC4353.client_information where username =?", [username], (err,results) =>{

        if(err)
        {
            console.error(err.message)
        }
        else{
            delivery_state = results[0].state;
        }

    });
    const pastOrders = mysql.query("select * from COSC4353.fuelquote where username =?",[username], (err,results)=>{
                
        if(err){
            console.error(err.message);
            return res.status(401);

        }
        
        var companyMargin = 0.1;
        var currentPrice = 1.50;
        var stateMargin;
        var rateHistoryMargin;
        var gallonsMargin;
        
        if(delivery_state == "TX")
        {
            stateMargin = 0.02;
        }
        else{
            stateMargin = 0.04;
        }

        if (gallons_req > 1000){
            gallonsMargin = 0.02;
        }
        else{
            gallonsMargin = 0.03;
        }
        

        if (results.length > 0)
        {     
            //past history
            //calculate margin
            rateHistoryMargin = 0.01;
        }
        else{
            //no past history
            rateHistoryMargin = 0;
        }

        var margin = currentPrice * (stateMargin - rateHistoryMargin + gallonsMargin + companyMargin)
        var price = margin + currentPrice;
        var total = gallons_req * price;

        
        return res.status(200).json({
            data:
            {   username,
                delivery_state,
                price,
                total
            }
        });

    });




    }catch(err){
        console.error(err.message);

    }
    
});


router.post("/submit", (req,res)=>{
    const {reqid,username, 
        gallons_req, 
        delivery_state, 
        delivery_zipcode, 
        delivery_street, 
        suggest_quote, 
        total_amount_due, 
        delivery_city, 
        delivery_date} = req.body;

        const query = mysql.query("INSERT INTO fuelquote VALUES (?,?,?,?,?,?,?,?,?,?)" , [reqid,username, gallons_req, 
            delivery_state, delivery_zipcode, delivery_street, suggest_quote, total_amount_due, 
            delivery_city, delivery_date], (err,results)=>{
                if(err){
                    console.error(err.message);
                }
                else{
                    res.status(200).json("Inserted Quote");
                }

            })



});






module.exports = router;