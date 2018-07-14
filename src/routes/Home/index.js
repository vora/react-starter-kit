import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text = styled.div`
  font-size: 1.5em;
  font-weight: 400;
`

const Home = ({ homeText = 'Home' }) => <Text>Welcome {homeText}</Text>

Home.propTypes = {
  homeText: PropTypes.string
}

export default Home
