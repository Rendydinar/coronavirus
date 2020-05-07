import React from 'react'
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider'
import Link from '@material-ui/core/Link';

export default function Sumber(props) {
 	return (
		<React.Fragment>
				<br/>
				<center>
					<p style={{fontSize: '0.8rem'}}><b>Sumber: </b>
						<MuiThemeProvider>
							<Link href={props.ket.link} target="_blank" rel="noopener">
						        {props.ket.sumber}
						    </Link>
						</MuiThemeProvider>
					</p>
					<p style={{fontSize: '0.8rem'}}><b>Update Terkahir</b> {props.ket.waktu}</p>
				</center>
		</React.Fragment>
	)
}