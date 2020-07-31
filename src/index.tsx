import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import MainApplication from './components/MainApplication'
import './index.scss'

const App: React.FC = () => (
  <Router>
    <MainApplication />
  </Router>
)

render(<App />, document.getElementById('root'))
