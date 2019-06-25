import React from 'react';
import { makeStyles } from '@material-ui/core'
import { Link } from 'gatsby';
import Headroom from "react-headroom"
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Escape from '../../Escape/Escape';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';


import styles from "./header.module.css"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  mobile: {
    textAlign: 'right',
    width: '100%',
    paddingTop: '1em',
    paddingRight: '.5em'
  },
  right: {
    float: 'right',
  },
  rightIcon: {
    marginRight: '10px',
  },
  underbar: {
    backgroundColor: '#000051',
    padding: '1em',
    textAlign: 'right',
    width: '100%',
  }
}));


function Header(props) {

  const classes = useStyles();

  return (
    <Headroom className={styles.headroom}>
      <AppBar position="static" color="primary">

        <Hidden mdUp>
          <div className={classes.underbar}>
            <Button variant="contained" size="small" color="primary" className={classes.button}>
              <SearchIcon className={classes.rightIcon} />
                Search
            </Button>
            <Escape />
          </div>
        </Hidden>

        <Toolbar className={styles.toolbar}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={8} md={8}>
              <NavigationDrawer />
              <Typography variant="h5" className={styles.logo}>
                <Link to={"/"}>{props.title}</Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <div className={classes.right}>
                  <Escape />
              </div>
            </Grid>
          </Grid>

        </Toolbar>

      </AppBar>

    </Headroom>
  );
}

export default Header;
