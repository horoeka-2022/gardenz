import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './App'
import store from './store'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <Auth0Provider
    domain="gardenz.au.auth0.com"
    clientId="sF7Tf4GqnhENJ7l7gArp5c56ZFZ2WOcL"
    redirectUri={window.location.origin}
    audience="https://garden/nz/api"
  >
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </Auth0Provider>
)
