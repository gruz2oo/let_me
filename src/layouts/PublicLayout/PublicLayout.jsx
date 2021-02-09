/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

export default class extends Component {
  render () {
    const { isAuthenticated } = this.props
    console.log(isAuthenticated)
    // eslint-disable-next-line react/prop-types
    const { component: Component, ...rest } = this.props
    return !isAuthenticated
    ? <Route {...rest} render={props => (
        <Component {...props} />
    )}
    />
    : <Redirect to='/' />
  }
}
