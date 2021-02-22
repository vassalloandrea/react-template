import React from 'react'
import ReactDOM from 'react-dom'

import webVitals from './libs/web-vitals'

import App from './app'

ReactDOM.render(<App />, document.getElementById('root'))

webVitals(console.log)
