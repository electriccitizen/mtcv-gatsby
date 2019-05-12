import React from 'react';
import Layout from '../components/Layout/Layout'
import ResourceHome from '../components/ResourceHome/ResourceHome';
import Resources from '../components/Resources/Resources'
import { makeStyles } from '@material-ui/core/styles';
import { allResources } from "../hooks/all-resources"

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core'



const useStyles = makeStyles(theme => ({
  foo: {
    background: 'none',
  },
}));

export default function Library() {
  const classes = useStyles();
  const foo = allResources()



  return (
    <Layout>
      <Grid container spacing={4}>
      {foo.edges.map(foo =>
        <>
          <Grid item lg={6}>
            <Card>
        <div>{foo.node.title}</div>
        <div>{foo.node.description.value}</div>
            </Card>
          </Grid>
        </>
      )}
      </Grid>
    </Layout>
  );
}
