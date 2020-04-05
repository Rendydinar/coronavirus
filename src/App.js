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
import moment from 'moment-timezone'

import './App.css';

class App extends Component {
  state = {
  	date: moment().tz('Asia/Makassar').format('LLLL')
  }
  render() {

    return (
      <div className="App">
	        <Header />
	        <KasusTotal />
	        <Sumber ket={{sumber: 'Kementerian Kesehatan dan JHU', waktu: `${this.state.date} WITA`}}/>
	        <DataSumbaTimur />
	        <Sumber ket={{sumber: 'Posko Covid Sumba Timur', waktu: 'Minggu, 5 April 2020 17:00 PM WITA'}}/>
	        <TentangDataSumbaTimur />
 	        <Provinsi />
	        <Sumber ket={{sumber: 'Kementerian Kesehatan dan JHU', waktu: `${this.state.date} WITA`}}/>
	        <TentangCorona />
	        <RedZoneArea />
	        <VideoHiburan />
	        <Footer />
      </div>
    );
  }
}

export default App;
