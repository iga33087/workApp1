import axios from "axios"
let baseUrl="http://localhost:3000/"

export default {
  postMail(x) {
    return axios.post(baseUrl+"Mail",x).then(res=>res.data)
  }
}