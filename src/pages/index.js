import React from 'react';
import Layout from '../components/Layout/Layout'
import Grid from '@material-ui/core/Grid';
import Navigator from '../components/Navigator/Navigator';
import { makeStyles } from '@material-ui/core/styles';
import Hero from '../components/Hero/Hero';
import Teasers from '../components/Teasers/Teasers';
const useStyles = makeStyles(theme => ({

  foo: {
    background: 'none',
  }
}));

export default function App() {

  const classes = useStyles();
    return (
      <Layout>
        <Grid className={classes.foo} container spacing={6}>
          <Grid item lg={12}>
            <Hero />
            <Navigator />
            <Teasers />
          </Grid>
        </Grid>
      </Layout>
  );
}
