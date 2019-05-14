import React from 'react';
import { Link } from "gatsby"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import { CardContent } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = ({
  wrapper: {
    textAlign: 'center',
    alignContent: 'center',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    float: 'center',
  },
});

function Teasers(props) {

  const { classes } = props;

  return (
    <Grid className={classes.wrapper} container spacing={4}>
      <Grid item lg={6}>
        <CardActionArea href="/">
          <Link to="library">
            <Card>
              <CardContent>
                <Typography variant="h6">Know your rights</Typography>
                <Typography component="body2">
                  Clouds are free. They just float around the sky all day and have fun. Just go back and put one little more happy tree in there. If you don't like it - change it. It's your world. We'll paint one happy little tree right here.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </CardActionArea>
      </Grid>
      <Grid item lg={6}>
        <CardActionArea href="/">
          <Card>
            <CardContent>
              <Typography variant="h6">Self-help library</Typography>
              <Typography component="body2">
                Clouds are free. They just float around the sky all day and have fun. Just go back and put one little more happy tree in there. If you don't like it - change it. It's your world. We'll paint one happy little tree right here.
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Teasers)
