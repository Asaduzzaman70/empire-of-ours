import { useContext } from "react";
import { CreateContext } from "../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const Register = () => {
    const { register, logInWithMedia } = useContext(CreateContext);

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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Join Empire Of Ours Realty</h1>
                    <p className="py-6 text-center">
                        Unlock limitless possibilities in commercial real estate. Join Empire Of Ours today and start building your legacy.
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleFormSubmit}>
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter Your name" className="input input-bordered" required />
                        </div>
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        {/* Photo Url */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photoUrl" type="text" placeholder="Past Your Photo URL" className="input input-bordered" required />
                        </div>
                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        {/* Submit */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;