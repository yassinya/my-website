import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import thumbnail from '../images/thumbnail.png'

const SEO = ({ title, description, image, article, pathname }) => {
    const { location } = useLocation()
    const { site } = useStaticQuery(query)
    
    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        twitterUsername,
      } = site.siteMetadata
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}`,
      }
      return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.url+thumbnail} />
          {seo.url && <meta property="og:url" content={seo.url} />}
          {(article ? true : null) && <meta property="og:type" content="article" />}
          {seo.title && <meta property="og:title" content={seo.title} />}
          {seo.description && (
            <meta property="og:description" content={seo.description} />
          )}
          {<meta property="og:image" content={seo.url+thumbnail} />}
          <meta name="twitter:card" content="summary_large_image" />
          {twitterUsername && (
            <meta name="twitter:creator" content={twitterUsername} />
          )}
          {seo.title && <meta name="twitter:title" content={seo.title} />}
          {seo.description && (
            <meta name="twitter:description" content={seo.description} />
          )}
          {<meta name="twitter:image" content={seo.url+thumbnail} />}
        </Helmet>
      )
  }

export default SEO
const query = graphql`
query SEO {
    site {
    siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        twitterUsername
    }
    }
}
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  pathname: PropTypes.string
}

SEO.defaultProps = {
  title: 'Yassin Youssouf - Full Stack Web Developer',
  description: 'Hello, I am Yassin Youssouf and I am full stack web developper from Djibouti',
  image: null,
  article: false,
  pathname: null,
}