import {observable, action} from 'mobx'

class Assets {
  @observable title: string = '主页'

  @action historyBack(history: any) {
    history.goBack(-1)
  }
}

export default new Assets()