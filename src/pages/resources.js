import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout/Layout'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import ResourceHome from '../components/ResourceHome/ResourceHome';
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
  about: {
    padding: '2em',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  photo: {
    width: 300,
    height: 300,
    backgroundColor: "pink",
    display: 'block',
  }
}));

export default function Resources() {

  const classes = useStyles();
  return (
    <Layout>

      <ResourceHome />
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

    </Layout>
  );
}
