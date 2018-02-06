import * as React from 'react'
import styles from './index.less'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import {inject, observer} from 'mobx-react'

@inject('app')
@observer
class Footer extends React.Component<any, any> {

  render() {
    const {assets} = this.props.app
    console.log(assets)
    const tabs = [
      {
        text: '主页',
        icon: 'icon-shouyeweixuanzhong',
        activeIcon: 'icon-shouye',
        activeColor: '',
        path: '/home',
        active: true,
      },
      {
        text: '交易',
        icon: 'icon-jiaoyiweixuanzhong',
        activeIcon: 'icon-jiaoyi',
        activeColor: '',
        path: '/trans',
        active: false,
      },
      {
        text: '票源',
        icon: 'icon-piaoyuanweixuanzhong',
        activeIcon: 'icon-piaoyuan',
        activeColor: '',
        path: '/bill',
        active: false,
      },
      {
        text: '我的',
        icon: 'icon-zhanghuweixuanzhong',
        activeIcon: 'icon-zhanghu',
        activeColor: '',
        path: '/mine',
        active: false,
      },
    ]
    return (
        <div className={styles.footer} hidden={assets.hiddenTab}>
          <TabBar
              unselectedTintColor='#949494'
              tintColor={assets.color}
              barTintColor='white'
          >
            {
              tabs.map((tab, index) => (
                  <TabBar.Item
                      title={tab.text}
                      key={tab.path}
                      icon={<div
                          className={`${styles.iconfont} iconfont ${tab.icon}`}/>}
                      selectedIcon={<div
                          className={`${styles.iconfont} iconfont ${tab.activeIcon}`}/>}
                      selected={assets.currentPath === tab.path}
                      onPress={assets.changePath.bind(assets, this.props,
                          tab.path)}
                  />
              ))
            }
          </TabBar>
        </div>
    )
  }
}

export default withRouter(Footer)