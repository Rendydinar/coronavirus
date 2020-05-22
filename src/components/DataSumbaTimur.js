import React from 'react'
import Paper from 'material-ui/Paper';
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider'
import Container from '@material-ui/core/Container';

const infoTotal = [
	{
		ket: 'PELAKU PERJALANAN' , emoji: '🛬', data: {
			total: '4.286'
		}
	},
	{
		ket: 'ORANG DALAM PANTAUAN (ODP)', emoji: '🕵', data: {
			total: '172'
		} 
	}, 
	{
		ket: 'PASIEN DALAM PENGAWASAN (PDP)', emoji: '👀', data: {
			total: '4'
		}
	},
	{
		ket: 'KASUS POSITIF', emoji: '😐', data: {
			total: '7'
		}
	},
]

const styleGridPaper = {
	padding: '1em',
}

export default function KasusTotal() {
	
	return (
		<React.Fragment>
			<MuiThemeProvider>
				<Container maxWidth="md">
				<br/>
				<center>
					<h2>Data Total Kabupaten Sumba Timur</h2> 
					<hr style={{width: "30%", marginTop: "-1em"}} />
				</center>
				<br/> 
 				<Grid container justify="center" spacing={0}>
					<Grid item xs={"auto"}>
			        	<Grid container justify="center">
		            		<Grid key={0} item style={{marginRight: '7px', marginTop: '7px'}}>
		              			<Paper className="paperCustom">
		              				<div style={styleGridPaper}>
		              					<center>
			              					<h1>{infoTotal[0].emoji}</h1>
											<p style={{color: '#0277bd'}}>{infoTotal[0].ket}</p>
				              				<p><b>{infoTotal[0].data.total}</b> ORANG</p>
				              			</center>
		              				</div>
		              			</Paper>
		            		</Grid>

		            		<Grid key={1} item style={{marginRight: '7px', marginTop: '7px'}}>
		              			<Paper className="paperCustom">
		              				<div style={styleGridPaper}>
		              					<center>
			              					<h1>{infoTotal[1].emoji}</h1>
											<p style={{color: '#ec407a'}}>{infoTotal[1].ket}</p>
				              				<p><b>{infoTotal[1].data.total}</b> ORANG</p>
				              			</center>
		              				</div>
		              			</Paper>
		            		</Grid>

		            		<Grid key={2} item style={{marginRight: '7px', marginTop: '7px'}}>
		              			<Paper className="paperCustom">
		              				<div style={styleGridPaper}>
		              					<center>
			              					<h1>{infoTotal[2].emoji}</h1>
											<p style={{color: '#0097a7'}}>{infoTotal[2].ket}</p>
				              				<p><b>{infoTotal[2].data.total}</b> ORANG</p>
				              			</center>
		              				</div>
		              			</Paper>
		            		</Grid>

		            		<Grid key={3} item style={{marginRight: '7px', marginTop: '7px'}}>
		              			<Paper className="paperCustom">
		              				<div style={styleGridPaper}>
		              					<center>
			              					<h1>{infoTotal[3].emoji}</h1>
											<p style={{color: 'orange'}}>{infoTotal[3].ket}</p>
				              				<p><b>{infoTotal[3].data.total}</b> ORANG</p>
				              			</center>
		              				</div>
		              			</Paper>
		            		</Grid>

				        </Grid>
				    </Grid>
				</Grid>


				</Container>
			</MuiThemeProvider>
		</React.Fragment>
	)
}


  // 🛬 🧐 🕵

  // 👨‍⚕️