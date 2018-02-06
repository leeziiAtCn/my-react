import * as  React from 'react'
import {Grid} from 'antd-mobile'
import styles from './index.less'

interface GridItem {
  icon: string;
  text: string;
}

import {inject, observer} from 'mobx-react'

@inject('app')
@observer
export default class HomeGrid extends React.Component<any, any> {
  render() {
    const data: Array<GridItem> = [
      {
        icon: 'icon-xiaoxi',
        text: '消息中心',
      },
      {
        icon: 'icon-gongju1',
        text: '汇票工具',
      },
      {
        icon: 'icon-bangzhu1',
        text: '帮助中心',
      },
      {
        icon: 'icon-yunying',
        text: '商铺推广',
      },
    ]
    const {assets} = this.props.app

    return (
        <Grid data={data}
              square={false}
              columnNum={2}
              renderItem={(dataItem: GridItem) => (
                  <div className={styles.gridItem}>
                    <p className={styles.itemContainer}><i
                        className={`${styles.icon} iconfont ${dataItem.icon}`}
                        style={{color: assets.color}}/></p>
                    <p className={styles.text}>{dataItem.text}</p>
                  </div>
              )}
        />
    )
  }
}