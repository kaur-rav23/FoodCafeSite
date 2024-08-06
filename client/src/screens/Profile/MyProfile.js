import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar.js';

const MyProfile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUserData = async () => {
        try {
            const email = localStorage.getItem('userEmail'); // Capture logged-in user's email
            if (!email) {
                throw new Error("Email not found in local storage");
            }
            const authToken = localStorage.getItem('authToken'); // Retrieve JWT token from local storage

            const response = await fetch("https://gofoods-zomd.onrender.com/api/userData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}` // Include the JWT token in the request headers
                },
                body: JSON.stringify({ email })
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch user data: ${response.statusText}`);
            }

            const data = await response.json();
            setUserData(data);
        } catch (error) {
            setError(`Failed to fetch user data: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div>
            <Navbar />
            <hr></hr>
            <Container className="mt-5">
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title style={{"color":"aquamarine"}}>Profile Details</Card.Title>
                                <br></br>
                                {userData ? (
                                    <div>
                                        <Card.Text><strong style={{"color":"pink",marginRight:"0.2rem"}}>Name:</strong> {userData.userData.name}</Card.Text>
                                        <Card.Text><strong style={{"color":"pink",marginRight:"0.2rem"}}>Email:</strong> {userData.userData.email}</Card.Text>
                                        <Card.Text><strong style={{"color":"pink",marginRight:"0.2rem"}}>Location:</strong> {userData.userData.location}</Card.Text>
                                        <Card.Text><strong style={{"color":"pink",marginRight:"0.2rem"}}>Date Joined:</strong> {userData.userData.date}</Card.Text>
                                    </div>
                                ) : (
                                    <div>Loading...</div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img src=""></img>
                    </Col>
                </Row>
            </Container>
            <div>
                <div>
                    <div>
                        <div style={{ height: "10vh" }}></div>
                    </div>
                </div>
            </div>
            <hr />
            <Footer />
        </div>
    );
};

export default MyProfile;
