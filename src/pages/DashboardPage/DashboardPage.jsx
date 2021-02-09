import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'
import Button from 'antd/lib/button/button'
import { history } from '../../store'


class DashboardPage extends Component {

  handleSubmit = async (e) => {
    const { ...props } = this.props
    // e.preventDefault()
   try {
    await props.getDataByCar(e)
    history.push('/result')
   } catch (e) {
   }
    // console.log(e)
  }

  render () {
    return (
      <section id="dashboard-id">
            <div className="form-container">
              <h2>Сфотографируй или введи вручную гос. номер авто</h2>
              <div className='containerImg'>
                <img src={process.env.PUBLIC_URL + '/one_camera.png'}/>
              </div>
              <Form id="form" onFinish={this.handleSubmit}>
                  <Form.Item
                    name="number_rc"
                  >
                    <Input placeholder="Номер авто"/>
                  </Form.Item>
                <Button htmlType="submit" id="submitBtn">Не мешай!</Button>
              </Form>
            </div>
      </section>
    )
  }
}

DashboardPage.propTypes = {
  // isFetching: PropTypes.bool
}

export default DashboardPage
