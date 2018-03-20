import {action, observable} from 'mobx'

function ajax() {
  return Promise.resolve({
    a: 'abcd',
  })
}

class T {
  @observable test: string = 'tttt'

  @action
  async testMethods() {
    try {
      let a = await ajax()
      this.test = a.a
    }
    catch {
      console.log(2)
    }
  }
}

export default new T()