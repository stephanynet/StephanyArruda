import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Footer from './Footer';

export default function RouteManager() {

    return (
        <BrowserRouter>
        <Routes>
        <Route>
        <HomePage />    
        <LoginPage />
        <RegisterPage />
        <Footer />
        </Route>
        </Routes>
        </BrowserRouter>

    );
  };

