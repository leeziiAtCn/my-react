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
        <div className={styles.header} style={{background: assets.color}}>
          <NavBar
              className={styles.tab}
              onLeftClick={assets.historyBack.bind(assets, this.props.history)}
              icon={<Icon type='left'/>}
          >{assets.title} </NavBar>
        </div>
    )
  }
}

export default withRouter(Header)