import { useStaticQuery, graphql } from "gatsby"

export const navE = () => {
  const { allTaxonomyTermRegion } = useStaticQuery(
    graphql`
      query  {
        allTaxonomyTermRegion
          {           
            edges {
              node {
                drupal_id
                name
                
             }
           }
          }
        }
      `
      )
  return allTaxonomyTermRegion
    }




