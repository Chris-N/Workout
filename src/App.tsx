import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Everyday } from './components/Everyday'
import Header from './components/Header'
import Home from './components/Home'

export const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/strength">
            <Everyday />
          </Route>
          <Route path="/isometric">
            <Everyday />
          </Route>
          <Route path="/fullmass">
            <Everyday />
          </Route>
          <Route path="/uppermass">
            <Everyday />
          </Route>
          <Route path="/lowermass">
            <Everyday />
          </Route>
          <Route path="/dynamic">
            <Everyday />
          </Route>
          <Route path="/pnf">
            <Everyday />
          </Route>
          <Route path="/relaxed">
            <Everyday />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
