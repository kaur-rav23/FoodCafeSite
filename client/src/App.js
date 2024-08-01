import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Homes from './screens/Home/Homes';
import Login from './screens/Login/Login';
import Signup from './screens/SignUp/SignUp';
import MyOrder from './screens/Orders/MyOrder';
import MyProfile from './screens/Profile/MyProfile';
import Menu from './screens/Menu/Menu';
import Offers from './screens/Offers/Offers';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from "./components/ContextReducer/ContextReducer.js";
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Homes />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
            <Route exact path="/myProfile" element={<MyProfile />} />
            <Route exact path="/offers" element={<Offers />} />
            <Route exact path="/menu" element={<Menu />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
export default App;
