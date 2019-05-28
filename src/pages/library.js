import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { allResources } from "../hooks/all-resources"
import { allCrime } from "../hooks/all-crime";
import { allRelatedNeeds } from "../hooks/all-related-needs";
import { allVictimResources } from "../hooks/all-victim-resources";
import { allRegions } from "../hooks/all-regions";
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
import CrimeFilter from '../components/CrimeFilter/CrimeFilter';
import NeedFilter from '../components/NeedFilter/NeedFilter';
import ResourceFilter from '../components/ResourceFilter/ResourceFilter';
import RegionFilter from '../components/RegionFilter/RegionFilter';

const useStyles = makeStyles(theme => ({
  foo: {
    background: 'none',

  },
  grid: {
    width: '100%',
    marginBottom: '3em',
  },
  header: {
    fontSize: '20px',
    fontWeight: 500,


  },
}));

export default function Library() {
  const classes = useStyles();
  const resources = allResources()
  const crimes = allCrime()
  const needs = allRelatedNeeds()
  const victimresources = allVictimResources()
  const regions = allRegions()
  return (
    <Layout>
      <ResourceHome/>
      <Grid container spacing={4}>
        <Grid item lg={4}>
       <CrimeFilter
          items={crimes}
        />
        <NeedFilter
          items={needs}
        />
        <ResourceFilter
          items={victimresources}
        />
        <RegionFilter
          items={regions}
        />
        </Grid>
        <Grid item lg={8}>
          {resources.edges.map(resources =>
          <>
            <Grid container>
            <Grid item lg={12}>
              <Card className={classes.grid}>
              <CardHeader
                classes={{
                  title: classes.header,
                }}
                title={resources.node.title}
                color="primary"
                size="small"
              />
              <CardActionArea>
                <CardActions>
                  <CardContent>
                    <Typography variant="body1"> {resources.node.description.value}</Typography>
                    <Button variant="contained" color="secondary" size="small" >
                     Visit
                    </Button>
                  </CardContent>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
            </Grid>
        </>
      )}
      </Grid>
      </Grid>
    </Layout>
  );
}
