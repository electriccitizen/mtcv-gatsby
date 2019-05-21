import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { allResources } from "../hooks/all-resources"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Layout from '../components/Layout/Layout'
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  foo: {
    background: 'none',

  },
  grid: {
    height: '100%',
  }
}));

export default function Library() {
  const classes = useStyles();
  const foo = allResources()
  return (
    <Layout>
      <Grid className={classes.foo} container spacing={4}>
      {foo.edges.map(foo =>
        <>
          <Grid item lg={6}>
            <Card className={classes.grid}>
              <CardActionArea>
                <CardActions>
                  <CardContent>
              <Typography variant="h6">{foo.node.title}</Typography>

              <div>{foo.node.description.value}</div>
                  </CardContent>
                </CardActions>
              </CardActionArea>

            </Card>
          </Grid>
        </>
      )}
      </Grid>
    </Layout>
  );
}
