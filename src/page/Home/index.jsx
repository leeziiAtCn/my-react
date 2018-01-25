import React, { Component } from 'react'
import { Button } from 'antd-mobile'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      str: +new Date()
    }
  }

  handleClick = () => {
    this.setState({
      str: +new Date()
    })
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <span className='text'>{this.state.str}</span>
        <Button type='primary' onClick={this.handleClick}>确定</Button>
      </div>
    )
  }
}
