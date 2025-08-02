import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {index: true, element: <Home />},
            //other routes having header and footer....
        ]
    },
    {
        path: "/auth",
        element: <Auth />
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router