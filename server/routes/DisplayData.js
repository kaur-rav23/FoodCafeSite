const express = require('express');
const router = express.Router()
router.post('/foodData',(req,res)=>{
    try{
    //    console.log(global.food_items);
       res.send([global.food_items,global.foodCategory])
    }catch(err){
        console.error(error.message);
        res.send("server error: " + err.message);
    }
})

module.exports = router;