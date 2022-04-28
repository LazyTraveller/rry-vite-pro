import { makeAutoObservable } from 'mobx'

class UserStore {
  constructor() {
    makeAutoObservable(this)
    this.init()
  }

  async init() {}
}

const user = new UserStore()
export default user
