import React from 'react';
import OrderCard from '../OrderCard/OrderCard';
import './OrderSection.css';

const OrderSection = () => {
    const orders = [
        {
            title: 'Pasta',
            description: '"Check out our delicious pasta menu!"',
            imageUrl: 'https://images.pexels.com/photos/3214160/pexels-photo-3214160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'Starters',
            description: 'Begin your meal with tempting starters',
            imageUrl: 'https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'Shakes And Desserts',
            description: 'Enjoy our delicious shakes and desserts',
            imageUrl: 'https://images.pexels.com/photos/12419172/pexels-photo-12419172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ];

    return (
        <div className="order-section-outer">
            <h3 style={{"paddingTop":"3rem"}}>Order Now</h3>
            <div className="order-section">

                {orders.map((order, index) => (
                    <OrderCard
                        key={index}
                        title={order.title}
                        description={order.description}
                        imageUrl={order.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default OrderSection;
