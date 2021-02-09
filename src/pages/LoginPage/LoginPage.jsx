import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Form, Input } from 'antd'
import { history } from '../../store'


class LoginPage extends Component {
  handleSubmit = async (e) => {
    const { ...props } = this.props
    // e.preventDefault()
   try {
    await props.loginUserPost(e)
    history.push('/')
   } catch (e) {

   }
    // console.log(e)
  }
  render () {
    return (
      <section id="login-id">
        <h1>Не мешай!</h1>
            <div className="form-container">
              <h2>С возвращением!</h2>
              <Form id="form" onFinish={this.handleSubmit}>
                <Form.Item
                    name="email"
                    rules={[{ type: 'email' }]}
                  >
                    <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password  placeholder="Пароль"/>
                </Form.Item>
                <div className="forgot">Забыл пароль?</div>
                <Button htmlType="submit" id="submitBtn">Войти</Button>
              </Form>
              <div className="sub">Еще нет аккаунта? <br/> <Link to='/signup'>Регистрируйся</Link></div>
            </div>
            <div className='bcg'>
              <img src={process.env.PUBLIC_URL + '/backgraund.png'}/>
            </div>
      </section>
    )
  }
}

LoginPage.propTypes = {
  // isFetching: PropTypes.bool
}

export default LoginPage
