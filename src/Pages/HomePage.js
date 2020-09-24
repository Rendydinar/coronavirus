import React, { useEffect } from 'react';
import KasusTotal from '../components/KasusTotal'
import Provinsi from '../components/Provinsi'
import Sumber from '../components/Sumber'
import TentangCorona from '../components/TentangCorona'
import RedZoneArea from '../components/RedZoneArea'
import DataSumbaTimur from '../components/DataSumbaTimur'
import TentangDataSumbaTimur from '../components/TentangDataSumbaTimur'
import moment from 'moment-timezone'

export default function HomePage() {
  const date = moment().tz('Asia/Makassar').format('LLLL');

  useEffect((e) => {
    const elem = document.getElementById('startingLoader');

    window.onload = () => {
      if (elem) {
        elem.remove();
      }
    };
  }, []); 
  
  return (
    <div className="App">
      <KasusTotal />
      <Sumber ket={{sumber: 'Indonesia COVID 19 API', waktu: `${date} WITA`, link: 'https://indonesia-covid-19.mathdro.id/api'}}/>
      <DataSumbaTimur />
      <Sumber ket={{sumber: 'Posko Covid Sumba Timur', waktu: 'Sabtu, 12 September 2020 16:00 PM WITA', link: 'https://www.facebook.com/dinkes.timur'}}/>
      <TentangDataSumbaTimur />
      <Provinsi />
      <Sumber ket={{sumber: 'Indonesia COVID 19 API', waktu: `${date} WITA`, link: 'https://indonesia-covid-19.mathdro.id/api'}}/>
      <TentangCorona />
      <RedZoneArea />
      <br/>
      {/*<center>
        <h3>COVID-19 DATA MAP GLOBAL REAL-TIME</h3> 
        <hr style={{width: "30%", marginTop: "-1em"}} />
        <br/> 
      </center>
      <Map />
       <Sumber ket={{sumber: 'Novel COVID API', waktu: `${date} WITA`, link: 'https://corona.lmao.ninja/v2/jhucsse'}}/> */}
      <br/>
    </div>

  )
}
