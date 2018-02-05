import * as React from 'react'
import HomeCarousel from './carousel'
import HomeGrid from './grid'
import HomeInfo from './info'
import HomePanel from './panel'

export default class Home extends React.Component<any, any> {

  render () {
    return (
      <div>
        <HomeCarousel/>
        <HomeInfo/>
        <HomePanel/>
        <HomeGrid/>
      </div>
    )
  }
}