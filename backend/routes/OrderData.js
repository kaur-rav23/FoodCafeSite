const express = require('express');
const router = express.Router()
const Order = require('../models/Orders')
router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    await data.splice(0, 0, { Order_date: req.body.order_date })

    let eId = await Order.findOne({ 'email': req.body.email }) // email ID
    console.log(eId);
    if (eId == null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true })
            })
        }
        catch (e) {
            console.log(e);
            res.send("server error: " + e.message);
        }
    }
    else {
        try {
            await Order.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: [data] } })
                .then(() => {
                    res.json({ success: true })
                })
        }
        catch(e){
            console.log(e);
            res.send("server error: " + e.message);
        }
    }
})

router.post('/myorderData',async (req,res)=>{
    try{
        let myData=await Order.findOne({'email':req.body.email})
        res.json({orderData:myData});
    }catch(e){
        console.log(e);
        res.send("server error: " + e.message);
    }
})
module.exports = router;