import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

const Main = () => (
    <div className="hero-section">
        <div className="hero-content text-center">
            <h1>Fast, tasty & served well</h1>
            <p>100% healthy and natural food</p>
            <Link className="btn btn-warning btn-lg" to="/menu">See Full Menu</Link>
        </div>
    </div>
);

export default Main;
