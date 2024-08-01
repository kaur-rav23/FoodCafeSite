import React, { useState, useEffect } from 'react';
import { useCart } from "../../components/ContextReducer/ContextReducer";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import gofood from './gofood.png'
import './Offers.css';


const CountdownTimer = ({ expiryDate }) => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(expiryDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(expiryDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [expiryDate]);

    if (timeLeft.total <= 0) {
        return <span style={{ color: "red" }}>Expired</span>;
    }

    return (
        <div className="countdown-timer">
            <div className="time-block">
                <span className="time-value">{timeLeft.days} d</span>
                {/* <span className="time-unit">Days</span> */}
            </div>
            <div className="time-block">
                <span className="time-value">{timeLeft.hours} h</span>
                {/* <span className="time-unit">Hours</span> */}
            </div>
            <div className="time-block">
                <span className="time-value">{timeLeft.minutes} m</span>
                {/* <span className="time-unit">Minutes</span> */}
            </div>
            <div className="time-block">
                <span className="time-value">{timeLeft.seconds} s</span>
                {/* <span className="time-unit">Seconds</span> */}
            </div>
        </div>
    );
};

const getTimeLeft = (expiryDate) => {
    const total = Date.parse(expiryDate) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
};

const Offers = () => {
    const [couponCode, setCouponCode] = useState('');
    const [discountedValue, setDiscountedValue] = useState(0);
    const [coupons, setCoupons] = useState([]);
    const data = useCart();

    const fetchCouponsFromBackend = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/offersData');
            if (!response.ok) {
                throw new Error('Failed to fetch coupons');
            }
            const couponData = await response.json();
            setCoupons(couponData[0]);
        } catch (error) {
            console.error('Error fetching coupons:', error);
        }
    };

    useEffect(() => {
        fetchCouponsFromBackend();
    }, []);

    if (coupons.length === 0) {
        return (
            <div>
                <div>The Cart is Empty!</div>
            </div>
        );
    }

    const totalPrice = data.reduce((total, food) => total + food.price, 0);

    const applyCoupon = (couponCode) => {
        const selectedCoupon = coupons.find(coupon => coupon.coupon_code === couponCode);

        if (selectedCoupon) {
            if (selectedCoupon.used_count < selectedCoupon.usage_limit) {
                let newDiscountedValue = totalPrice;
                if (selectedCoupon.discount_type === 'percentage') {
                    const discountAmount = (totalPrice * selectedCoupon.discount_value) / 100;
                    newDiscountedValue = totalPrice - discountAmount;
                } else if (selectedCoupon.discount_type === 'fixed_amount') {
                    newDiscountedValue = totalPrice - selectedCoupon.discount_value;
                }
                setDiscountedValue(newDiscountedValue);

                // Save selected coupon to localStorage
                localStorage.setItem('appliedCoupon', JSON.stringify({
                    code: couponCode,
                    discountedValue: newDiscountedValue,
                }));

                const updatedCoupons = coupons.map(coupon => {
                    if (coupon.coupon_code === couponCode) {
                        coupon.used_count += 1;
                    }
                    return coupon;
                });
                setCoupons(updatedCoupons);
            } else {
                alert('Coupon usage limit exceeded.');
                setDiscountedValue(totalPrice);
            }
        } else {
            alert('Invalid coupon code');
            setDiscountedValue(totalPrice);
        }
    };

    return (
        <div style={{backgroundColor:"black"}}>
            <Navbar />
           <br></br>
           {/* <hr></hr> */}
            <div className="d-flex">
                <div className="container" style={{ width: "40%", height: "100vh" }}>
                    <div className="photoback" style={{ height: "90%", width: "80%", marginLeft: "13rem", marginTop: "6rem" }}>
                        <img src={gofood} style={{ height: "100%", width:"95%" }}></img>
                    </div>
                </div>
                <div className="container d-flex justify-center flex-direction-column" style={{ width: "60%" }}>
                    <div className="offers-container" style={{ width: "70vw" }}>
                        <h4>Cart Value: Rs {totalPrice} /-</h4>
                        <div className="container d-flex" style={{ width: "70%" }}>

                            <div className="coupons-list" style={{ width: "90%" }}>
                                <hr></hr>
                                {coupons.map(coupon => (
                                    <div key={coupon._id} className="coupon-item d-flex">
                                        <div className="coupon-details">
                                            <div>
                                                <h5 style={{ color: "#e2a452" }}>  <span >~ {coupon.coupon_code} </span> </h5>
                                                <p style={{ fontSize: "1rem" }}>{coupon.discount_type === 'percentage' ? `${coupon.discount_value}% off` : `Rs ${coupon.discount_value} off`}</p>
                                            </div>
                                            <p style={{ color: "pink" }}>
                                                Valid for: <CountdownTimer expiryDate={coupon.valid_to} />
                                            </p>
                                        </div>
                                        <div>
                                            <button onClick={() => applyCoupon(coupon.coupon_code)} className="apply-button">Apply Coupon</button>
                                        </div>
                                    </div>
                                ))}
                                <hr />
                            </div>
                        </div>
                        <h4>Discounted Value: Rs {discountedValue || totalPrice} /-</h4>
                    </div>
                </div>
            </div>
            <br></br>
            <br>
            </br>
            <br></br>
            {/* <hr></hr> */}
            <Footer />
        </div>
    );
};

export default Offers;
