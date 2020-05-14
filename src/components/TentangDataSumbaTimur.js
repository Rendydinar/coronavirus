import React, {useState} from 'react'
import PropTypes from 'prop-types';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from 'material-ui/Paper';
import Container from '@material-ui/core/Container';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <small
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </small>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TentangCorona() {

	const [value, setValue] = useState(0);

  	const handleChange = (event, newValue) => {
    	setValue(newValue);
  	};
	return (
		<React.Fragment>
				<br/>
				<br/>
				<center>
					<h2>Tentang Data Sumba Timur</h2> 
					<hr style={{width: "30%", marginTop: "-1em"}} />
				</center>
				<br/> 
				<MuiThemeProvider>

				<Container maxWidth="md">
					<Paper className="paperCustom">
						<Tabs
					        value={value}
					        onChange={handleChange}
					        variant="scrollable"
					        scrollButtons="on"
					        indicatorColor="primary"
					        textColor="primary"
					        aria-label="scrollable force tabs example"
					    >
						    <Tab label="PELAKU PERJALANAN" {...a11yProps(0)} />
						    <Tab label="ODP (ORANG DALAM PANTAUAN)" {...a11yProps(1)} />
						    <Tab label="PDP (PASIEN DALAM PENGAWASAN)" {...a11yProps(2)} />
						    <Tab label="POSITIF" {...a11yProps(3)} />
						</Tabs>	
						<TabPanel value={value} index={0}>
							<center><h1>🛬</h1></center>
							<p>PELAKU PERJALANAN adalah seseorang yang memiliki riwayat perjalanan atau tinggal di luar negeri/daerah terjangkit COVID-19 yang tidak bergejala akan tetapi wajib melakukan Monitoring Mandiri terhadap kemungkinan munculnya gejala selama 14 hari sejak kepulangan.</p>
				      	</TabPanel>
				      	<TabPanel value={value} index={1}>
							<center><h1>🕵</h1></center>
				        	<p>ODP (Orang Dalam Pantauan) adalah seseorang yang mengalami demam (lebih dari 38 derajat celcius) atau Riwayat Demam;atau gejala gangguan sistem pernapasan seperti pilek/sakit tenggorokan/batuk dan pada 14 hari terakhir sebelum timbul gejala memiliki riwayat perjalanan atau tinggal di luar negeri/daerah terjangkit COVID-19. </p>
				      	</TabPanel>
				      	<TabPanel value={value} index={2}>
							<center><h1>👀</h1></center>
				        	<p>PDP (Pasien Dalam Pengawasan) adalah seseorang yang mengalami demam (lebih dari 38 derajat celcius) atau Riwayat Demam;atau gejala gangguna pernapasan seperti pilek/sakit tenggorokan/batuk, sesak napas, sakit tenggorokan, pneumoniaringan hingga berat serta pada 14 hari terakhir sebelum timbul gejala memiliki riwayat perjalanan atau tinggal di luar negeri/daerah terjangkit COVID-19 ataupun memiliki riwayat kontak dengan kasus konfirmasi (positif COVID-19).</p>
				      	</TabPanel>							
				      	<TabPanel value={value} index={3}>
							<center><h1>😐</h1></center>
				      		<p>KASUS POSITIF adalah seseorang yang telah terbukti terinfeksi Virus Corona melalui proses pengujian LABORATORIUM dengan hasil pemeriksaan LABORATORIUM POSITIF</p>
				      	</TabPanel>							
					</Paper>
					<center>
						<br/>
						<small>
							<b>Sumber: Posko Covid Sumba Timur</b> 
						</small>
					</center>

				</Container>
			</MuiThemeProvider>
			
		</React.Fragment>
	)
}
 