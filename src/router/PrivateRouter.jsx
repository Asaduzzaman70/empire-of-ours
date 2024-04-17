import { useContext } from "react";
import { CreateContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(CreateContext);
    const location = useLocation();
    console.log(location);

    if(loader){
        return <div className="h-screen flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>;
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;