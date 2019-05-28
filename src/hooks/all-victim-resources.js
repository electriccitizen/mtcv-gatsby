import { useStaticQuery, graphql } from "gatsby"

export const allVictimResources = () => {
  const { allTaxonomyTermResourceCategory } = useStaticQuery(
    graphql`
      query termsVictimResources {
        allTaxonomyTermResourceCategory {
          edges {
            node {
              id
              name
            }
          }
        } 
      }
    `
  )
  return allTaxonomyTermResourceCategory
}