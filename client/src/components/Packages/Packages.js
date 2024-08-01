import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import './Packages.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();
  const handleOrders=async() =>{
    navigate('/menu');
  }

  const fetchPackages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/packageData');
      setPackages(response.data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  if (packages.length === 0) {
    return (
      <div className="no-packages">
        No Packages Found
      </div>
    );
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="packages-section-outer">
      <section className="packages-section">
        <div className="packages-header">
          <h2>Our packages</h2>
        </div>
        <Slider {...settings}>
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              <div className="package-details">
                <div className="package-details-inner">
                  <h4>{pkg.name}</h4>
                  <ul>
                    {pkg.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p>Total Costs</p>
                  <h2>${pkg.price}</h2>
                  <button className="order-button" onClick={handleOrders}>Order Now</button>
                </div>
              </div>
              <div className="package-image">
                <img src={pkg.image} alt={pkg.name} />
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Packages;
