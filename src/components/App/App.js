// import logo from './logo.svg';
import React from 'react';
import Main from '../Main/Main';
import './App.css';

import { useNavigate, Route, Routes } from "react-router-dom";

import Header from '../Header/Header';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import PersonalCardPage from '../PersonalCardPage/PersonalCardPage';

function App() {

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
       </Routes>
    </div>
  )
}

export default App;
