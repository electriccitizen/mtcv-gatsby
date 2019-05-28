import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { allResources } from "../hooks/all-resources"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader'
import Layout from '../components/Layout/Layout'
import Typography from '@material-ui/core/Typography';

import ResourceHome from '../components/ResourceHome/ResourceHome';
const useStyles = makeStyles(theme => ({
foo: {
background: 'none',

},
grid: {
  height: '100%',
  width: '100%',

},
cardWrapper: {
  width: '400px',
  height: '100%',
  },
header: {
fontSize: '20px',
fontWeight: 500,


},
}));

export default function Results() {
const classes = useStyles();
const foo = allResources()
return (
<Layout>
    <ResourceHome/>
    <Grid className={classes.foo} container spacing={4}>
        {foo.edges.map(foo =>
        <>
        <Grid item lg={6}>
          <div className={classes.cardWrapper}>
          <Card className={classes.grid}>
                <CardHeader
                    classes={{
                    title: classes.header,
                    }}
                    title={foo.node.title}
                    color="primary"
                    size="small"
                />
                <CardActionArea>
                    <CardActions>
                        <CardContent>
                            <Typography variant="body1"> {foo.node.description.value}</Typography>
                            <Button variant="contained" color="secondary" size="small" >
                                Visit
                            </Button>
                        </CardContent>
                    </CardActions>
                </CardActionArea>

            </Card>

          </div>
        </Grid>
    </>
    )}
    </Grid>
</Layout>
);
}
