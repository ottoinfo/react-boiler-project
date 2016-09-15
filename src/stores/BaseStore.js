import { observable, computed, action } from "mobx"
import BaseApi from "../services/BaseApi"
import BaseModel from "../models/BaseModel"

export default class BaseStore {
  @observable isLoaded = false
  @observable items = []
  @observable errors = {}
  @observable pendingRequest = 0

  constructor() {
    this.api = new BaseApi()
  }

  setup(args) {
    Object.assign(this, args)
  }

  @computed get isLoading() {
    return this.pendingRequest > 0
  }

  @computed get getItems() {
    return this.items.toJS()
  }

  createModel = (data={}) => {
    return new BaseModel(data, this)
  }

  @action
  fetch() {
    this.pendingRequest++
    this.api.fetch()
    .end(action("action-callback", (err, res) => {
      if (err) {
        console.log("action-callback", err)
        throw new Error("API Callback Error")
      }
      this.pendingRequest--
      this.items = res.body.map(this.createModel)
    }))
  }
}

const singleton = new BaseStore()
export default singleton