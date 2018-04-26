import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodoFormPage from './pages/TodoFormPage'
import MapPage from './pages/MapPage'

class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/form' component={TodoFormPage} />
        <Route exact path='/map' component={MapPage} />
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    )
  }
}

export default Routes
