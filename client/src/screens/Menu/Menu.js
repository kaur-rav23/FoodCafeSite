import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card';
import './Menu.css'
export default function Menu() {
    const [search, setSearch] = useState("");
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("https://gofoods-zomd.onrender.com/api/foodData", {
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
        <div style={{backgroundColor:"black"}}>
            <Navbar />
            {/* <h1>Explore</h1> */}

            <div className="container" >
                {
                    foodCat.length > 0 ? foodCat.map((data, index) => (
                        <div key={index} className="mb-4">
                            <h2 className="fs-3 m-3">{data.CategoryName}</h2>
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
        </div>
    )
}
