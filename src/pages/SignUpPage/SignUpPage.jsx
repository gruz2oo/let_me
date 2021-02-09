import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Input } from 'antd'
import { history } from '../../store'


class SignUpPage extends Component {
  handleSubmit = async (e) => {
    const { ...props } = this.props
    // e.preventDefault()
   try {
    await props.registrationNewUserPost(e)
    history.push('/')
   } catch (e) {

   }
    // console.log(e)
  }
  render () {
    return (
      <section id="sign-id">
              <h1>Не мешай!</h1>
              <div className="form-container">
                <h2>Добро пожаловать!</h2>
                <Form id="form" onFinish={this.handleSubmit}>
                  <Form.Item
                    name="email"
                    rules={[{ type: 'email' }]}
                  >
                    <Input placeholder="Email"/>
                  </Form.Item>
                  <Form.Item
                    name='number_rc'
                  >
                    <Input placeholder='Гос. номер авто'/>
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password  placeholder="Пароль"/>
                  </Form.Item>
                  <Form.Item
                    name="password_repeat"
                    // rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password  placeholder="Повторите пароль"/>
                  </Form.Item>
                  <Button htmlType="submit" id="submitBtn">Войти</Button>
                </Form>
              </div>
              <div className='bcg'>
                <img src={process.env.PUBLIC_URL + '/backgraund2.png'}/>
              </div>
            </section>
    )
  }
}

SignUpPage.propTypes = {
  // isFetching: PropTypes.bool
}

export default SignUpPage
