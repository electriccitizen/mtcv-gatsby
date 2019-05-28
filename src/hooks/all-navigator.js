import { useStaticQuery, graphql } from "gatsby"

export const allNavigator = () => {
  const { allTaxonomyTermNavigator } = useStaticQuery(
    graphql`
      query SiteMetaData3 {
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

//filter: { drupal_id: {eq: "foo"} OR drupal_id: {eq: ""}}
//(
//filter: { drupal_id: {eq: "foo"} , drupal_id: {eq: ""}
//)



