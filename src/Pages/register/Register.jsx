import { useContext, useState } from "react";
import { CreateContext } from "../../Provider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";




const Register = () => {
    const { register, upProfile } = useContext(CreateContext);
    const [showPassword, setShowPassword] = useState(false);

    // Form submit
    const handleFormSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photoUrl = form.get('photoUrl')

        if (password.length < 6) {
            return toast.error("Please enter a 6 digit password");;
        }
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            return toast.error('Please, enter password with special characters');
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error('Enter Password with a capital letters');
        }
        if (!/[a-z]/.test(password)) {
            return toast.error('Enter Lower Case Password');
        }

        // login import in authProvider
        register(email, password)
            .then((res) => {
                // Update
                upProfile(name, photoUrl)
                toast.success('SuccessFull Register, Welcome to E.O.O');
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
                toast.warning("Already Register this Email, You can Login");
            })
    }



    return (
        <div className="lg:bg-none bg-[url('https://i.ibb.co/YpqRm53/photo-1479839672679-a46483c0e7c8.jpg')]    bg-cover bg-center relative">
            <div className="absolute w-full h-full lg:w-0 bg-black lg:bg-none opacity-50 z-0"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center container mx-auto gap-9 lg:mt-7 p-5">
                <div className="z-10 p-6">
                    <div>
                        <h1 className="text-5xl font-semibold text-white lg:text-black rajdhani">Join Empire Of Ours Realty</h1>
                        <p className="text-white lg:text-gray-600 roboto mt-5 mb-9">Unlock limitless possibilities in commercial real estate. Join Empire Of Ours today and start building your legacy.</p>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        {/* Name */}
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text text-xl font-bold roboto text-white lg:text-gray-600">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter Your name" className="input input-bordered" required />
                        </div>
                        {/* Email */}
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text text-xl font-bold roboto text-white lg:text-gray-600">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        {/* Photo Url */}
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text text-xl font-bold roboto text-white lg:text-gray-600">Photo URL</span>
                            </label>
                            <input name="photoUrl" type="text" placeholder="Past Your Photo URL" className="input input-bordered" required />
                        </div>
                        {/* Password */}
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text text-xl font-bold roboto text-white lg:text-gray-600">Password</span>
                            </label>
                            <div className="relative">
                                <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Create Password" className="input input-bordered w-full" required />
                                {/* Show Password */}
                                <div className="absolute right-5 bottom-2">
                                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaRegEye /> : <FaRegEyeSlash />
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Submit */}
                        <div className="form-control mt-14">
                            <button className="
                            bg-[#8D99FF] text-white py-3 z-0 border-2 border-transparent rounded-md
                            transition duration-300
                            hover:bg-transparent lg:hover:text-[#8D99FF] hover:border-2 hover:border-[#8D99FF]
                            ">Register</button>
                        </div>
                    </form>
                    <div className="text-center mt-6">
                        <p className="roboto font-bold">You have an account. Please <NavLink className='underline text-[#8D99FF]' to='/login'>Login Now</NavLink></p>
                    </div>
                </div>
                <div className="lg:bg-[url('https://i.ibb.co/YpqRm53/photo-1479839672679-a46483c0e7c8.jpg')] h-full w-full bg-cover bg-center rounded-lg">
                    {/* Empty Object */}
                </div>
            </div>
        </div>
    );
};

export default Register;