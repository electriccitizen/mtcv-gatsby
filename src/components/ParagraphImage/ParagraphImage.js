import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '3em',
    padding: theme.spacing.unit * 1,
    width: '90%',
  },
  caption: {
    fontSize: 14,
  }

});

const ParagraphImage = (props) => {
  const { classes } = props;
  var media;
  if (props.media.localFile) {
    media = props.media.localFile.childImageSharp.fluid
  } else {
    media = ''
  }
  
  return (

    <>
     
      <Paper className={classes.image}>
        <Img
          fluid={media}
        />
    
    <div className={classes.caption}>
      <Typography variant="caption">
        {props.caption}
      </Typography>
    </div>
 
 </Paper>

 </>
  );
};

ParagraphImage.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(ParagraphImage);