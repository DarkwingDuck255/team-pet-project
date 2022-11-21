// import logo from './logo.svg';
import React from 'react';
import Main from '../Main/Main';
import './App.css';
import { useEffect } from 'react';
import { useNavigate, Route, Routes, useLocation } from "react-router-dom";

import Header from '../Header/Header';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import PersonalCardPage from '../PersonalCardPage/PersonalCardPage';
import NotFound404 from '../NotFound404/NotFound404';

function App() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className='App'>
       <Routes>
          <Route  path='/' element = {
            <Main />
          } />
          <Route path='/about' element = {
            <AboutUsPage/>
          } />
          <Route path="/about/:id" element = {
            <PersonalCardPage />
          } />
          <Route path="*" element = {
            <NotFound404 />
          } />
       </Routes>
    </div>
  )
}

export default App;
