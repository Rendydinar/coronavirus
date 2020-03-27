import React from 'react'
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider'
import VideoHiburanMp4 from '../static/525f7a5e0d9a4aa7aef6928d4f27c5a0.mp4'
import Container from '@material-ui/core/Container';

export default function VideoHiburan() {
	return (
		<React.Fragment>
			<MuiThemeProvider>
				<Container maxWidth="md">
					<center>
						<br/>
						<br/>
						<h2>Berikut Video Hiburan Agar Kita Sedikit Tersenyum Dengan Keadaan Ini 😊</h2> 
						<hr style={{width: "30%", marginTop: "-1em"}} />
						<br/> 
						<video style={{width: '100%', heigth: '100%'}} controls>
						  <source src={VideoHiburanMp4} type="video/mp4" /> 
						  Your browser does not support the video tag.
						</video>
					</center>
				</Container>
			</MuiThemeProvider>
		</React.Fragment>
	)
}

 