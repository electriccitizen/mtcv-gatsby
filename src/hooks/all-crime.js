import { useStaticQuery, graphql } from "gatsby"

export const allCrime = () => {
  const { allTaxonomyTermCrime } = useStaticQuery(
    graphql`
      query siteCrime2 {
        allTaxonomyTermCrime {
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
  return allTaxonomyTermCrime
}