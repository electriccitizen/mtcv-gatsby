import { useStaticQuery, graphql } from "gatsby"

export const allRegions = () => {
  const { allTaxonomyTermRegion } = useStaticQuery(
    graphql`
      query TermRegions {
        allTaxonomyTermRegion {
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
  return allTaxonomyTermRegion
}