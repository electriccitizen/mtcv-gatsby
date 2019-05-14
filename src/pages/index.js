import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout/Layout'
import Grid from '@material-ui/core/Grid';
import Hero from '../components/Hero/Hero';
import Navigator from '../components/Navigator/Navigator';
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
