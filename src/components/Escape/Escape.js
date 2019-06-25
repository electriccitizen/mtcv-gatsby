import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Warning from '@material-ui/icons/Warning';
//import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Popover from '@material-ui/core/Popover';


const styles = ({

  button: {
    margin: '10px',
  },
  rightIcon: {
    marginRight: 10,
    color: '#ccc',
  },
  rightIconSmall: {
    color: '#f4f4f4',
  },
  warning: {
    padding: '2em',
    maxWidth: '320px',
    backgroundColor: '#fff',
  },
  message: {
    marginBottom: '1em',
  },

});

class Escape extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {

    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <>

        <Button
          aria-owns={open ? 'simple-popper' : undefined}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handleClick}
          color="primary.light"
          size="small"
        >
        <Warning className={classes.rightIcon} />
          ESCAPE
        </Button>
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <div className={classes.warning}>
            <Typography className={classes.typography} variant="h6">SAFE BROWSING</Typography>
            <Typography variant="body1" className={classes.message}>
            You can click our <a href="http://weather.com">ESCAPE</a> button at any time while visiting
            this site to quickly close this window and open a new Google search window. Learn more about <a href="/safe-browsing">safe browsing and how to protect yourself</a> on the Internet.</Typography>
            <Button variant="contained" className={classes.button} onClick={this.handleClose}>Got it</Button>
            <Button variant="contained" className={classes.button} color="primary" href="/">Learn more</Button>
          </div>

        </Popover>


      </>
    );
  }
}

export default withStyles(styles)(Escape)


