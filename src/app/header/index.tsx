import * as React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import styles from './index.less'
export default class Header extends React.Component {
  render () {
    return (
      <NavBar
        className={styles.header}
        mode="dark"
        icon={<Icon type='left'/>}
      >NavBar</NavBar>
    )
  }
}