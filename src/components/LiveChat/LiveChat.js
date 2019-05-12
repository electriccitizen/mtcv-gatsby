import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChatIcon from '@material-ui/icons/Chat';
const styles = theme => ({
  livechat: {
    width: '100%',
    textAlign: 'right',
    paddingRight: '2em',
    marginTop: '3em',
  },
  chat: {
    fontSize: 80,
  }
});


function LiveChat(props) {
  const { classes, backgroundColor } = props;

  return (
    <div className={classes.livechat}>
      <Typography variant="h6">LIVE CHAT</Typography>
      <ChatIcon className={classes.chat} />
    </div>

  );
}

export default withStyles(styles)(LiveChat)
