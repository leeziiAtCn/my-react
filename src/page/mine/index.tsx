import * as React from 'react'
export default class Mine extends React.Component {
  componentWillMount(){
    console.log(1)

  }
  componentWillUnmount(){
    console.log(2)
  }
  render(){
    return (
      <div>mine</div>
    )
  }
}