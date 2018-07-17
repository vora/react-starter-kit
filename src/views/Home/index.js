import React from 'react'
import PropTypes from 'prop-types'

const Home = ({ homeText = 'Home' }) => <div>Welcome {homeText}</div>

Home.propTypes = {
  homeText: PropTypes.string
}

export default Home
