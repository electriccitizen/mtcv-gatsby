import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const year = new Date().getFullYear();
const styles = theme => ({
  hero: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 8,
    marginTop: theme.spacing.unit * 2,
    width: '60%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  inner: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ccc',
  },
  photo: {
    width: 360,
    height: 200,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'Gainsboro',
    paddingTop: '6em',
    marginTop: '3em',

  },
  wrapper: {
    textAlign: 'center',
    alignContent: 'center',
    width: '100%',
    backgroundColor: 'pink',
    marginLeft: 'auto',
    marginRight: 'auto',
    float: 'center',
  },
  message: {
    marginTop: '3em',
  },
  rightIcon: {
    marginRight: 10,
  }
});


function Escape(props) {
  const { classes, backgroundColor } = props;

  return (
    <Button variant="contained" className={classes.button}>
      <ExitToAppIcon className={classes.rightIcon} />
      ESCAPE
    </Button>

  );
}

export default withStyles(styles)(Escape)
