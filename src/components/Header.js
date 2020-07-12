import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Img from '../static/Patung_Kuda_Km_8_1_4874.jpg'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { createBrowserHistory } from "history";
import HomePage from '../Pages/HomePage';
import TentangPage from '../Pages/TentangPage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

}));

const history = createBrowserHistory();

export default function Header() {
	const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
       <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {[{title: 'Home', link: '/'}, {title: 'Tentang', link: '/tentang'}].map((nav, index) => (
            <ListItem button key={nav.title} component={Link} to={nav.link}>
              <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <InfoIcon />}</ListItemIcon>
              <ListItemText primary={nav.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
  );


	return (
	 	<React.Fragment>
    <Router history={history}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" onClick={toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} color="inherit">
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Waingapu Kawal Corona</Link>
          </Typography>
          <Avatar src={Img}/>
        </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
      <Route path="/" exact={true} component={HomePage} /> 
      <Route path="/tentang" component={TentangPage} />
    </Router>
		</React.Fragment>
	)
}

