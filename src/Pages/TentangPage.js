import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';


export default function TentangPage() {
	useEffect(() => {
    const elem = document.getElementById('startingLoader');

    window.onload = () => {
      if (elem) {
        elem.remove();
      }
    };
	}, []);

	return (
		<React.Fragment>
			<Container maxWidth="md">
				<center>
			      	<Typography variant="h3">Tentang</Typography>
			      	<Typography variant="h6">Waingapu Kawal Corona</Typography>
			      	<br/>		      	
				</center>
		      	<Typography align="left">
		      		Waingapu kawal corona adalah sebuah situs yang menampilkan data terkait pandemi virus Corona di Indonesia dan pulau Sumba Timur. Sumber data corana untuk Indonesia dari John Hopkins University (JHU) yang ditampilkan secara Real-Time melalui API dari yang disediakan oleh <Link href="https://indonesia-covid-19.mathdro.id/api/provinsi" target="_blank" rel="noopener">covid19.mathdro.id</Link> . Untuk data Corona di Pulau Sumba Timur diperoleh dari <Link href="https://www.facebook.com/dinkes.timur" target="_blank" rel="noopener">Posko Covid Sumba Timur</Link>. Situs ini dibuat oleh INFORMERS UNRKSIWINA SUMBA.
		      	</Typography>  
			</Container>
		</React.Fragment>
	)
}

