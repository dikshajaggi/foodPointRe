import Axios from "./axios"

export const getCategories = () => Axios.get("/category/all") 

// --------------------------------------------restaurants--------------------------------------------
export const getRestaurants = () => Axios.get("/restaurant/all")
export const getSingleRestaurant = (rest_name) => Axios.get(`restaurant/specific/${rest_name}`)

// --------------------------------------------cart items--------------------------------------------
export const getCart = () => Axios.get("/cart/")
export const addItem = (data) => Axios.post("/cart/add", data)
export const incItemQty = (item_id) => Axios.patch(`/cart/incQty/${item_id}`)
export const decItemQty = (item_id) => Axios.patch(`/cart/decQty/${item_id}`)
export const clearCart = () => Axios.delete("/cart/clear")

// --------------------------------------------menu-items--------------------------------------------
export const allMenuItems = (data) => Axios.get("/menuItems/all", data)

// --------------------------------------------search--------------------------------------------
export const search = (searchValue) => Axios.get("/search", searchValue)