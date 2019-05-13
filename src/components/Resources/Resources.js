import React from "react"
import { graphql } from "gatsby"

function Resources(props) {
  return (
    <div>
      foo
    </div>
  )
}

export default Resources

export const pageQuery = graphql`
   query {
    allNodeResource {
      edges {
        node {
         drupal_id
         changed
         status
         title
          description: field_description {
            value
          }
          field_url {
            uri
          }
          relationships {
            field_crime {
              drupal_id
              name
            }
            field_related_issue {
              drupal_id
              name
            }
            field_region {
              drupal_id
              name
            }
          }
        }
      }
    }
  }
`