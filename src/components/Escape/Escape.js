import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const styles = theme => ({

  button: {
    backgroundColor: '#ccc',
  },
  rightIcon: {
    marginRight: 10,
  }
});


function Escape(props) {
  const { classes } = props;

  return (
    <Button variant="contained" className={classes.button}>
      <ExitToAppIcon className={classes.rightIcon} />
      ESCAPE
    </Button>

  );
}

export default withStyles(styles)(Escape)
