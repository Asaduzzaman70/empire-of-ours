import { useContext } from "react";
import { CreateContext } from "../../Provider/AuthProvider";

const LogIn = () => {
    const { login } = useContext(CreateContext)

    // Form submit
    const handleFormSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        // login import in authProvider
        login(email, password)
            .then(() => {
                alert('SuccessFull');
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Welcome to Empire Of Ours Realty Login</h1>
                    <p className="py-6 text-center">
                        Unlock access to exclusive features and personalized services by logging in to your Empire Of Ours Realty account. Whether you're a property owner, investor, or tenant, your login credentials grant you entry to a world of premier commercial real estate opportunities. Join our community today and take control of your real estate journey with Empire Of Ours.
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleFormSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;