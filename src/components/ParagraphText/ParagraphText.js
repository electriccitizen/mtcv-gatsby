import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SpecialFX from '../SpecialFX/SpecialFX'
import { Container } from '@material-ui/core'
const styles = theme => ({
	 ...theme.mixins.gutters(),
	subhead: {
	  fontSize: 30,
	},
  container: {
	   marginBottom: theme.container.marginBottom,
  },
  bg: {
    backgroundColor: 'purple',
    width: '99.225vw',
    position: 'relative',
    left: '50%',
    marginLeft: '-49.59vw',
    marginTop: '2em'
  }
});

const ParagraphText = (props) => {
  const { classes } = props;
  return (
    <>
      <div>
      <Container className={classes.container}>
        <SpecialFX fx={props.fx}>
          <Typography className={classes.subhead} variant="h5">{props.header}</Typography>
          <Typography dangerouslySetInnerHTML={{ __html: props.content }} variant="body1" />
        </SpecialFX>
      </Container>
      </div>
    </>
  );
};

export default withStyles(styles)(ParagraphText);