import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import RegistrationPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import OurProductsPage from "./pages/OurProductsPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ProfilePage from "./pages/ProfilePage";
import PreviousOrders from "./pages/PreviousOrders";
import { useEffect } from "react";
import ProtectedRoutes from "./ProtectedRoutes";
import ValidateUser from "./pages/ValidateUser";

function App() {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products/" element={<OurProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/validateUser/:hash" element={<ValidateUser />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/mycart" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/myprofile" element={<ProfilePage />} />
          <Route path="/myorders" element={<PreviousOrders />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
