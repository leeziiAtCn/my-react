import {observable, action} from 'mobx'

class Assets {
  @observable title: string = '主页'
  @observable currentPath: string = '/home'
  @observable hiddenTab: boolean = false
  @observable color: string = ''

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
}

export default new Assets()