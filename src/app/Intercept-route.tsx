import * as React from 'react'

import {Route} from 'react-router-dom'
import {observer, inject} from 'mobx-react'

@inject('app')
@observer
export default class InterceptRoute extends React.Component<any, any> {
  constructor(props: any) {super(props)}

  componentWillMount() {
    this.init()
  }

  componentDidUpdate() {
    this.init()
  }

  /**
   * 路由初始化
   */
  init() {

  }

  render() {
    const {component, app, meta, ...rest} = this.props
    return (
        <Route {...rest} component={component}/>
    )
  }
}

