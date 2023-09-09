import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <Router>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776; </button>
            <Link to="/">Dakshina</Link>
      
          </div>
          <div className="header-links">
            <a href="Home.html">Home</a>
            <a href="Products.html">Products</a>
            <a href ="New Products">New Products</a>
            <a href="cart.html">Cart</a>
            <a href="Signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Khasi</a>
            </li>
            <li>
              <a href="index.html">Clothes</a>
            </li>
          </ul>
        </aside>
        <main className="main">
        <h2>Featured Products</h2>
        {/* <Link to = "/">Homescreen-</Link>
        <Link to = "/products/:_id">Productscreen</Link> */}
        <Routes>
        <Route path="/products/:_id" element={<ProductScreen/>}></Route>
        <Route path="/" exact={true} element={<HomeScreen/>}></Route>      
        </Routes>
          <div className="content">
         
          </div>
        </main>
        <footer className="footer"> &copy; 2023 Dakshina All rights reserved.</footer>
      </div>
      
    </Router>
  );
}

export default App;
