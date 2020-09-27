import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const infoTotal = [
	{
		ket: 'TOTAL PELAKU PERJALANAN' , emoji: '🛬', data: {
			total: '15.554'
		}
	},
	{
		ket: 'TOTAL ORANG DALAM PANTAUAN (ODP)', emoji: '🕵', data: {
			total: '205'
		} 	
	}, 
	{
		ket: 'TOTAL PASIEN DALAM PENGAWASAN (PDP)', emoji: '👀', data: {
			total: '5'
		}
	},
	{
		ket: 'TOTAL KASUS POSITIF', emoji: '😐', data: {
			total: '21'
		}
	},
]

const styleGridPaper = {
	padding: '1em',
}

export default function KasusTotal() {
	
	return (
		<React.Fragment>
			<Container maxWidth="md">
				<br/>
				<center>
					<h3>Data Total Kabupaten Sumba Timur</h3> 
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
		</React.Fragment>
	)
}

// https://www142.o0-1.com/token=niXdPKT-T1CXE3vrEY0bkQ/1596315063/180.249.0.0/86/f/c6/0e24403abed9f1524ddaab90a5730c6f-480p.mp4