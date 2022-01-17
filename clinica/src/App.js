import React from 'react'

import './App.css';

import {Routes, Route} from 'react-router-dom'

import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'

export default function App() {
  return (
    <>
      <main>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/homepage' element={<HomePage/>} />
          <Route path='/loginpage' element={<LoginPage/>} />
          <Route path='/registerpage' element={<RegisterPage/>} />
        </Routes>
      </main>
    </>
  );
};

