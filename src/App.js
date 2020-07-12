import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Footer from './components/Footer'
import Header from './components/Header'
import DarkModeToggle from './DarkModeToggle';
import './App.css';
	
const history = createBrowserHistory();

const  App = () => {
  return(
    <Router history={history}>
      <main>
        <DarkModeToggle />
        <Header />
      </main>
      <Footer />
    </Router>
  );
} 

export default App;
