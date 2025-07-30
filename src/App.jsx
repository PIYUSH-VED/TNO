import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState,useEffect } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Reserve from './components/Reserve';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState(localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : [])
  useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(cartItem));
  }, [cartItem]);
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cartItem={cartItem} setCartItem={setCartItem} />} />
        <Route path="/menu" element={<Menu cartItem={cartItem} setCartItem={setCartItem} />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </>
  )
}

export default App
