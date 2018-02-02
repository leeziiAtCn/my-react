/**
 * Created: leezii
 * Date: 2018/2/2
 * Time: 15:00
 */
import { observable, action } from 'mobx'

class User {
  @observable b = 30
  @observable currentUser

  @action fun = () => {
    console.log(this.b++)
  }
}

export default new User()