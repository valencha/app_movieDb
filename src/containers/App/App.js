import React from 'react';
import Home from '../Home/Home';
import {CssBaseline } from '@material-ui/core';
import Search from '../../components/Search/Search';

import { BrowserRouter as Router, Route } from 'react-router-dom';



function App() {



  return (

    <Router> 
    <div className="App">
      <h1>Welcome</h1>
      <Search/> 
      <Route path="/" exact component ={Home}/>
      <Route path="/movie" exact component ={Home}/>
      <CssBaseline />
      </div>
      </Router>
      );
    
}

export default App;
