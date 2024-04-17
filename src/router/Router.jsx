import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "./ErrorPage";
import LogIn from "../Pages/logIn/LogIn";
import Register from "../Pages/register/Register";
import Home from "../home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <LogIn/>
            }
        ]
    }
])

export default router;