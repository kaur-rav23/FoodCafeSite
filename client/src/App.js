import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import MyOrder from './screens/MyOrder';
import MyProfile from './screens/MyProfile';
// import Payment from './screens/Payment';
import Offers from './screens/Offers';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from "./components/ContextReducer.js";
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
            <Route exact path="/myProfile" element={<MyProfile />} />
            <Route exact path="/offers" element={<Offers />} />
            {/* <Route exact path="/payment" element={<Payment />} /> */}
          </Routes>
        </div>
      </Router>
    </CartProvider>

  );
}

export default App;
