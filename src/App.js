import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import KasusTotal from './components/KasusTotal'
import Provinsi from './components/Provinsi'
import Sumber from './components/Sumber'
import TentangCorona from './components/TentangCorona'
import RedZoneArea from './components/RedZoneArea'
import VideoHiburan from './components/VideoHiburan'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	        <Header />
	        <KasusTotal />
	        <Sumber />
	        <Provinsi />
	        <TentangCorona />
	        <RedZoneArea />
	        <VideoHiburan />
	        <Footer />
      </div>
    );
  }
}

export default App;
