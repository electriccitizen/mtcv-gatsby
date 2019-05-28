import { useStaticQuery, graphql } from "gatsby"

export const allRelatedNeeds = () => {
  const { allTaxonomyTermRelatedIssues } = useStaticQuery(
    graphql`
      query termsRelatedNeeds{
        allTaxonomyTermRelatedIssues {
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
  return allTaxonomyTermRelatedIssues
}