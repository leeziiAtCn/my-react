import React from 'react'
import TestProps from './test.props'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      a: 2
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    console.log(nextProps)
    console.log(prevState)
    return prevState
  }

  componentDidMount () {

  }

  render () {
    return (
      <div>
        {this.state.a}
        <TestProps title='props title'/>
        <TestProps />
      </div>
    )
  }
}
