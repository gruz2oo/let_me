/* eslint-disable import/no-anonymous-default-export */
import Button from 'antd/lib/button/button'
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

export default class extends Component {
  constructor(props) {
    super(props)
    props.checkStatusCurrentUser()
  }

  logout = () => {
    const { logoutUserPost } = this.props
    logoutUserPost()
  }
  
  render () {
    const { isAuthenticated } = this.props
    const isFetching = false
    // eslint-disable-next-line react/prop-types
    const { component: Component, ...rest } = this.props
    return isAuthenticated && !isFetching
      ? <Route {...rest} render={props => (
          <div>
            <Button type='link' onClick={this.logout}>Logout</Button>
            <Component {...props} />
          </div>
      )}
      />
      : <Redirect to='/login' />
  }
}
