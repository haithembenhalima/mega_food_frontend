import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductPage from "./pages/User/product/ProductPage";
import ForgotPassword from "./pages/User/forgotPassword/ForgotPassword";
import VerifyPassword from "./pages/User/forgotPassword/verifyPassword";
import ResetPassword from "./pages/User/forgotPassword/ResetPassword";
import Wishlist from "./pages/User/wishlist/Wishlist";
import Cart from "./pages/User/card/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductPage />}  />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}



export default App;
