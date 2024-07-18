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

// const express = require('express');
// const router = express.Router();
// const Coupon = require('../models/Coupon'); // Assuming you have a Coupon model

// // GET endpoint to fetch coupon data
// router.get('/offersData', async (req, res) => {
//     try {
//         const coupons = await Coupon.find({}); // Fetch all coupons from MongoDB
//         res.json(coupons); // Send coupons as JSON response
//     } catch (err) {
//         console.error('Error fetching coupons:', err.message);
//         res.status(500).json({ error: 'Server error' }); // Send an error response if something goes wrong
//     }
// });

// module.exports = router;
