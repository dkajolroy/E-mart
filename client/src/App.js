import { Route, Routes } from "react-router";
import Home from './Pages/Home';
import './App.css'
import Nav from "./Components/Nav";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ViewProduct from "./Pages/ViewProduct";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ViewProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
