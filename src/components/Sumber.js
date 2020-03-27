import React from 'react'
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider'

export default function Sumber() {
	return (
		<React.Fragment>
			<MuiThemeProvider>
				<br/>
				<center>
					<small><b>Sumber data</b> Kementerian Kesehatan dan JHU</small> <br/>
					<small><b>Update Terkahir</b> {new Date().getTime()}</small>
				</center>
			</MuiThemeProvider>
			
		</React.Fragment>
	)
}