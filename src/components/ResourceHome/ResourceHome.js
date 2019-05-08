import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader'

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: 'Cornsilk',

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
}));


export default function ResourceHome() {

  const classes = useStyles();
  return (
<>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <CardActionArea>
          <Card className={classes.card}>
            <CardHeader
                className={classes.header}
              title="Self-help library"
                subheader="Search our library for resources and services"
              />
          </Card>
          </CardActionArea>

          <div className={classes.search}>
          <List className={classes.list} >
            <ListItem button>
                <SearchIcon />
              <ListItemText primary="Search all resources" />
            </ListItem>

          </List>
          </div>
        </Grid>

        <Grid item lg={4}>
          <CardActionArea>
          <Card className={classes.card}>
            <CardHeader
              title="Domestic Violence"
                subheader="Search our library for resources and services"
              />
          </Card>
          </CardActionArea>
        </Grid>
        <Grid item lg={4}>

          <CardActionArea>
          <Card className={classes.card}>
            <CardHeader
              title="Sexual Assault"
                subheader="Search our library for resources and services"
              />
          </Card>
          </CardActionArea>
        </Grid>
        <Grid item lg={4}>

          <CardActionArea>
          <Card className={classes.card}>
            <CardHeader
              title="Stalking or Harassment"
                subheader="Search our library for resources and services"
              />
          </Card>
          </CardActionArea>
        </Grid>

        <Grid item lg={4}>

          <CardActionArea>
          <Card className={classes.card}>
            <CardHeader
              title="Elder Abuse or Neglect"
                subheader="Search our library for resources and services"
              />
          </Card>
          </CardActionArea>
        </Grid>
        <Grid item lg={4}>

          <CardActionArea>
          <Card className={classes.card}>
            <CardHeader
              title="Exploitation"
                subheader="Search our library for resources and services"
              />
          </Card>
          </CardActionArea>
        </Grid>
        <Grid item lg={4}>

          <CardActionArea>
          <Card className={classes.card}>
            <CardHeader
              title="Child Abuse"
                subheader="Search our library for resources and services"
              />
          </Card>
          </CardActionArea>
        </Grid>

      <Grid item lg={4}>

        <CardActionArea>
          <Card className={classes.card}>
            <CardHeader
              title="Assault"
                subheader="Search our library for resources and services"
              />
          </Card>
        </CardActionArea>
        </Grid>
        <Grid item lg={4}>

          <CardActionArea>
          <Card className={classes.card}>
            <CardHeader
              title="Fraud or Identity Theft"
                subheader="Search our library for resources and services"
              />
          </Card>
          </CardActionArea>
        </Grid>
        <Grid item lg={4}>

          <CardActionArea>
          <Card className={classes.card}>
            <CardHeader
              title="Hate Crimes or Discrimination"
                subheader="Search our library for resources and services"
              />
          </Card>
          </CardActionArea>
        </Grid>


<Grid item lg={4}>

  <CardActionArea>
          <Card className={classes.card}>
            <CardHeader
              title="Human Trafficking"
                subheader="Search our library for resources and services"
              />
          </Card>
  </CardActionArea>

        </Grid>
        <Grid item lg={4}>

          <CardActionArea>
          <Card className={classes.card}>
            <CardHeader
              title="School Violence"
                subheader="Search our library for resources and services"
              />
          </Card>
          </CardActionArea>
        </Grid>
        <Grid item lg={4}>
          <CardActionArea>
          <Card className={classes.card}>
            <CardHeader
              title="Other Crimes"
                subheader="Search our library for resources and services"
              />
          </Card>
          </CardActionArea>
        </Grid>


      </Grid>

    </>
  );
}