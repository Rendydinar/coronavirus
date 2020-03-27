import React from 'react'
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Img from '../static/Patung_Kuda_Km_8_1_4874.jpg'
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider'

 
// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
//   large: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//   },
// }));

// const large = {
// 	margin: 5,
// 	width: 7,
// 	height: 7,	
// }

const style = {
	// margin: '50',
	// padding: '50'
}

export default function Header() {
	return (
	 	<React.Fragment>
	 		<MuiThemeProvider >
		 		<center>
					<AppBar title="Waingapu Corona" className={style}>
				      	<Avatar src={Img}/>
					</AppBar>
		 		</center>
	 		</ MuiThemeProvider>
  		</React.Fragment>
	)
}

