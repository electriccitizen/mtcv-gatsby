import React from 'react';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LiveChat from '../../../components/LiveChat/LiveChat'

const year = new Date().getFullYear(); // used for copyright date

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#091A29',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 8,
    color: '#ffffff',
    marginTop: theme.spacing.unit * 2,
    fontSize: 14,
    paddingLeft: theme.spacing.unit * 2,
  },
  right: {
    textAlign: 'right',
    paddingRight: theme.spacing.unit * 2,
  }
}));


function Footer(props) {
  const classes = useStyles();
  return (
    <>
      <LiveChat />
      <div className={classes.footer}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Typography paragraph>
              Footer content
            </Typography>
          </Grid>
          <Grid className={classes.right} item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography>
              &copy; {year} Montana Crime Victims
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
