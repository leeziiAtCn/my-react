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
    //path
    let path = this.props.location.pathname
    this.props.app.assets.setPath(path)
    //title
    const {meta} = this.props
    this.props.app.assets.changeTitle(meta.title)
    //footer

  }

  render() {
    const {component, app, meta, ...rest} = this.props
    return (
        <Route {...rest} component={component}/>
    )
  }
}

