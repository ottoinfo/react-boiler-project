import api from "superagent"

export default class BaseApi {
  url = "/api"

  fetch = ()=> {
    return api.get(this.url).accept("application/json")
  }
}