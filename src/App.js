import React, { useState, useEffect } from 'react';
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
import DarkModeToggle from './DarkModeToggle';

import './App.css';
	
const  App = () => {
  const [date, setDate] = useState(moment().tz('Asia/Makassar').format('LLLL'));
  let bodymode = document.body.className;
  const [bodyMode, setBodyMode] = useState('light');

  useEffect((e) => {
  	// alert(bodyMode);
  }, [bodyMode])
  
  return(
	  <div className="App">

	        <Header />
	        <DarkModeToggle />
	        <KasusTotal />
	        <Sumber ket={{sumber: 'Indonesia COVID 19 API', waktu: `${date} WITA`, link: 'https://indonesia-covid-19.mathdro.id/api'}}/>
	        <DataSumbaTimur />
	        <Sumber ket={{sumber: 'Posko Covid Sumba Timur', waktu: 'Jumat, 5 Juni 2020 18:00 PM WITA', link: 'https://www.facebook.com/dinkes.timur'}}/>
	        <TentangDataSumbaTimur />
		    <Provinsi />
	        <Sumber ket={{sumber: 'Indonesia COVID 19 API', waktu: `${date} WITA`, link: 'https://indonesia-covid-19.mathdro.id/api'}}/>
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
	        <Sumber ket={{sumber: 'Novel COVID API', waktu: `${date} WITA`, link: 'https://corona.lmao.ninja/v2/jhucsse'}}/>
	        <br/>
	        <Footer />
	  </div>
  );
} 

export default App;
