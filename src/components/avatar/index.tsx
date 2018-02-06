import * as React from 'react'
import styles from './index.less'
import {inject, observer} from 'mobx-react'

@inject('app')
@observer
export default class Avatar extends React.Component<any, any> {
  render() {
    return (
        <div className={styles.avatar}>
          <img className={styles.image} src={this.props.app.assets.userLogo} alt=""/>
        </div>
    )
  }
}