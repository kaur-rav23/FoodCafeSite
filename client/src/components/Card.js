import React, { useState, useRef, useEffect } from 'react';
import { useCart, useDispatch } from './ContextReducer';

export default function Card(props) {
    const dispatch = useDispatch();
    const data = useCart();
    const options = props.options;
    const priceOptions = Object.keys(options);
    // console.log(priceOptions);

    const priceRef = useRef();
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(priceOptions[0]);

    useEffect(() => {
        // console.log(priceRef.current.value);
        setSize(priceRef.current.value);
    }, []);

    const handleAddToCart = async () => {
        const finalPrice = qty * parseInt(options[size]);
        const item = {
            type: "ADD",
            id: props.foodItem._id,
            name: props.foodItem.name,
            img: props.img,
            price: finalPrice,
            qty: qty,
            size: size
        };
        let food = null;
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }
        }
        // console.log(food);
        if (food !== null) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
                return;
            } else if (food.size !== size) {
                await dispatch(item);
                return;
            }
        }
        await dispatch(item);
    };

    return (
        <div className="card mt-3" style={{ width: "14rem", maxHeight: "320px" }}>
            <img src={props.foodItem.img} className="card-img-top" alt={props.foodItem.name} style={{ height: '140px', objectFit: 'cover' }} />
            <div className="card-body" style={{ overflowY: 'hidden' }}>
                <h5 className="card-title" style={{ fontSize: "16px" }}>{props.foodItem.name}</h5>
                <div className="container w-100 fs-6">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <select className="m-1 h-100 bg-success rounded" value={qty} onChange={(e) => setQty(e.target.value)} style={{ width: "60px" }}>
                            {Array.from(Array(4), (e, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <select className="m-1 h-100 bg-success rounded" ref={priceRef} value={size} onChange={(e) => setSize(e.target.value)} style={{ width: "100px" }}>
                            {priceOptions.map((data) => (
                                <option key={data} value={data}>{data}</option>
                            ))}
                        </select>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-inline h-100 fs-7">
                            Rs {qty * parseInt(options[size])}/-
                        </div>
                    </div>
                    <button className="btn btn-success w-100" onClick={handleAddToCart} style={{ fontSize: "14px", padding: "4px 8px" }}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
