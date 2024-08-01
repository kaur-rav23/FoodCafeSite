const express = require('express');
const router = express.Router()
router.get('/offersData',(req,res)=>{
    try{
       console.log(couponData);
       res.send([global.couponData])
    }catch(err){
        console.error(error.message);
        res.send("server error: " + err.message);
    }
})

module.exports = router;
