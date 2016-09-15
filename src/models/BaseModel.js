import { observable, computed } from "mobx"
import uuid from "uuid"

export default class Recipe {
  // Model Attributes
  uuid = uuid.v4()
  @observable name = ""
  @observable type = ""
  @observable integer = 0
  @observable array = []
  @observable boolean = false
  // Reference
  store = null

  constructor(data={}, store) {
    Object.assign(this, data)
    this.store = store
  }

  @computed get visible() {
    return true
  }

  asJSON = ()=> {
    return {
      name: this.name,
    }
  }
}