import React from 'react'

export default function Sumber(props) {
 
	return (
		<React.Fragment>
				<br/>
				<center>
					<small><b>Sumber data</b> {props.ket.sumber}</small> <br/>
					<small><b>Update Terkahir</b> {props.ket.waktu}</small>				 
				</center>
		</React.Fragment>
	)
}