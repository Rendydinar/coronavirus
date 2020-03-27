import React from 'react'

export default function Sumber() {
	return (
		<React.Fragment>
				<br/>
				<center>
					<small><b>Sumber data</b> Kementerian Kesehatan dan JHU</small> <br/>
					<small><b>Update Terkahir</b> {new Date().getTime()}</small>
				</center>
		</React.Fragment>
	)
}