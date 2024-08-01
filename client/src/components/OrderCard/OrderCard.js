import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderCard.css';

const OrderCard = ({ title, description, imageUrl }) => {
  const navigate = useNavigate();
  const handleOrderClick = () => {
    navigate(`/menu`);
  };
  return (
    <div className="order-card">
      <img src={imageUrl} alt={title} className="order-card-image" />
      <div className="order-card-content">
        <h2 className="order-card-title">{title}</h2>
        <p className="order-card-description">{description}</p>
        <button className="order-card-button" onClick={handleOrderClick}>Order Now</button>

      </div>
    </div>
  );
};

export default OrderCard;
