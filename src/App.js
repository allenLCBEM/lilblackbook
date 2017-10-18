import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { Link } from 'react-router-dom';

const App = () => (
  <div >
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <div className="fixed-action-btn">
      <Link to="/contacts/add" className="btn-floating btn-large red"> 
        <i className="fa fa-heart"></i>
      </Link>
    </div>
  </div>
)

export default App;
