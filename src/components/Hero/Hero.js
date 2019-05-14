import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  hero: {
    paddingBottom: theme.spacing.unit * 8,
    marginTop: theme.spacing.unit * 2,
    width: '60%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  inner: {
    textAlign: 'center',
  },
  photo: {
    width: 320,
    height: 200,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'Gainsboro',
    paddingTop: '6em',
    marginTop: '3em',

  },
  message: {
    marginTop: '3em',
  }
});


function Hero(props) {

  const { classes, backgroundColor } = props;

  return (
    <div className={classes.hero}>
      <div className={classes.inner}>
        <Typography variant="h4">HELP FOR MONTANA<br /> CRIME VICTIMS</Typography>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Card background="red" style={{ backgroundColor }} className={classes.photo}>
              NICE IMAGE
            </Card>
          </Grid>
        </Grid>
        <Grid container className={classes.message} justify="center" spacing={2}>
          <Grid item>
            <Typography>
              Look around, look at what we have. Beauty is everywhere, you only have to look to see it. Let's put a touch more of the magic here. We start with a vision in our heart, and we put it on canvas.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Hero)
