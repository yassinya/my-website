import React from 'react'

import '../styles/global.css'

const Layout = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

export default Layout