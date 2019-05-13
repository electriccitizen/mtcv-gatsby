import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	 ...theme.mixins.gutters(),
	subhead: {
	  fontSize: 30,
	}
});

const ParagraphText = (props) => {
  const { classes } = props;

  return (
    <>
      <Typography className={classes.subhead} variant="h5">{props.header}</Typography>
      <Typography dangerouslySetInnerHTML={{ __html: props.text }} variant="body1" />
    </>
  );
};

export default withStyles(styles)(ParagraphText);;