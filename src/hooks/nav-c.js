import { useStaticQuery, graphql } from "gatsby"

export const navC = () => {
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
                  eq: "96100997-5ced-4dbc-a950-be7bb3875788"
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



