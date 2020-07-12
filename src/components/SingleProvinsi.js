import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function SingleProvinsi(props) {
	return (
		<React.Fragment>
	  	<ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        	<Typography>{props.provinsi.provinsi}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
				  <List component="nav" aria-label="main mailbox folders">
			        <ListItem button>
			        	<small><h2 style={{display: 'inline'}}>😢</h2> <span style={{color: 'red'}}>MENINGGAL</span> : <b>{props.provinsi.kasusMeni}</b> ORANG</small> 
			        </ListItem>
			        <ListItem button>
			        	<small><h2 style={{display: 'inline'}}>😐</h2> <span style={{color: 'orange'}}>POSITIF</span> : <b>{props.provinsi.kasusPosi}</b> ORANG</small> 
			        </ListItem>
			        <ListItem button>
			        	<small><h2 style={{display: 'inline'}}>😀</h2> <span style={{color: 'green'}}>SEMBUH</span> : <b>{props.provinsi.kasusSemb}</b> ORANG</small> 
			        </ListItem>
			      </List>
			    </ExpansionPanelDetails>
      	</ExpansionPanel>
		</React.Fragment>
	)
} 
 