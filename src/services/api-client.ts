import axios from "axios";

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params:{
    key:'ff2eed2fd6684f43a368315ae403e7bb'
  }
})