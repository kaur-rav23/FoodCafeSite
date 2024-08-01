import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart, useDispatch } from "../../components/ContextReducer/ContextReducer";
import trash from './trash.svg';

export default function Cart() {
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [discountedPrice, setDiscountedPrice] = useState(0);
    let data = useCart();
    let dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const storedCoupon = JSON.parse(localStorage.getItem('appliedCoupon'));
        if (storedCoupon) {
            setAppliedCoupon(storedCoupon.code);
            setDiscountedPrice(storedCoupon.discountedValue);
        }
        else {
            setAppliedCoupon(null);
            setDiscountedPrice(0);
        }
    }, []);

    if (data.length === 0) {
        return (
            <div>
                <div className="m-5 w-100 text-center fs-3">The Cart is Empty!</div>
            </div>
        );
    }

    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:5000/api/orderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString()
            })
        });
        console.log("JSON RESPONSE:::::", response.status);

        alert("Your order has been placed successfully");
        if (response.status === 200) {
            dispatch({ type: "DROP" });
        }
    }

    const handleApplyCoupon = () => {
        navigate('/offers');
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0);

    return (
        <div>
            <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
                <table className='table table-hover'>
                    <thead className="text-success fs-4">
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Option</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((food, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{food.name}</td>
                                <td>{food.qty}</td>
                                <td>{food.size}</td>
                                <td>{food.price}</td>
                                <td>
                                    <button type="button" className="btn p-0" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>
                                        <img src={trash} alt="delete" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <div className="d-flex">
                    <div className="d-flex" style={{width:"70%"}}>
                        <div>
                            <button className='btn bg-success mt-5' onClick={handleCheckOut} >Check Out</button>
                        </div>
                        <div style={{ width: "2rem" }}></div>
                        <div>
                            <button className='btn bg-info mt-5' onClick={handleApplyCoupon}>Apply Coupon</button>
                        </div>
                    </div>
                    

                    <div style={{padding:"3rem"}}>
                    <h6>Total Price: <span style={{ color: "aqua" }}>  ₹ {totalPrice}/- </span> </h6>
                        {appliedCoupon && (
                            <div>
                                <h6>Applied Coupon: <span style={{ color: "aquamarine" }}> {appliedCoupon} </span>   </h6>
                                <h6>Discounted Price:  <span style={{ color: "aqua" }}>  ₹ {discountedPrice}/- </span> </h6>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

