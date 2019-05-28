import { useStaticQuery, graphql } from "gatsby"

export const navB = () => {
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
                  eq: "7152443c-acd0-4b45-a35b-a9e4a371c1c6"
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



