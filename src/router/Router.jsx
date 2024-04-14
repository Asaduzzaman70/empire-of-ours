import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "./ErrorPage";
import LogIn from "../Pages/logIn/LogIn";
import Register from "../Pages/register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default router;