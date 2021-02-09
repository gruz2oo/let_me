import React, { Fragment } from 'react'
import { Switch } from 'react-router-dom'
import PrivateLayout from './layouts/PrivateLayout/'
import PublicRouteComponent from './layouts/PublicLayout/'
import DashboardPage from './pages/DashboardPage'
import ResultPage from './pages/ResultPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

const App = () => (
  <Fragment>
    <Switch>
      <PublicRouteComponent exact path='/login' component={LoginPage} />
      <PublicRouteComponent exact path='/signup' component={SignUpPage} />
      <PrivateLayout exact path='/' component={DashboardPage} />
      <PrivateLayout exact path='/result' component={ResultPage} />
    </Switch>
  </Fragment>
)

export default App