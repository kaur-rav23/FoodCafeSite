import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Artificial from '../components/Artificial';

export default function Home() {

    const [search, setSearch] = useState("");
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        response = await response.json();
        console.log(response);
        // response is a 2-d array which has 2 arrays consisting of objects 
        // one array consists of objects of food items
        // and other array consists of objects of food category        
        setFoodItem(response[0]);
        setFoodCat(response[1]);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Navbar />
            <div style={{ height: "1vh" }}>
            </div>
            <div>
                <Banner />
            </div>

            <div className="search-container">
                <div className="d-flex justify-center">
                    <input
                        className="form-control me-2 text-black fw-bold"
                        type="search"
                        style={{
                            fontFamily: 'Arial, sans-serif',
                            fontStyle: 'italic',
                            fontSize: '15px',
                            width: "30vw",
                            backgroundColor: "#e9e0e0"
                        }}
                        placeholder="Search"
                        aria-label="Search"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
                </div>
            </div>


            {/* <Carousel /> */}



            <div className="container">
                {
                    foodCat.length > 0 ? foodCat.map((data, index) => (
                        <div key={index} className="mb-4">
                            <h2 className="fs-5 m-3">{data.CategoryName}</h2>
                            <hr />
                            <div className="d-flex overflow-auto">
                                {foodItem.filter(item => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLowerCase())))
                                    .map(filteredItem => (
                                        <div key={filteredItem._id} className="flex-shrink-0 p-2" style={{ minWidth: '250px' }}>
                                            <Card foodItem={filteredItem}
                                                options={filteredItem.options[0]}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )) : <p>No food categories available</p>
                }
            </div>
            <div>
                <br></br>
                <br></br>
            </div>
            <hr></hr>
            <div>
            </div>
            <Footer />
        </div>
    );
}
