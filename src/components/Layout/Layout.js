/**
 * Layout component with header and footer
 * Refactored: 04-30-19
 */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import 'typeface-roboto';

const styles = theme => ({
  '@global': {
    body: {
      color: '#333',
      fontFamily: 'Roboto',
    },
    a: {
      textDecoration: 'none'
    }
  },
  root: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});


const Layout = (props) => {
  const {children, classes} = props;

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              slogan
            }
          }
          imageOne: file(relativePath: { eq: "logo.jpg" }) {
            childImageSharp {
              fixed(width: 80) {
              ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Header
            title={data.site.siteMetadata.title}
            slogan={data.site.siteMetadata.slogan}
            logo={data.imageOne.childImageSharp.fixed}
          />

          <div className={classes.root}>
            <main>
              {children}
            </main>
          </div>

          <Footer />

        </>
      )}
    />
  )
}

export default withStyles(styles)(Layout);
