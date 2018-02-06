import {observable, action} from 'mobx'

class Assets {
  @observable title: string = '主页'
  @observable currentPath: string = '/home'
  @observable hiddenTab: boolean = false
  @observable color: string = '#0e88eb'
  @observable userLogo: string = 'https://oddnhrkuu.qnssl.com/fd795d2a-f190-4dd5-adf8-ed3009e50042.png'

  @action setPath(path: string) {
    this.currentPath = path
  }

  @action changePath(props: any, path: string) {
    props.history.push(path)
  }

  @action historyBack(history: any) {
    history.goBack(-1)
  }

  @action changeTitle(title: string) {
    this.title = title
  }

  @action setTab(flag: boolean) {
    this.hiddenTab = flag
  }
}

export default new Assets()