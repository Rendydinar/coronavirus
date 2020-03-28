import React, {useState, useEffect} from 'react'
import moment from 'moment-timezone'

export default function Sumber(props) {
	const [date, setDate] = useState('');
	useEffect(() => {
		setDate(moment().tz('Asia/Makassar').format('LLLL'))
	})


 
	return (
		<React.Fragment>
				<br/>
				<center>
					<small><b>Sumber data</b> {props.ket.sumber}</small> <br/>
					{
						props.ket.waktu === '' ? <small><b>Update Terkahir</b> {date} WITA</small>: <small><b>Update Terkahir</b> {props.ket.waktu}</small>
					}					 
				</center>
		</React.Fragment>
	)
}