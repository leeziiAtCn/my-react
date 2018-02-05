import * as React from 'react'
import styles from './index.less'

export default class homeInfo extends React.Component {
  render () {
    return (
      <div className={styles.info}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="https://oddnhrkuu.qnssl.com/fd795d2a-f190-4dd5-adf8-ed3009e50042.png"
               alt="logo"/>
        </div>
        <span className={styles.infoText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto, debitis deleniti dolore eligendi
          eveniet facilis iste laudantium libero minus molestiae nesciunt odit qui recusandae vel. Deleniti excepturi
          nihil veniam!
        </span>
      </div>
    )
  }
}