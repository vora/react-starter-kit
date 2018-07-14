import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../routes'
import { injectGlobal } from 'styled-components'

injectGlobal`
  html, body, main, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

export default App
