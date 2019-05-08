import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout/Layout'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea'
import ResourceHome from '../components/ResourceHome/ResourceHome';
import Navigator from '../components/Navigator/Navigator';
import { CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Link from '../components/Link';


const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: 'Gainsboro',
  },
  navigator: {
    backgroundColor: 'Cornsilk',
    marginBottom: '1em',

  },
  factoid: {
    backgroundColor: 'WhiteSmoke',

  },
  link: {
    '&:hover': {
      color: 'white',
      opacity: '1',
    }
  },
  wrapper: {
    marginBottom: '1em',
  },
  title: {
    color: 'pink',
  },
  subheader: {
    color: 'black',
  },
}));

export default function App() {

  const classes = useStyles();
    return (
      <Layout>

        <Grid container spacing={6}>
          <Grid item lg={12}>
            <Card className={classes.navigator}>
              <CardHeader
                className={classes.header}
                title="Legal Help Navigator"
                subheader="Search our library for resources and services"
                classes={{
                  subheader: classes.subheader,
                  }}
              />
              <CardContent>
                <Navigator />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid className={classes.wrapper} container spacing={4}>
          <Grid item lg={6}>
          <CardActionArea href="/">

            <Link className={classes.link} to="library">
            <Card className={classes.factoid}>
              <CardContent>
                <Typography variant="h6">Featured resource</Typography>
                <Typography component="body2">
                  Clouds are free. They just float around the sky all day and have fun. Just go back and put one little more happy tree in there. If you don't like it - change it. It's your world. We'll paint one happy little tree right here.
                </Typography>
              </CardContent>
            </Card>

            </Link>
          </CardActionArea>

          </Grid>
          <Grid item lg={6}>
          <CardActionArea href="/">
            <Card className={classes.factoid}>
              <CardContent>

                <Typography variant="h6">Did you know?</Typography>
                <Typography component="body2">
                  Clouds are free. They just float around the sky all day and have fun. Just go back and put one little more happy tree in there. If you don't like it - change it. It's your world. We'll paint one happy little tree right here.
                </Typography>


              </CardContent>
            </Card>
          </CardActionArea>

          </Grid>
        </Grid>
      <ResourceHome />

      </Layout>
  );
}
