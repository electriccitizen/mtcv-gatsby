import { useStaticQuery, graphql } from "gatsby"

export const navD = () => {
  const { allTaxonomyTermNavigator } = useStaticQuery(
    graphql`
      query  {
        allTaxonomyTermNavigator
          (
          filter: {
            relationships: {
              parent: {
              elemMatch: {
                drupal_id: {
                  eq: "611af1c7-4ef3-45a1-9a6a-6e803d9a36ca"
                }
              }
            }
          }
        }
        )
          {           
          edges {
            node {
              drupal_id
              name
              relationships {
                parent {
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
  return allTaxonomyTermNavigator
}



