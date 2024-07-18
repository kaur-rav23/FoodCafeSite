// // models/coupon.js

// const mongoose = require('mongoose');

// const couponSchema = new mongoose.Schema({
//     coupon_code: { type: String, required: true, unique: true },
//     discount_type: { type: String, enum: ['percentage', 'fixed_amount'], required: true },
//     discount_value: { type: Number, required: true },
//     valid_from: { type: Date, required: true },
//     valid_to: { type: Date, required: true },
//     // usage_limit: { type: Number, required: true },
//     used_count: { type: Number, default: 0 }
// });

// const Coupon = mongoose.model('Coupon', couponSchema);

// module.exports = Coupon;


const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    coupon_code: { type: String, required: true },
    discount_type: { type: String, enum: ['percentage', 'fixed_amount'], required: true },
    discount_value: { type: Number, required: true },
    valid_from: { type: Date, required: true },
    valid_to: { type: Date, required: true },
    usage_limit: { type: Number, required: true },
    used_count: { type: Number, default: 0 }
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
