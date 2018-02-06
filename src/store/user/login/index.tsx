import { observable, action } from 'mobx'
import { Toast } from 'antd-mobile'

class Login {

  @observable account: string
  @observable password: string
  @observable accountError: boolean = false
  @observable passwordError: boolean = false
  @observable extraFlag: boolean = false

  @action onLogin () {
    console.log(this.account)
    console.log(this.password)
  }

  @action togglePassword () {
    this.extraFlag = ! this.extraFlag
  }

  @action onAccountChange (value: string) {
    if (value.replace(/\s/g, '').length < 11) {
      this.accountError = true
    } else {
      this.accountError = false
    }
    this.account = value
  }

  @action onPasswordChange (value: string) {
    this.password = value
  }

  @action onErrorClick (flag: boolean) {
    if (this.accountError) {
      Toast.info(flag ? '账号输入错误' : '密码输入错误')
    }
  }

}

export default new Login()