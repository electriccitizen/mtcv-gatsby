import React from 'react';
import Layout from '../components/Layout/Layout'
import ResourceHome from '../components/ResourceHome/ResourceHome';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  foo: {
    background: 'none',
  },
}));

export default function Library() {

  const classes = useStyles();
  return (
    <Layout>

      <ResourceHome
        className={classes.foo}
      />

    </Layout>
  );
}
