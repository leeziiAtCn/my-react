import {observable, action} from 'mobx'
import {Toast} from 'antd-mobile'

class Login {

  @observable account: string
  @observable password: string
  @observable accountError: boolean = false

  @action onLogin() {
    console.log(this.account)
    console.log(this.password)
  }

  @action onAccountChange(value: string) {
    if (value.replace(/\s/g, '').length < 11) {
      this.accountError = true
    } else {
      this.accountError = false
    }
    this.account = value
  }

  @action onAccountErrorClick() {
    if (this.accountError) {
      Toast.info('账号输入错误')
    }
  }
}

export default new Login()