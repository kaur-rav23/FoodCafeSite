import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMyOrder = async () => {
        try {
            const email = localStorage.getItem('userEmail');
            const response = await fetch("https://gofoods-zomd.onrender.com/api/myOrderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setOrderData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <hr></hr>

            <div className='container'>
                <div className='row'>
                    {orderData && orderData.orderData && orderData.orderData.order_data
                        .slice(0)
                        .reverse()
                        .map((order, index) => (
                            <div key={index} className='w-100'>
                                {Array.isArray(order) ? (
                                    order.map((item, idx) => (
                                        <div key={idx} className='mb-5'>
                                            {Array.isArray(item) ? (
                                                item.map((arrayData, i) => (
                                                    <div key={i} className='col-12 col-md-6 col-lg-3'>
                                                        {arrayData.Order_date ? (
                                                            <div className='m-auto mt-5'>
                                                                <h5 style={{ color: "#FFF8DC" }}>Order Date: {new Date(arrayData.Order_date).toLocaleDateString()}</h5>
                                                                <hr />
                                                            </div>
                                                        ) : (
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                {/* <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.qty}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        {/* <span className='m-1'>{new Date(arrayData.Order_date).toLocaleDateString()}</span> */}
                                                                        <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))
                                            ) : null}
                                        </div>
                                    ))
                                ) : null}
                            </div>
                        ))}
                </div>

            </div>
            <div>
                <hr></hr>
            </div>
            <Footer />
        </div>
    );
}
