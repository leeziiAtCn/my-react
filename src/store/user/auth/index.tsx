import {observable, action} from 'mobx'

class Auth {

  @observable usrId = 20

  @action login  ()  {
    console.log(this.usrId)
  }
}

export default new Auth()