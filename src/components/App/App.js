// import logo from './logo.svg';
import React from 'react';
import Main from '../Main/Main';
import './App.css';
import { useNavigate, Route, Routes, Switch } from "react-router-dom";
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import PersonalCardPage from '../PersonalCardPage/PersonalCardPage';
import NotFound404 from '../NotFound404/NotFound404';

function App() {

  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact={true}>
          <Main />
        </Route>
        <Route path='/about' exact={true}>
          <AboutUsPage />
        </Route>
        <Route path="/about/:id">
          <PersonalCardPage />
        </Route>
        <Route path="/cases">
          <NotFound404 />
        </Route>
        <Route>
          <NotFound404 />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
