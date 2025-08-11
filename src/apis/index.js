import Axios from "./axios"

export const getCategories = () => Axios.get("/category/all-categories") 