import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';

import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/signup/Login';
import Home from './landing_page/home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={< HomePage/>}/>
    <Route path="/home" element={<Home />} /> 
    <Route path='/signup' element={< Signup/>}/>
    <Route path='/login' element={< Login/>}/>
    <Route path='/about' element={< AboutPage/>}/>
    <Route path='/product' element={< ProductPage/>}/>
    <Route path='/pricing' element={< PricingPage/>}/>
    <Route path='/support' element={< SupportPage/>}/>
    <Route path='*' element={< NotFound/>}/>
  </Routes>
  <Footer />
  </BrowserRouter>
);