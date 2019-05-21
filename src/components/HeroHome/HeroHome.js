import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InsertPhoto from '@material-ui/icons/InsertPhoto';

const styles = theme => ({
  hero: {
    paddingBottom: theme.spacing.unit * 6,
    marginTop: theme.spacing.unit * 4,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  inner: {
    textAlign: 'center',
    fontWeight: 800,
    width: '100%',
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
    marginTop: '2em',
    maxWidth: '600px',
    textAlign: 'center',
  },
  home: {
    maxWidth: '400px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

});


function HeroHome(props) {

  const { classes, backgroundColor } = props;

  return (
    <div className={classes.hero}>
      <div className={classes.inner}>
        <Typography className={classes.home} variant="h3">HELP FOR MONTANA CRIME VICTIMS</Typography>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Card background="red" style={{ backgroundColor }} className={classes.photo}>
              <InsertPhoto />
            </Card>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Typography className={classes.message}>
              Look around, look at what we have. Beauty is everywhere, you only have to look to see it. Let's put a touch more of the magic here. We start with a vision in our heart, and we put it on canvas. It does not have to be difficult.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(HeroHome)
