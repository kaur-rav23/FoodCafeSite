// import React from 'react';
// import { Link } from 'react-router-dom';
// import gofood from './gofood.svg';

// export default function Footer() {
//   return (
//     <footer className="text-white py-4" style={{backgroundColor:"black"}}>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-5">
//             <Link to="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
//               <img src={gofood} alt="GoFood Logo" className="img-fluid" style={{ height: '40px' }} />
//             </Link>
//             <p className="text-muted text-success">© 2024 GoFood, Inc</p>
//           </div>
//           <div className="col-md-3">
//             {/* <h5>Quick Links</h5> */}
//             <div style={{marginBottom:"15px"}}></div>
//             <ul className="list-unstyled">
//               <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
//               <li><Link to="/myOrder" className="text-white text-decoration-none">My Orders</Link></li>
//               <li><Link to="/createuser" className="text-white text-decoration-none">Sign Up</Link></li>
//               <li><Link to="/login" className="text-white text-decoration-none">Login</Link></li>
//             </ul>
//           </div>
//           <div className="col-md-4">
//             <h5 style={{color:"aquamarine"}}>Contact Us</h5>
//             <p className="text-muted">Phase-2, Dugri, Ludhiana</p>
//             <p className="text-muted">Email: gofood@gmail.com</p>
//             <p className="text-muted">Phone: +123 456 7890</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from 'react';
import './Footer.css'; // Assuming you will add your CSS here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section agency">
          <h5>The agency for impatient brands®</h5>
        </div>
        <div className="footer-section contact">
          <h4>GoFood</h4>
          <p>gofood@gmail.com</p>
          <p>+44 20 7998 7571</p>
          <p>Ludhiana,Punjab</p>
          {/* <p>70 Wapping Wall, London E1W 3SS</p> */}
          {/* <p><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">SEE ON MAP →</a></p> */}
        </div>
        <div className="footer-section newsletter">
          {/* <h4>Get some delicious food at reasonable prcies</h4> */}
          {/* <p><a href="https://example.com" target="_blank" rel="noopener noreferrer">Check Our Menu →</a></p> */}
          {/* <button >Menu</button> */}
          <div className="social-icons">
            {/* <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a> */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
