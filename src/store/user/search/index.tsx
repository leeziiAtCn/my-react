import {observable, action} from 'mobx'

class Search {
  @observable a = 20

  @action fn() {
    console.log(this.a)
  }
}

export default new Search()