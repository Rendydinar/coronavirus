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
import Map from './components/Map'
import moment from 'moment-timezone'

// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; // import kebutuhan untuk membuat SPA 
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
		        <Sumber ket={{sumber: 'Posko Covid Sumba Timur', waktu: 'Sabtu, 2 Mei 2020 17:00 PM WITA'}}/>
		        <TentangDataSumbaTimur />
	 	        <Provinsi />
		        <Sumber ket={{sumber: 'Kementerian Kesehatan dan JHU', waktu: `${this.state.date} WITA`}}/>
		        <TentangCorona />
		        <RedZoneArea />
		        <VideoHiburan />
		        <br/>
				<center>
					<h2>COVID-19 DATA MAP GLOBAL REAL-TIME</h2> 
					<hr style={{width: "30%", marginTop: "-1em"}} />
					<br/> 
				</center>
		        <Map />
		        <br/>
		        <Footer />
	      </div>
    );
  }
}

export default App;
