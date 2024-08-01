import React, { useEffect, useState } from 'react';
import OrderSection from '../../components/OrderSection/OrderSection';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import About from '../../components/About/About';
import Packages from '../../components/Packages/Packages';
import Navbar from '../../components/Navbar/Navbar';

export default function Homes() {

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
            <div>
                <Main />
            </div>
            <div style={{ backgroundColor: "black", height: "6vh" }}>

            </div>
            <div>
                <OrderSection />
            </div>
            <div style={{ backgroundColor: "black", height: "12vh" }}>

            </div>
            <div style={{ backgroundColor: "black"}}>
                <Packages />
            </div>
            <div style={{ backgroundColor: "black", height: "15vh" }}>

            </div>
            <div>
                <About />
            </div>
            <div style={{ backgroundColor: "black", height: "12vh" }}>

            </div>
            <Footer />
        </div>
    );
}
