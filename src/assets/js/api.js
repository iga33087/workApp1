import axios from "axios"
let baseUrl="http://220.135.96.47:81/"  //https://uclickapi.herokuapp.com/ http://220.135.96.47:81/

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