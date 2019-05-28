import React from 'react';
import { Link } from "gatsby"
import { withStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@mdi/react'
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import { mdiMenu } from '@mdi/js'
import { mdiEmoticonNeutralOutline } from '@mdi/js'

const styles = {
  root: {
    fontSize: 10,
    color: 'black',
  },
  highlight: {
    backgroundColor: 'Cornsilk',
  },
  head: {
    fontSize: 20,
    color: '#333',
    paddingTop: '1em',

  },
  list: {
    width: 320,
    fontSize: 16,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    color: '#000',
  },
  inline: {
    fontSize: 16,
  },
  icon: {
    padding: 0,
    margin: 0,
    lineHeight: 1,
    height: 24,
    fontSize: 10,
 },
 button: {
  fontSize: 14,
 },
 toggle: {
   marginRight: 12,
   marginTop: -8,
   opacity: '1',
   '&:hover': {
        color: 'white',
      opacity: '1',
        }
 }
};

class NavigationDrawer extends React.Component {

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {

    const { classes } = this.props;
    const mainList = (
    <>
      <div className={classes.list}>
        <List className={classes.root} >
          <ListItem button key={2}>
            <Link to="/help">
              <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
            </Link>
            <Link to="/help">
              <ListItemText className={classes.link} >Find help</ListItemText>
            </Link>
          </ListItem>
          <ListItem button key={2}>
            <Link to="/library">
              <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
            </Link>
            <Link to="/library">
              <ListItemText className={classes.link} primary="Resource library" />
            </Link>
          </ListItem>
        </List>
      </div>
    </>
    );

    const secondaryList = (
    <>
      <div className={classes.list}>
        <List className={classes.root} >
          <ListItem button  key={2}>
            <Link to="/safe-browsing">
            <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
            </Link>
            <Link to="/safe-browsing">
            <ListItemText classes={{ primary: classes.link }} >Safe browsing</ListItemText>
            </Link>
            </ListItem>
        </List>
      </div>
    </>
    );

    const tertiaryList = (
    <>
      <div className={classes.list}>
        <List className={classes.root} >
          <ListItem button key={2}>
           <Link to="/who-we-are">
            <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
           </Link>
            <Link to="/who-we-are">
            <ListItemText classes={{ primary: classes.link }} >Who we are</ListItemText>
            </Link>
            </ListItem>
          <ListItem button key={2}>
            <Link to="/contact">
            <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
            </Link>
            <Link to="/contact">
            <ListItemText classes={{ primary: classes.link }} >Contact us</ListItemText>
            </Link>
            </ListItem>
          <ListItem button key={2}>
            <Link to="/partners">
            <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
            </Link>
            <Link to="/partners">
              <ListItemText classes={{ primary: classes.link}} >Partners</ListItemText>
            </Link>
            </ListItem>
        </List>
      </div>
      </>
    );

    return (
    <>
      <IconButton aria-label="Open navigation" label="Open navigation" className={classes.toggle} onClick={this.toggleDrawer('left', true)}><Icon path={mdiMenu} size={1.2} color="white"/></IconButton>
      <Drawer anchor="left" open={this.state.left} onClose={this.toggleDrawer('left', false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer('left', false)}
          onKeyDown={this.toggleDrawer('left', false)}
        >
          <List
            subheader={<ListSubheader className={classes.head}>MONTANA CRIME VICTIMS</ListSubheader>}
            className={classes.root}
          >
            <ListItem  className={classes.list} alignItems="flex-start">
              <ListItemText
                primary= {
                  <React.Fragment>
                  <Typography component="span" className={classes.inline} color="textPrimary">
                    The only prerequisite is that it makes you happy. If it makes you happy then it's good. Let's build an almighty mountain.
                  </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>

          <Divider />
            {mainList}
          <Divider />
            {secondaryList}
          <Divider />
            {tertiaryList}
        </div>
      </Drawer>
    </>
    );
  }
}

export default withStyles(styles)(NavigationDrawer);
