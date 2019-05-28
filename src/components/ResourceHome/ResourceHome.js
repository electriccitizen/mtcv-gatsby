import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: 'Cornsilk',
    maxWidth: '400px',

  },
  header: {
    backgroundColor: 'Gainsboro',
  },
  search: {
    width: '100%',
  },
  list: {
    float: 'right',
    padding: 0,
  },
  subheader: {
    color: 'black',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '80%',
  },
}));


export default function ResourceHome() {

  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <CardActionArea>
            <Card >
              <CardHeader
                className={classes.header}
                title="Resource library"
                subheader="Search our library for resources and services"
                classes={{
                  subheader: classes.subheader,
                }}
                />
            </Card>
          </CardActionArea>
          <div className={classes.search}>
            <List className={classes.list} >
              <ListItem>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search all resources" />
              </ListItem>
            </List>
          </div>
        </Grid>


      </Grid>
      <TextField
        id="outlined-with-placeholder"
        label="Search by keyword"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />

    </>
  );
}