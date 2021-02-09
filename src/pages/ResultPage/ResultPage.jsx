import { Avatar, List } from 'antd'
import React, { Component } from 'react'


class ResultPage extends Component {

  render () {
    const { cars } = this.props
    console.log(cars)
    return (
      <section id="dashboard-id">
        <List dataSource={cars} renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.email || item.uid}
              description={item.number_rc}
            />
          </List.Item>
        )}>
          
        </List>
      </section>
    )
  }
}

ResultPage.propTypes = {
  // isFetching: PropTypes.bool
}

export default ResultPage
