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

  init() {
    const {assets} = this.props.app
    //path
    let path = this.props.location.pathname
    assets.setPath(path)
    //title
    const {meta} = this.props
    assets.changeTitle(meta.title)
    //footer
    meta.hiddenTab = meta.hiddenTab || false
    assets.setTab(meta.hiddenTab)
  }

  render() {
    const {component, app, meta, ...rest} = this.props
    return (
        <Route {...rest} component={component}/>
    )
  }
}

