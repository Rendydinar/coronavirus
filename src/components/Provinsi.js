import React, {useState, useEffect} from 'react'
import SingleProvinsi from './SingleProvinsi'
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider'
import Container from '@material-ui/core/Container';
import Paper from 'material-ui/Paper';
import axios from 'axios'

export default function Provinsi() {
	const [dataProvinsi, setDataProvinsi] = useState([])

	useEffect(() => {
 		axios.get('https://api.kawalcorona.com/indonesia/provinsi/')
 		  .then(function (response) {
 		    // handle success
 		    setDataProvinsi(response.data)
 		  })
 		  .catch(function (error) {
 		    // handle error
		    console.log(error);
		  })
	}, [])
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
						<Paper>	
							{
								dataProvinsi.map(provinsi => {
									return (
										<SingleProvinsi provinsi={provinsi} key={provinsi.attributes.Kode_Provi}/>
									)
								})
							}
	  					</Paper>				     
					</Container>
				</MuiThemeProvider>
		</ React.Fragment>
	)
}