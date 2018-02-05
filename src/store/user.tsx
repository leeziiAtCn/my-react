import { observable, action } from 'mobx'

class User {
  @observable a = 20

  @action add = () => {
    this.a++
  }
}

export default new User()