import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from './utils/ministore'
import { reducer, initialState } from './store'
import App from './components/App'

ReactDOM.render(
  <Provider reducer={reducer} initialState={initialState}>
    <App />
  </Provider>,
  document.getElementById('app')
)
