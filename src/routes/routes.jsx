import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import { history } from '../helpers'
import { Home, About } from '../containers'

export const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='*' component={Home} />
      </Switch>
    </Router>
  )
}
