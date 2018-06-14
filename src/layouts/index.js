import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavbarOnTop from '../components/Navbar'
import '../sass/all.sass'
import '../sass/navbar.sass'

const TemplateWrapper = ({ children }) => (

  <div className="container-full">
    <Helmet title="City English Project | Home">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />
      <link type="text/css" rel="stylesheet" href="//fast.fonts.net/cssapi/278cd7f5-226e-4ad9-83fb-59e4a7eb4131.css" />
      <link href="https://fonts.googleapis.com/css?family=Athiti|Chonburi|Kanit|Maitree|Prompt|Sriracha|Taviraj|Trirong|Josefin+Sans" rel="stylesheet" />
    </Helmet>
  	<NavbarOnTop />

    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;