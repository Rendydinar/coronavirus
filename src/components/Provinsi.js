import React, {useState, useEffect} from 'react'
import SingleProvinsi from './SingleProvinsi'
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider'
import Container from '@material-ui/core/Container';
import Paper from 'material-ui/Paper';
import axios from 'axios'
import NoInternetImg from '../static/no-internet-connection-icon.png'

// import Cookies from 'js-cookie';

// let cookie = [];
export default function Provinsi() {
	const [dataProvinsi, setDataProvinsi] = useState({data: []})

	useEffect(() => {
		if(window.navigator.onLine) {
			// online mode
	 		axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi')
	 		  .then(function (response) {
	 		    // handle success
	 		    setDataProvinsi(response.data);
	 		    // cookie=response.data;
	 		  })
	 		  .catch(function (error) {
	 		    // handle error
			    console.log(error);
			  })
		} else {
			// offline mode
			setDataProvinsi([]);
		}
	}, []);
	
	return (
		<React.Fragment>
				<br/>
				<br/>
				<center>
					<h2>Data Per-Provinsi</h2> 
					<hr style={{width: "30%", marginTop: "-1em"}} />
				</center>
				<br/> 
				<MuiThemeProvider>
					<Container maxWidth="md">
						<Paper className="paperCustom">	
							{ 
								window.navigator.onLine ? ( dataProvinsi.data.map(provinsi => { return ( <SingleProvinsi provinsi={provinsi} key={provinsi.kodeProvi}/> ) }) ) : (
								    <div className="container-offline">
								      <p className="text-offline">Sepertinya Kamu Sedang Tidak Terkoneksi Dengan Internet...</p>
								      <img className="img-offline" width="150" height="150" src={NoInternetImg} alt="" />   
								      <a className="a-offline" href="/">Coba Lagi</a> 
								    </div>
								)
							}
	  					</Paper>				     
					</Container>
				</MuiThemeProvider>
		</ React.Fragment>
	)
}