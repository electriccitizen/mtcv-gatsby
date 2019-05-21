import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core'
import ParagraphText from '../ParagraphText/ParagraphText';
import ParagraphImage from '../ParagraphImage/ParagraphImage';

const styles = theme => ({
  ...theme.mixins.gutters(),
  subhead: {
    fontSize: 30,
  },
  Grid: {
    marginBottom: '4em',
  },
  container: {
  }

});

const ParagraphGrid = (props) => {
  const { classes } = props;

  return (
    <>
      <Container className={classes.container}>
        <Grid container spacing={2}>
          {
          props.content.map((item, key) => {
            if (item.__typename === 'paragraph__text') {
              return (
                <Grid item lg={6}>
                  <ParagraphText
                    title={item.__typename}
                    content={item.field_text.processed}
                    header={item.field_header}
                    fx={item.field_special_fx}
                  />
                </Grid>
              );
            }
            if (item.__typename === 'paragraph__image') {
              var media
              if (item.relationships.field_single_image) {
              media = item.relationships.field_single_image.relationships.field_media_image
            } else {
              media = ''
            }
              return (
                <Grid item lg={6}>
                  <ParagraphImage
                    caption="xxx"
                    media={media}
                    fx={item.field_special_fx}
                  />
                </Grid>
              );
            }
            return null
          })
          }
        </Grid>
      </Container>


    </>
  );
};

export default withStyles(styles)(ParagraphGrid);