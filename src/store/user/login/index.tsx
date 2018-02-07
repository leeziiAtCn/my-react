import {observable, action} from 'mobx'
import {Toast} from 'antd-mobile'
import {Md5} from 'ts-md5/dist/md5'
import axios from '../../../static/typescript/axios'

class Login {

  @observable account: string
  @observable password: string
  @observable accountError: boolean = false
  @observable passwordError: boolean = false
  @observable extraFlag: boolean = false

  @action
  async onLogin() {

    let data = await axios.post('http://www.wsxqt.com/user/h5/login', {
      account: this.account.replace(/\s+/g, ''),
      domain: 'dev',
      loginType: 1,
      password: Md5.hashStr(this.password).toString().toLocaleUpperCase(),
    })
    if (data.code === 1) {

    }
  }

  @action togglePassword() {
    this.extraFlag = !this.extraFlag
  }

  @action onAccountChange(value: string) {
    if (value.replace(/\s/g, '').length < 11) {
      this.accountError = true
    } else {
      this.accountError = false
    }
    this.account = value
  }

  @action onPasswordChange(value: string) {
    this.password = value
  }

  @action onErrorClick(flag: boolean) {
    if (this.accountError) {
      Toast.info(flag ? '账号输入错误' : '密码输入错误')
    }
  }

}

export default new Login()