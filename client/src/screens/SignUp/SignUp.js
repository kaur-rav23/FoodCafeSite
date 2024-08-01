import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log('Submitting:', credentials);

        try {
            const response = await fetch("http://localhost:5000/api/CreateUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                    location: credentials.geolocation
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
            navigate('/login');

            if (!json.success) {
                alert("Enter valid credentials");
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Email Already Exists', error);
        }
    }

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
        console.log(credentials);
    }

    return (
        <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
            <div className="container">
                <div className="card signup-card" style={{ marginTop: '20px' }}>
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1718379454~exp=1718380054~hmac=60cfc487273dd82b536af627e4200baeb08c9b764cfa6b0251ac89586d531437" alt="signup" className="signup-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <div className="brand-wrapper">
                                    <h1 className="brand-name">GoFood</h1>
                                </div>
                                <p className="signup-card-description">Create your account</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="UserName" className="form-label">Username</label>
                                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>
                                    <Link to="/login" className="btn btn-link" style={{color:"aquamarine",marginLeft:"20px",marginBottom:"20px"}}>Already a user? Login</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
