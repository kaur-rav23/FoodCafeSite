import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Submitting:', credentials);

    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter valid credentials");
      }
      if (json.success) {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }

    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
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
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img src="https://img.freepik.com/free-photo/paper-urban-transport-composition_23-2149003880.jpg?w=996&t=st=1718379558~exp=1718380158~hmac=64ab2368f0e0f357060123d14d376b3ab089c8db2e733427498c0dd893b79491" alt="login" className="login-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <div className="brand-wrapper">
                  <h1 className="brand-name">GoFood</h1>
                </div>
                <p className="login-card-description">Sign into your account</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>
                  <Link to="/createuser" className="btn btn-link mb-20 " style={{color:"aquamarine",marginLeft:"20px",marginBottom:"20px"}}>New User? Create an account</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
