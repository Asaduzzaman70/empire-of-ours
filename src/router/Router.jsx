import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "./ErrorPage";
import LogIn from "../Pages/logIn/LogIn";
import Register from "../Pages/register/Register";
import Home from "../home/Home";
import CardDetails from "../Pages/cardDetails/CardDetails";
import PrivateRoute from "./PrivateRouter";
import ExtraRoute from "../ExtraRoute/ExtraRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('/propertyData.json'),
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <LogIn/>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><CardDetails/></PrivateRoute>,
                loader: () => fetch('/propertyData.json'),
            },
            {
                path: '/extra',
                element: <PrivateRoute><ExtraRoute></ExtraRoute></PrivateRoute>
            }
        ]
    }
])

export default router;