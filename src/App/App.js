import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Login from '../pages/login/login'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
