import React from 'react'

import '../styles/global.css'
import SEO from './seo';

const Layout = ({children}) => {
  return (
    <div className="container">
      <SEO/>
      {children}
    </div>
  )
}

export default Layout