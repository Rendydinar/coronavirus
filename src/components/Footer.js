import React from 'react'
import Container from '@material-ui/core/Container';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Footer() {
	return (
		<React.Fragment>
			<Container>
				<footer style={{margin: '1em', marginTop: '100px'}}>
					<center>
						&copy; {new Date().getFullYear()} <small>by <span style={{color: 'red', marginTop: '50px'}}><FavoriteIcon fontSize="small"/></span> UNKRISWINA SUMBA INFORMERS</small>
					</center>
				</footer>
			</Container>
		</React.Fragment>
	)
}