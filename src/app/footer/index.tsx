import * as React from 'react'
import styles from './index.less'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

class Footer extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      selectedTab: '/home'
    }
  }

  changeTabs =(path: string, index: number)=> {
    this.setState({
      selectedTab: path
    })
    this.props.history.push(path)
  }

  render () {
    const tabs = [
      {
        text: '主页',
        icon: 'icon-shouyeweixuanzhong',
        activeIcon: 'icon-shouye',
        activeColor: '',
        path: '/home',
        active: true
      },
      {
        text: '交易',
        icon: 'icon-jiaoyiweixuanzhong',
        activeIcon: 'icon-jiaoyi',
        activeColor: '',
        path: '/trans',
        active: false
      },
      {
        text: '票源',
        icon: 'icon-piaoyuanweixuanzhong',
        activeIcon: 'icon-piaoyuan',
        activeColor: '',
        path: '/bill',
        active: false
      },
      {
        text: '我的',
        icon: 'icon-zhanghuweixuanzhong',
        activeIcon: 'icon-zhanghu',
        activeColor: '',
        path: '/mine',
        active: false
      }
    ]
    return (
      <div className={styles.footer}>
        <TabBar
          unselectedTintColor='#949494'
          tintColor='#ff6701'
          barTintColor='white'
        >
          {
            tabs.map((tab, index) => (
              <TabBar.Item
                title={tab.text}
                key={tab.path}
                icon={<div className={`${styles.iconfont} iconfont ${tab.icon}`}/>}
                selectedIcon={<div className={`${styles.iconfont} iconfont ${tab.activeIcon}`}/>}
                selected={this.state.selectedTab === tab.path}
                 onPress={this.changeTabs.bind(this, tab.path, index)}
              />
            ))
          }
        </TabBar>
      </div>
    )
  }
}
export default withRouter(Footer)