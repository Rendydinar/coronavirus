import React, {useState} from 'react'
import PropTypes from 'prop-types';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from 'material-ui/Paper';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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
					<h2>Tentang Corona</h2> 
					<hr style={{width: "30%", marginTop: "-1em"}} />
				</center>
				<br/> 
				<MuiThemeProvider>

				<Container maxWidth="md">
					<Paper>
						<Tabs
					        value={value}
					        onChange={handleChange}
					        variant="scrollable"
					        scrollButtons="on"
					        indicatorColor="primary"
					        textColor="primary"
					        aria-label="scrollable force tabs example"
					    >
						    <Tab label="Corona ?" {...a11yProps(0)} />
						    <Tab label="Penularan" {...a11yProps(1)} />
						    <Tab label="Gejala" {...a11yProps(2)} />
						    <Tab label="Pencegahan" {...a11yProps(3)} />
						</Tabs>	
						<TabPanel value={value} index={0}>
							<p>Virus Corona atau severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) adalah virus yang menyerang sistem pernapasan.<br/>Penyakit karena infeksi virus ini disebut COVID-19. Virus Corona bisa menyebabkan gangguan pada sistem pernapasan, pneumonia akut, sampai kematian.<br/> {} Virus ini bisa menyerang siapa saja, baik bayi, anak-anak, orang dewasa, lansia, ibu hamil, maupun ibu menyusui.<br/>Pertama kali ditemukan di kota Wuhan, Cina, pada akhir Desember 2019.<br/>Virus ini menular dengan cepat dan telah menyebar ke wilayah lain di Cina dan ke beberapa negara, termasuk Indonesia.</p>
				      	</TabPanel>
				      	<TabPanel value={value} index={1}>
				        	<p>Virus COVID-19 menyebar terutama melalui tetesan air liur atau keluar dari hidung ketika orang yang terinfeksi batuk atau bersin, jadi penting bahwa kalian juga harus etika saat bersin (misalnya, dengan batuk/bersin pada siku yang tertekuk).</p>
				      	</TabPanel>
				      	<TabPanel value={value} index={2}>
				        	<div>
				        	<h3>Gejala Umum: </h3>
				        	<ul>
				        		<li>Demam.</li>
				        		<li>Kelelahan.</li>
				        		<li>Batuk kering.</li>				        		
				        	</ul>
				        	<h3>Gejala lain: </h3>
				        	<ul>
				        		<li>Sesak napas.</li>
				        		<li>Sakit dan nyeri.</li>
				        		<li>Sakit tenggorokan.</li>				        		
				        	</ul>
				        	</div>
				      	</TabPanel>							
				      	<TabPanel value={value} index={3}>
							<h3>Untuk mencegah infeksi dan memperlambat transmisi COVID-19, lakukan hal berikut: </h3>
				        	<ul>
				        		<li>Cuci tangan Anda secara teratur dengan sabun dan air, atau bersihkan dengan usapan berbasis alkohol.</li>
				        		<li>Pertahankan jarak minimal 1 meter antara Anda dan orang yang batuk atau bersin.</li>
				        		<li>Hindari menyentuh wajah Anda.</li>
				        		<li>Tutupi mulut dan hidung Anda saat batuk atau bersin.</li>
				        		<li>Tetap di rumah jika Anda merasa tidak sehat.</li>
				        		<li>Jangan merokok dan aktivitas lain yang melemahkan paru-paru.</li>
				        		<li>Berlatih menjaga jarak dengan menghindari perjalanan yang tidak perlu dan menjauh dari kelompok besar orang.</li>
				        	</ul>
				      	</TabPanel>							
					</Paper>
					<center>
						<br/>
						<small>
							<b>Sumber: </b> 
							<Link href="https://www.who.int/health-topics/coronavirus" target="_blank" rel="noopener">
						        World Health Organization (WHO)
						    </Link>
						</small>
					</center>

				</Container>
			</MuiThemeProvider>
			
		</React.Fragment>
	)
}

 // label={<span className={classes.tabLabel}>Label</span>}

