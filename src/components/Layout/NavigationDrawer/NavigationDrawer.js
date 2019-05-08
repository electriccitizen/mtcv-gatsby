import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Icon from '@mdi/react'
import Typography from '@material-ui/core/Typography';
import { mdiMenu } from '@mdi/js'
import { mdiEmoticonNeutralOutline } from '@mdi/js'

const styles = {
  root: {
    fontSize: 10,
  },
  highlight: {
    backgroundColor: 'Cornsilk',
  },
  head: {
    fontSize: 20,
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

   opacity: '.6',
   '&:hover': {
        color: 'white',
      opacity: '1',
        }
 }
};

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}



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
          <ListItemLink href="library">
            <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
            <ListItemText primary="Self-help library" />
          </ListItemLink>
          <ListItem button key={2}>
            <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
            <ListItemText classes={{ primary: classes.buttontext }} >Self-help library</ListItemText>
          </ListItem>
          <ListItem button key={2}>
            <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
            <ListItemText classes={{ primary: classes.buttontext }} >Legal help navigator</ListItemText>
          </ListItem>


        </List>
      </div>
      </>
    );

    const secondaryList = (
      <>
      <div className={classes.list}>
        <List className={classes.root} >
          <ListItem button className={classes.highlight} key={2}>
            <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
            <ListItemText classes={{ primary: classes.buttontext }} >Escape</ListItemText>
          </ListItem>
          <ListItem button  key={2}>
            <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
            <ListItemText classes={{ primary: classes.buttontext }} >Safe browsing</ListItemText>
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
            <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
            <ListItemText classes={{ primary: classes.buttontext }} >Who we are</ListItemText>
          </ListItem>
          <ListItem button key={2}>
            <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
            <ListItemText classes={{ primary: classes.buttontext }} >Contact us</ListItemText>
          </ListItem>
          <ListItem button key={2}>
            <ListItemIcon><Icon className={classes.icon} path={mdiEmoticonNeutralOutline} size={1}/></ListItemIcon>
            <ListItemText classes={{ primary: classes.buttontext }} >Partners</ListItemText>
          </ListItem>

        </List>
      </div>
      </>
    );

        return (
      <>
      <IconButton label="Open avigation" className={classes.toggle} onClick={this.toggleDrawer('left', true)}><Icon path={mdiMenu} size={1.2} color="white"   /></IconButton>
      <Drawer anchor="left" open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
          <List
                subheader={<ListSubheader className={classes.head}>Montana Crime Victims</ListSubheader>}
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

NavigationDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationDrawer);
