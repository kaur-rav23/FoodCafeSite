// import React from 'react'
// import { Link } from'react-router-dom'

// export default function Footer() {
//   return (
//     <div>
//       <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
//         <div className="col-md-4 d-flex align-items-center">
//           <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
//           </Link>
//           <span className="text-muted">© 2024 GoFood, Inc</span>
//         </div>
//       </footer>
//     </div>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';
import gofood from './gofood.svg';

export default function Footer() {
  return (
    <footer className="text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <Link to="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
              <img src={gofood} alt="GoFood Logo" className="img-fluid" style={{ height: '40px' }} />
            </Link>
            <p className="text-muted text-success">© 2024 GoFood, Inc</p>
          </div>
          <div className="col-md-3">
            {/* <h5>Quick Links</h5> */}
            <div style={{marginBottom:"15px"}}></div>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/myOrder" className="text-white text-decoration-none">My Orders</Link></li>
              <li><Link to="/createuser" className="text-white text-decoration-none">Sign Up</Link></li>
              <li><Link to="/login" className="text-white text-decoration-none">Login</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 style={{color:"aquamarine"}}>Contact Us</h5>
            <p className="text-muted">Phase-2, Dugri, Ludhiana</p>
            <p className="text-muted">Email: gofood@gmail.com</p>
            <p className="text-muted">Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
