import React, { Component } from 'react'

export default class Income extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tabs: [
        {title: 'First Tab'},
        {title: 'Second Tab'}
      ]
    }
  }

  componentWillMount () {
    fetch('http://127.0.0.1:7001/', {
      method: 'GET'
    }).then(res => {
      console.log(res)
    })
  }

  render () {
    return (
      <div>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>  <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>  <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>  <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>  <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
        <p>收入</p>
      </div>
    )
  }
}
