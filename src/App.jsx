import { RouterProvider } from "react-router-dom"
import router from "./routes"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { ThemeContextProvider } from "./context/themeContext"

function App() {
  return (
    <>
      <Provider store = {store}>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </Provider>
    </>
  )
}

export default App
