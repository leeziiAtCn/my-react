import React from 'react'
import { Route } from 'react-router-dom'

export default class InterceptRoute extends React.Component {
  constructor (props) {
    super(props)
    console.log('constructor')
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  componentWillReceiveProps () {
    console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  render () {
    const {component, ...rest} = this.props
    console.log('render')
    return (
      <Route {...rest} component={component} />
    )
  }
}
