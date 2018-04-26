import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import './index.css'

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

ReactDOM.render(
  <App />,
  rootElement
)

export default true
