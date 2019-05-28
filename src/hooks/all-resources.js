import { useStaticQuery, graphql } from "gatsby"

export const allResources = () => {
  const { allNodeResource } = useStaticQuery(
    graphql`
      query SiteMetaData2 {
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
  )
  return allNodeResource
}