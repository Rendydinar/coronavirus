import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import DarkModeToggle from './DarkModeToggle';
import HomePage from './Pages/HomePage';
import TentangPage from './Pages/TentangPage';

import './App.css';
	
const  App = () => {
  return(
    <Router>
      <main>
        <DarkModeToggle />
        <Header />
        <Route path="/" exact={true} component={HomePage} /> 
        <Route path="/tentang" component={TentangPage} />
      </main>
      <Footer />
    </Router>
  );
} 

export default App;
