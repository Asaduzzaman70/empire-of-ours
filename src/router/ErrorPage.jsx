import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    // console.error(error);

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-7xl font-extrabold">{error.status ? error.status : '404'}</h1>
                <p className="text-5xl font-bold mb-7">{error.statusText ? `Page ${error.statusText}`: 'Page Not Found'}</p>
                <Link to='/'>
                    <button>Home</button>
                </Link>
            </div>
        </div>
    );
};


export default ErrorPage;