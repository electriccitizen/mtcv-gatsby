import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout/Layout'
import Navigator from '../components/Navigator/Navigator';

const useStyles = makeStyles(theme => ({
  foo: {
    backgroundColor: "none",
  }
}));

export default function Help() {
  const classes = useStyles();
  return (
    <Layout>
      <Navigator className={classes.foo}/>
    </Layout>
  );
}
