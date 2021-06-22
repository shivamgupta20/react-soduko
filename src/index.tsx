import React from 'react'
import ReactDOM from 'react-dom'
import { unregister } from './core/service-worker'
import { GlobalStyles } from './styles'

ReactDOM.render(
  <>
    <GlobalStyles />
    <div>Hello World!</div>
  </>,
  document.getElementById('root')
)

unregister()
