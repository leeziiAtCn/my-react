import * as React from 'react'
import styles from './index.less'

export default class HomePanel extends React.Component {
  render () {
    return (
      <div className={styles.panel}>
        <p className={styles.text}>电票累计在线交易</p>
        <p className={styles.count}>378912387.21元</p>
        <p><span className={styles.btn}>立即出票</span></p>
      </div>
    )
  }
}