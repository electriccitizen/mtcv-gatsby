import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import Typography from '@material-ui/core/Typography';
import SpecialFX from '../SpecialFX/SpecialFX'
import { Container } from '@material-ui/core'

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
  },

  wrapper: {
    textAlign: 'center',
    width: '100%',
  },
  container: {
	   marginBottom: theme.container.marginBottom,
  }

});

const ParagraphImage = (props) => {
  const { classes } = props;

  var media;

  if (props.media.localFile) {
    media = props.media.localFile.childImageSharp.fixed
  } else {
    media = ''
  }
  
  return (
    <>
      <Container className={classes.container}>
        <SpecialFX fx={props.fx}>
          <div className={classes.wrapper}>
          <div className={classes.container}>
            <Img
              fixed={media}
            />
          <div className={classes.caption}>
            <Typography variant="caption">
              {props.caption}
            </Typography>
          </div>
        </div>
        </div>
        </SpecialFX>
      </Container>
    </>
  );
};

export default withStyles(styles)(ParagraphImage);