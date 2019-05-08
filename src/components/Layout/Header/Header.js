import React from 'react';
import { Link } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Headroom from "react-headroom"
import styles from "./header.module.css"
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import { makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
    float: 'right',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    color: 'white',
  },
}));


function Header(props) {
  const classes = useStyles();
  return (
      <Headroom className={styles.headroom}>
          <AppBar position="static" color="primary">
              <Toolbar className={styles.toolbar}>
                <Grid container spacing={0}>
                  <Grid item xs={12} lg={6}>
                  <NavigationDrawer />
                  <Typography variant="h5" className={styles.logo}>
                      <Link to={"/"}>{props.title}</Link>
                </Typography>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                <Paper className={classes.root}>
                <InputBase className={classes.input} placeholder="Search by keyword" />
                <IconButton className={classes.iconButton} aria-label="Search">
                  <SearchIcon />
                </IconButton>
              </Paper>
                  </Grid>
                </Grid>
              </Toolbar>
          </AppBar>


      </Headroom>
  );
}

export default Header;
