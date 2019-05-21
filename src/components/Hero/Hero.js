import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';
import CustomButton from '../CustomButton/CustomButton';

const styles = props => ({
  hero: {
    width: '100%',
    backgroundColor: props.color,
  },
  inner: {
    textAlign: 'center',
  },
  message: {
    marginTop: '3em',
  }
});

const useStyles = makeStyles(theme => {
  console.log(theme);

  return {
    root: {
      opacity: '.8',
      backgroundColor: theme.custom.color,
      color: theme.custom.color,
      "backgroundImage": props => `url(${props.heroimage.localFile.publicURL}),linear-gradient(0deg, rgba(0,255,0,0.4), rgba(255,0,0,0.2))`,
      "background-position-y":`calc(50% - -42px)`,
      width: '99.225vw',
      position: 'relative',
      left: '50%',
      marginLeft: '-49.59vw',
      marginTop: '-2em',
      marginBottom: '4em',
      textAlign: 'center',
      padding: '6em',
    },
    headline: {
      fontWeight: theme.headline.fontWeight,
      fontSize: theme.headline.fontSize,
      width: theme.headline.width,
      marginRight: theme.headline.marginRight,
      marginLeft: theme.headline.marginLeft,
      marginBottom: theme.headline.marginBottom,
    },
    subtitle: {
      fontSize: theme.subtitle.fontSize,
      width: theme.subtitle.width,
      marginRight: theme.subtitle.marginRight,
      marginLeft: theme.subtitle.marginLeft,

    }
  };
});



function Hero(props) {

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.headline}>{props.title}</Typography>
      <Typography variant="h4" className={classes.subtitle}>{props.subtitle}</Typography>
      <CustomButton buttons={props.buttons} />
    </div>
  );
}

export default withStyles(styles)(Hero)
