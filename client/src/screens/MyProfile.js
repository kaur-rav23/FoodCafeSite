import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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

            const response = await fetch("http://localhost:5000/api/userData", {
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

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        const name = e.target.elements.formName.value;
        const email = e.target.elements.formEmail.value;
        const location = e.target.elements.formLocation.value;

        const token = localStorage.getItem("authToken");

        if (!token) {
            console.error("Authentication token not found.");
            return;
        }

        const requestBody = {
            name,
            email,
            location,
        };

        try {
            const response = await fetch("http://localhost:5000/api/updateProfile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error("Unauthorized access: Token not provided or invalid.");
                }
                throw new Error(`Failed to update profile: ${response.status} (${response.statusText})`);
            }

            const data = await response.json();
            console.log("Profile updated successfully:", data);

            // Optionally, you can fetch updated user data after successful update
            fetchUserData();
        } catch (error) {
            console.error("Error updating profile:", error.message);
            alert("Failed to update profile. Please try again.");
        }
    };


    const handleChangePassword = async (e) => {
        e.preventDefault();
        const currentPassword = e.target.formCurrentPassword.value;
        const newPassword = e.target.formNewPassword.value;

        try {
            const email = localStorage.getItem('userEmail');
            const authToken = localStorage.getItem('authToken'); // Retrieve JWT token from local storage

            const response = await fetch("http://localhost:5000/api/changePassword", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}` // Include the JWT token in the request headers
                },
                body: JSON.stringify({ email, currentPassword, newPassword })
            });

            if (!response.ok) {
                throw new Error(`Failed to change password: ${response.statusText}`);
            }

            // Fetch updated user data after successful password change
            fetchUserData();
        } catch (error) {
            console.error(`Error changing password: ${error.message}`);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Navbar />
            <hr></hr>
            <Container className="mt-5">
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Profile Details</Card.Title>
                                {userData ? (
                                    <>
                                        <Card.Text><strong>Name:</strong> {userData.userData.name}</Card.Text>
                                        <Card.Text><strong>Email:</strong> {userData.userData.email}</Card.Text>
                                        <Card.Text><strong>Location:</strong> {userData.userData.location}</Card.Text>
                                        <Card.Text><strong>Date Joined:</strong> {userData.userData.date}</Card.Text>
                                    </>
                                ) : (
                                    <div>Loading...</div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Update Profile</Card.Title>
                                <Form onSubmit={handleUpdateProfile}>
                                    <Form.Group controlId="formName" className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your name"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            defaultValue={userData?.userData.email || ""}
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formLocation" className="mb-3">
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your location"
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Update Profile</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Change Password</Card.Title>
                                <Form onSubmit={handleChangePassword}>
                                    <Form.Group controlId="formCurrentPassword" className="mb-3">
                                        <Form.Label>Current Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter current password" />
                                    </Form.Group>
                                    <Form.Group controlId="formNewPassword" className="mb-3">
                                        <Form.Label>New Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter new password" />
                                    </Form.Group>
                                    <Form.Group controlId="formConfirmPassword" className="mb-3">
                                        <Form.Label>Confirm New Password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm new password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Change Password</Button>
                                </Form>
                            </Card.Body>
                        </Card>
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
