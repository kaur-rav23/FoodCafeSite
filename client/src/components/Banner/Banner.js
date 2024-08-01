import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css'; // Import the CSS file
import banner1 from './banner1.png';
import banner2 from './banner2.png';
import banner3 from './banner3.png';
import {useNavigate} from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <button className="slick-next">Next</button>,
        prevArrow: <button className="slick-prev">Previous</button>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const images = [
        {
            src: banner1,
            alt: "Buy 1 Get 1 Free Wraps from Faasos",
        },
        {
            src: banner2,
            alt: "Buy 1 Get 1 Free Burgers from Wendy's",
        },
        {
            src: banner3,
            alt: "60% Off on Rice Bowls from The Good Bowl",
        },
        // Add more image objects as needed
    ];
    const handleClickOnImage = () => {
        navigate('/offers');
    }

    return (
        <section className="banner-wrapper">
            <div className="banner-container">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="banner-slide">
                            <div className="image-wrapper">
                                <img src={image.src} alt={image.alt} className="banner-image" onClick={handleClickOnImage}/>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Banner;
