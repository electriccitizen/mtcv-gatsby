import React from 'react';

import { Link } from "gatsby"
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
      <Link to="/help2">
      <Navigator className={classes.foo}/>
      </Link>
      </Layout>
  );
}
