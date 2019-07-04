import Request from "./Request";
import URI from "../config/Uri"

class Resource {
  async getTask(){
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
    }
    let res = await Request.get(URI.RESOURCE + URI.ENDPOINT_GET_TASK, header);
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res.data)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  async createTask(body){
    const header = {
      "Authorization": "",
    }

    let bodyForm = Object.keys(body).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(body[key])).join('&');

    let res = await Request.post(URI.RESOURCE + URI.ENDPOINT_CREATE_TASK, header, bodyForm);
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }
} 

export default new Resource();