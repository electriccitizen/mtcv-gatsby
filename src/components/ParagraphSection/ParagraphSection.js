import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import ParagraphText from '../ParagraphText/ParagraphText'
import ParagraphGrid from '../ParagraphGrid/ParagraphGrid'
import ParagraphImage from '../ParagraphImage/ParagraphImage'

const styles = theme => ({
  ...theme.mixins.gutters(),
  subhead: {
    fontSize: 30,
  },
  bg: {
    backgroundColor: 'pink',
    width: '99.225vw',
    position: 'relative',
    left: '50%',
    marginLeft: '-49.59vw',
    marginTop: '2em'
  }
});

const ParagraphSection = (props) => {


  var media;
  return (
    <>
      <div>
      {
        props.content.map((item, key) => {
          if (item.__typename === 'paragraph__text') {
            return (
                <ParagraphText
                  header={item.field_header}
                  content={item.field_text.value}
                  fx={item.field_special_fx}
                />
            );
          }
          if (item.__typename === 'paragraph__image') {
            if (item.relationships.field_single_image) {
              media = item.relationships.field_single_image.relationships.field_media_image
            } else {
              media = ''
            }
            return (
              <ParagraphImage
                caption={item.field_caption.value}
                media={media}
                fx={item.field_special_fx}
              />
            );
          }
          if (item.__typename === 'paragraph__grid') {
            return (

                <ParagraphGrid
                  columns={item.field_columns}
                  content={item.relationships.field_grid_content}
                />

            );
          }
          return null
        })
      }
      </div>
    </>
  );
};

export default withStyles(styles)(ParagraphSection);