import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
import gofood from './gofood.svg';


export default function Navbar() {
  const data = useCart();
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/" style={{color:"aquamarine",paddingLeft:"10px",fontSize:"25px",marginRight:"30px",marginLeft:"4vw"}}>
          <img src={gofood} alt="GoFood Logo" className="me-2" style={{ width: '40px', height: '40px',marginRight:"20px" }} />
          GoFood
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{marginTop:"5px",fontSize:"14px"}}>Home</Link>
            </li>
            {localStorage.getItem('authToken') && (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/myOrder" style={{marginTop:"5px",fontSize:"14px"}}>MyOrders</Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/offers" style={{marginTop:"5px",fontSize:"14px"}}>Offers</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {!localStorage.getItem('authToken') ? (
              <>
                <Link className="btn bg-black mx-1" to="/createuser">Sign Up</Link>
                <Link className="btn text-white" to="/login">Login</Link>
              </>
            ) : (
              <div className="d-flex align-items-center">
                <button className="btn" style={{marginTop:"5px",fontSize:"14px"}} onClick={() => setCartView(true)}>
                  My Cart <Badge pill bg="danger">{data.length}</Badge>
                </button>
                {cartView && (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />
                  </Modal>
                )}
                <div>
                <Link className="nav-link active" aria-current="page" to="/myProfile" style={{marginTop:"5px",fontSize:"15px",color:"white"}}>My Profile</Link>
                </div>
                <button className="btn bg-black mx-1" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
