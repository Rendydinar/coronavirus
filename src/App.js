import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import KasusTotal from './components/KasusTotal'
import Provinsi from './components/Provinsi'
import Sumber from './components/Sumber'
import TentangCorona from './components/TentangCorona'
import RedZoneArea from './components/RedZoneArea'
import VideoHiburan from './components/VideoHiburan'
import DataSumbaTimur from './components/DataSumbaTimur'
import TentangDataSumbaTimur from './components/TentangDataSumbaTimur'

import './App.css';

class App extends Component {
 
  render() {

    return (
      <div className="App">
	        <Header />
	        <KasusTotal />
	        <Sumber ket={{sumber: 'Kementerian Kesehatan dan JHU', waktu: ''}}/>
	        <DataSumbaTimur />
	        <Sumber ket={{sumber: 'Posko Covid Sumba Timur', waktu: 'Jumat, 27 Maret 2020 17:00pm wita'}}/>
	        <TentangDataSumbaTimur />
 	        <Provinsi />
	        <Sumber ket={{sumber: 'Kementerian Kesehatan dan JHU', waktu: ''}}/>
	        <TentangCorona />
	        <RedZoneArea />
	        <VideoHiburan />
	        <Footer />
      </div>
    );
  }
}

export default App;
