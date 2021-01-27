import axios from "axios"
let baseUrl="https://uclickapi.herokuapp.com/"  //https://uclickapi.herokuapp.com/

export default {
  postMail(x) {
    return axios.post(baseUrl+"Mail",x).then(res=>res.data)
  },
  getArticle(x) {
    return axios.get(baseUrl+"Article?projectId="+x.projectId).then(res=>res.data)
  },
  getArticleById(x) {
    return axios.get(baseUrl+"ArticleById?id="+x).then(res=>res.data)
  }
}