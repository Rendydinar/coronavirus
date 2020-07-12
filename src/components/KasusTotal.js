import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import Container from '@material-ui/core/Container';

const infoTotal = [
	{
		ket: 'MENINGGAL' , emoji: '☹️', data: {
			total: 2343
		}, attribute: {
			color: 'red'
		}
	},
	{
		ket: 'POSITIF', emoji: '😐', data: {
			total: 4353
		}, attribute: {
			color: 'orange'
		} 
	},
	{
		ket: 'SEMBUH', emoji: '😀', data: {
			total: 5423
		}, attribute: {
			color: 'green'
		}
	},
]

const styleGridPaper = {
	padding: '1em',
}

export default function KasusTotal() {
	const [dataTotal, setDataTotal] = useState({meninggal: 0, jumlahKasus: 0, sembuh: 0 });
	useEffect(() => {
		if(window.navigator.onLine) {
			// online mode
	 		axios.get('https://indonesia-covid-19.mathdro.id/api/')
	 		  .then(function (response) {
	 		    // handle success
	 		    setDataTotal(response.data);
	 		  })
	 		  .catch(function (error) {
	 		    // handle error
			    console.log(error);
			  })
		} else {
			// offline mode
			setDataTotal({meninggal: 0, jumlahKasus: 0, sembuh: 0 });
		}
	}, []);
	
	return (
		<React.Fragment>
			<Container maxWidth="md">

				<Paper className="paperCustom">	
					<center style={{padding: "0.5em"}}>
						<h2>Waingapu Kawal Corona</h2>
						<h5>Coronavirus Indonesia Dan Sumba Timur Live Data</h5>
					</center>
				</Paper>
				<br/>
				<center>
					<h3>Data Total Se-Indonesia</h3> 
					<hr style={{width: "30%", marginTop: "-1em"}} />
				</center>
				<br/> 
				<Grid container justify="center" spacing={0}>
					<Grid item xs={"auto"}>
						{ 
							window.navigator.onLine ? ( 
			        	<Grid container justify="center">
	            		<Grid key={0} item style={{marginRight: '7px', marginTop: '7px'}}>
              			<Paper className="paperCustom">
              				<div style={styleGridPaper}>
              					<center>
	              					<h1>{infoTotal[0].emoji}</h1>
													<p style={{color: 'red'}}>{infoTotal[0].ket}</p>
		              				<p><b>{dataTotal.meninggal}</b> ORANG</p>
		              			</center>
              				</div>
              			</Paper>
	            		</Grid>

	            		<Grid key={1} item style={{marginRight: '7px', marginTop: '7px'}}>
              			<Paper className="paperCustom">
              				<div style={styleGridPaper}>
              					<center>
	              					<h1>{infoTotal[1].emoji}</h1>
													<p style={{color: 'orange'}}>{infoTotal[1].ket}</p>
		              				<p><b>{dataTotal.jumlahKasus}</b> ORANG</p>
		              			</center>
              				</div>
              			</Paper>
	            		</Grid>

	            		<Grid key={2} item style={{marginRight: '7px', marginTop: '7px'}}>
              			<Paper className="paperCustom">
              				<div style={styleGridPaper}>
              					<center>
	              					<h1>{infoTotal[2].emoji}</h1>
													<p style={{color: 'green'}}>{infoTotal[2].ket}</p>
		              				<p><b>{dataTotal.sembuh}</b> ORANG</p>
		              			</center>
              				</div>
              			</Paper>
	            		</Grid>
				        </Grid>
							) : (
						    <div className="container-offline">
						      <p className="text-offline">Sepertinya Kamu Sedang Tidak Terkoneksi Dengan Internet...</p>
						      <a className="a-offline" href="/">Coba Lagi</a> 
						    </div>
							)
						}
			    	</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	)
}


  