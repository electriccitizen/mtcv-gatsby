import { useStaticQuery, graphql } from "gatsby"

export const navA = () => {
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
                  eq: "97f6e441-cac1-4f01-81e9-798acce48b8b"
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



