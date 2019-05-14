import React from 'react';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

import moment from 'moment'
import Layout from '../components/Layout/Layout';
import Page from '../components/Page/Page';

const styles = theme => ({
    root: {
         flexGrow: 1,
    },
});

const pageTemplate = (props) => {
  const { classes } = props;
  const { nodePage: page } = props.data;

  // Check for a valid media object and set to empty
  // (i think NULL or not defined will break?)
  var media;
  if (page.relationships.field_hero) {
    media = page.relationships.field_hero.relationships.field_media_image
  } else {
    media = ''
  }

  return (
    <Layout>
      <div className={classes.root}>
        <Page
          title={page.title}
          changed={moment(page.changed).format('DD MMMM, YYYY')}
          summary={page.summary.processed}
          media={media}
          content={page.relationships.field_content}
        />
      </div>
    </Layout>
  )
};

export default withStyles(styles)(pageTemplate);

export const query = graphql `
  query fooTemplate {
    nodePage  {
      drupal_id
      title
      path {
        alias
        }
      created
      changed
      summary: field_summary {
        processed
      }
      relationships {
      field_hero {
        id
        relationships {
          field_media_image {
            id
            filename
              uri {
                value
                url
              }
            localFile {
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      field_content {
        __typename
        ... on paragraph__text {
          id
          field_header
          field_text {
            processed
          }
        }
        ... on paragraph__image {
          id
          field_caption {
            format
            value
            processed
          }
          relationships {
            field_single_image {
              relationships {
                field_media_image {
                  id
                  filename
                  uri {
                    value
                    url
                  }
                  localFile {
                    publicURL
                    childImageSharp {
                      fluid(maxWidth: 550, maxHeight: 550) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

    }
  }
}
`;