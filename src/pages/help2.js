import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout/Layout'
import Navigator2 from '../components/Navigator/Navigator2';

const useStyles = makeStyles(theme => ({
  foo: {
    backgroundColor: "none",
  }
}));

export default function Help2() {
  const classes = useStyles();
  return (
    <Layout>
      <Navigator2 className={classes.foo}/>
    </Layout>
  );
}
