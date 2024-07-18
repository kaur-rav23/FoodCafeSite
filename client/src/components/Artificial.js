import React, { useState } from 'react';
import Slider from 'react-slick';
import './Artificial.css'; // Ensure to create and import the CSS file
import banner1 from './banner1.png';
import banner2 from './banner2.png';
import banner3 from './banner3.png';


const Artificial = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentSlide(index),
        prevArrow: <button type="button" className="slick-prev"> Previous</button>,
        nextArrow: <button type="button" className="slick-next"> Next</button>,
    };

    const collections = [
        {
            href: "/",
            imgSrc: banner1,
            alt: "Just Chill - Summer Delights",
            title: "Just Chill - Summer Delights",
        },
        {
            href: "/",
            imgSrc: banner2,
            alt: "Cheer For Sure",
            title: "Cheer For Sure",
        },
        {
            href: "/",
            imgSrc: banner3,
            alt: "Buy 1 Get 1 FREE",
            title: "Buy 1 Get 1 FREE",
        },
        {
            href: "/",
            imgSrc: banner1,
            alt: "New Launches",
            title: "New Launches",
        },
        // {
        //     href: "/",
        //     imgSrc: "https://product-assets.faasos.io/eatsure_cms/production/24a22180-4eef-47eb-ade4-2231d4389588.jpg?d=375&tr:w-0.3,h-0.3",
        //     alt: "Exclusive Offers Zone",
        //     title: "Exclusive Offers Zone",
        // },
        // {
        //     href: "/",
        //     imgSrc: "https://product-assets.faasos.io/eatsure_cms/production/fc5d9e0e-89d4-467d-b106-bcf9a4a470d5.jpg?d=375&tr:w-0.3,h-0.3",
        //     alt: "FLAT 30% off on Orders above 899",
        //     title: "FLAT 30% off on Orders above 899",
        // },
    ];

    return (
        <section className="style__Wrapper-sc-18spifb-0 bBJBnR">
            <div className="style__Container-sc-18spifb-1 ccEYlo">
                <div className="style__HeadingWrapper-sc-18spifb-2 gYPwxN">
                    <h5 data-qa="localityPageMostLovedCollections">
                        Most Loved <strong>Collections</strong>
                    </h5>
                </div>
                <Slider {...settings}>
                    {collections.map((collection, index) => (
                        <div key={index} className={`slick-slide ${currentSlide === index ? 'slick-current' : ''}`}>
                            <a href={collection.href} style={{ width: '100%', display: 'inline-block' }}>
                                <figure className="style__WrapperCard-sc-18spifb-3 eeIpTu">
                                    <div className="style__ImgWrap-sc-18spifb-5 jgSUJI">
                                        <img src={collection.imgSrc} alt={collection.alt} width="1" height="1" className="LazyLoadImg__Image-sc-10g7mdq-0 dSiJbK loaded" />
                                    </div>
                                    <div className="style__DescCard-sc-18spifb-4 gsARin">
                                        <h6>{collection.title}</h6>
                                        <span data-qa="mostLovedCollectionArrow">
                                            <svg width="20px" height="22px" viewBox="0 0 24 24" fill="none">
                                                <path fill="#EDEDED" d="M1.915 2.14h2.128V0h15.701v2.14h2.234v2.14H24l-.106 15.334-1.916-.107v2.246H19.85L19.744 24l-15.7-.107v-2.247H1.967l.107-2.14H0V4.28h1.915V2.14z"></path>
                                                <path stroke="#4945BE" strokeWidth="1" d="M10.005 8.004l4 4-4 4"></path>
                                                
                                            </svg>
                                        </span>
                                    </div>
                                </figure>
                            </a>
                            <br></br>
                        </div>
                    ))}
                </Slider>
                <br></br>
            </div>
        </section>
    );
};

export default Artificial;
