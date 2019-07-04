class Request{
  async get(url, header = {}){
    let data = await fetch(url, {
      headers: header,
    })
    .then((response) => response.json())
    .then(responseJson => {
      return {data: responseJson};
    }).catch((error) =>{
      return {error}
    })

    return data;
  }

  async post(url, header = {}, body = {}){
    let data = await fetch(url, {
      method: 'POST',
      headers: header,
      body: body,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return {responseJson};
    }).catch((error) => {
      return {error}
    });

    return data;
  }
  
  async put(url, header = {}, body = {}){
    let data = await fetch(url, {
      method: 'PUT',
      headers: header,
      body: body,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return {responseJson};
    }).catch((error) => {
      return {error}
    });

    return data;
  }
  
  async delete(url, header = {}){
    let data = await fetch(url, {
      method: 'DELETE',
      headers: header
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return {responseJson};
    }).catch((error) => {
      return {error}
    });

    return data;
  }
}

export default new Request();