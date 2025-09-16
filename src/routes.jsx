import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SpecificRest from "./pages/SpecificRest";
import RestLayout from "./layouts/RestLayout";


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
        path: "/app",
        element: <RestLayout />,
        children: [
            {path: "restaurant/:name", element: <SpecificRest />}
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