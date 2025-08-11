import axios from "axios";

const apiURL = "http://localhost:8080/api"

const _axios = axios.create({ baseURL: apiURL })

export default _axios
