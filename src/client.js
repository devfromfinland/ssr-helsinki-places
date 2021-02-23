import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// TODO: implement front-end caching for client.js with possibility for updating
// consider service worker: CACHE_WHILE_VALIDATE

ReactDOM.hydrate(<App {...window.APP_CONTEXT} />, document.getElementById('root'))
