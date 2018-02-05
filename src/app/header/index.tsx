import * as React from 'react'
import {NavBar, Icon} from 'antd-mobile'
import styles from './index.less'
import {withRouter} from 'react-router'
import {inject, observer} from 'mobx-react'

@inject('app')
@observer
class Header extends React.Component<any, any> {
  render() {
    const {assets} = this.props.app
    return (
        <NavBar
            className={styles.header}
            mode="dark"
            onLeftClick={assets.historyBack.bind(assets, this.props.history)}
            icon={<Icon type='left'/>}
        >{assets.title}</NavBar>
    )
  }
}


export default withRouter(Header)