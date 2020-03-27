import React, {useState} from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider'
import Container from '@material-ui/core/Container';
import Paper from 'material-ui/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import SandlewoodImg from '../static/Taman_Sandalwood_3_1402.jpg'
import WalakiriImg from '../static/tempat-wisata-pantai-walakiri-sumba.jpg'
import TamanKotaImg from '../static/patung-lumba-lumba.jpg'
import PatungKudaImg from '../static/kota-waingapu-sumba-timur.jpg'
import PurukamberaImg from '../static/IMG_0339.JPG'
import LondaLimaImg from '../static/IG-@toyibkj-1024x1024.jpg'
import BukitPersadaraanImg from '../static/39687833_2173086146349468_2913303405235535872_n.jpg'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}


export default function RedZoneArea() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
	    setValue(newValue);
	};
	return (
		<React.Fragment>
			<MuiThemeProvider>
				<Container maxWidth="md">
					<br/>
					<br/>
					<center>
						<h2>Tempat Yang Harus Diwaspadai Di Kota Waingapu</h2> 
						<hr style={{width: "30%", marginTop: "-1em"}} />
					</center>
					<br/> 
					<Paper>
				        <Tabs
				          value={value}
				          onChange={handleChange}
				          indicatorColor="secondary"
				          textColor="secondary"
				          variant="scrollable"
				          scrollButtons="auto"
				          aria-label="scrollable auto tabs example"
				        >
					        <Tab label="Taman Sandlewood" {...a11yProps(0)} />
					        <Tab label="Taman Kota" {...a11yProps(1)} />
					        <Tab label="Pantai Walakiri" {...a11yProps(2)} />
					        <Tab label="Pantai Puru Kambera" {...a11yProps(3)} />
					        <Tab label="Patung Kuda" {...a11yProps(4)} />
					        <Tab label="Bukit Persaudaraan" {...a11yProps(5)} />
					        <Tab label="Londa Lima" {...a11yProps(6)} />
					    </Tabs>
					    <TabPanel value={value} index={0}>
					        <img alt="Img" src={SandlewoodImg} style={{width: '100%',height: '100%' }} />
					        <p>Taman Sandlewood Waingapu yang beralamatkan di Kamalaputi, Kota Waingapu, Kabupaten Sumba Timur harus menjadi tempat yang patut untuk diwaspadai, karena disini adalah tempat hiburan atau dijadikan tempat duduk-duduk santai warga kota waingapu.
							   Tempat ini hampir setiap hari selalu ramai pengunjungnya mulai dari orang dewasa hingga anak-anak.
					        </p>
					    </TabPanel>
					    <TabPanel value={value} index={1}>
					        <img alt="Img" src={TamanKotaImg} style={{width: '100%',height: '100%' }} />
					        <p>Taman Kota Waingapu berada tepat pada jantung Kota Waingapu, tempat ini patut diwaspadai, karena disini adalah tempat hiburan atau menjadi ruang duduk-duduk santai warga kota waingapu.
							   Tempat ini hampir setiap hari selalu dipadati oleh warga waingapu dan juga orang-orang yang berjualan.
							</p>
					    </TabPanel>
					    <TabPanel value={value} index={2}>
					        <img alt="Img" src={WalakiriImg} style={{width: '100%',height: '100%' }} />
					        <p> Tidak ada pantai terbaik untuk melihat terbenamnya matahari sore di Kota Waingapu selain Pantai Walakiri. Pantai yang berada di Watumbaka, Pandawai ini selalu dipadati oleh pengunjung yang hendak mengambil foto sunset dengan unik dan indahnya pohon bakau.
					        	Tempat ini patut diwaspadai karena padatnya orang yang berdatangan.   
							</p>
					    </TabPanel>
					    <TabPanel value={value} index={3}>
					        <img alt="Img" src={PurukamberaImg} style={{width: '100%',height: '100%' }} />
					        <p>
								Pantai Puru Kambera adalah salah satu pantai yang menawarkan keindahan panorama alam dan tentunya akan memberikan kenangan yang tak terlupakan bagi anda. Pantai ini terletak di Desa Mondu, Kecamatan Haharu, Kabupaten Sumba Timur, Provinsi Nusa Tenggara Timur. Lokasinya berjarak sekitar 25 kilometer dari pusat kota Waingapu, ibukota Kabupaten Sumba Timur.
					        </p>
					    </TabPanel>
					    <TabPanel value={value} index={4}>
					        <img alt="Img" src={PatungKudaImg} style={{width: '100%',height: '100%' }} />
					        <p>
						        Patung Kuda, beralamatkan di Jl. Adam Malik Km. 8| Pintu gerbang masuk kota Waingapu dari arah barat, Waingapu menjadi spot yang menarik, disini orang-orang dapat melihat kota waingapu dari ketinggian yang beratusan meter. Tempat ini biasanya dipadati oleh anak-anak remaja pada sore hari dan malam hari.
					        </p>
					    </TabPanel>
					    <TabPanel value={value} index={5}>
					        <img alt="Img" src={BukitPersadaraanImg} style={{width: '100%',height: '100%' }} />
					        <p>
								Bukit Persaudaraan Mau Hau, menyajikan bentangan panorama perbukitan dan persawahan penduduk yang menghampar luas dan indah. Dari puncak bukit, pengunjung juga dapat melihat panorama Kota Waingapu dan sekitarnya ditemani oleh eloknya Sungai Kambaniru dilihat dari ketinggian. Hamparan padang rumput hijau dan asri yang mewarnai kondisi alam Sumba Timur menandakan wilayah ini sebagai daerah peternakan yang potensial.
					        </p>
					    </TabPanel>
					    <TabPanel value={value} index={6}>
					        <img alt="Img" src={LondaLimaImg} style={{width: '100%',height: '100%' }} />
					        <p>
								Keindahan air laut di Pantai Londa Lima cukup menarik para pengunjung yang berdatangan, alasannya karena pantainya landai dan menukik tajam menjadi laut dalam diantara Sumba dan Flores. Selain itu, pohon unik yang ada di sekitaran Pantai Londa Lima, pohonnya tidak berdaun tetapi hanya tumbuh berbunga merah menyala. Sungguh menarik perhatian bukan. Ada hal lain yang perlu kalian ketahui, Pantai Londa Lima merupakan tempat pelaksanaan Hamayang atau Upacara Adat Marapu.
					        </p>
					    </TabPanel>
					</Paper>
				</Container>

			</MuiThemeProvider>
		</React.Fragment>
	)
}

