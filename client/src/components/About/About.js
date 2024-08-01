import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faPlateWheat, faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const services = [
    { icon: faUtensils, title: 'Order from Menu', description: 'Explore our diverse menu and place your order effortlessly' },
    { icon: faKitchenSet, title: 'We make your meal', description: 'Our expert chefs prepare your meal with the freshest ingredients' },
    { icon: faPlateWheat, title: 'We serve', description: 'Enjoy our prompt and friendly service as we deliver your meal to you' },
];

const About = () => {
    return (
        <div className="services-container">
            <h3>How it works</h3>
            <div className="services-outer">
                <div className="services-app">
                    <div className="services">
                        {services.map((service, index) => (
                            <div key={index} className="service">
                                <div className="icon">
                                    <FontAwesomeIcon icon={service.icon} />
                                </div>
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                                {/* <button>Order Now</button> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
