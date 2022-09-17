// import logo from './logo.svg';
import React from 'react';
import Main from '../Main/Main';
import './App.css';
import { useNavigate, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={
          <Main />
        } />

      </Routes>


    </div>
  )
}

export default App;
