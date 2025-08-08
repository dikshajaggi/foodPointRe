import { RouterProvider } from "react-router-dom"
import router from "./routes"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import {ThemeContextProvider} from "./context/themeContext.jsx"

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Provider store = {store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeContextProvider>
    </>
  )
}

export default App
