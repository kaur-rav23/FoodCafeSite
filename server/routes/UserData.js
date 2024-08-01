const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/userData',async (req,res)=>{
    try{
        let myData=await User.findOne({'email':req.body.email})
        res.json({userData:myData});
        console.log(userData);
    }catch(e){
        console.log(e);
        res.send("server error: " + e.message);
    }
})


module.exports = router;