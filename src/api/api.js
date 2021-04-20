import axios from 'axios';


const instance = axios.create({
  withCredentials: true,
  baseURL: "https://run.mocky.io/v3/769972bd-b240-4e45-b409-69898c096b8d",
  
});


export const usersAPI = {
  getItems() {
    return instance.get()
      .then((response) => {
        // console.log(response)
        // console.log(response.data)
        return response.data;
      });
  }
};