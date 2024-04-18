import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CreateContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const { logOut, user } = useContext(CreateContext);

    console.log(user);

    const listItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/extra'>F&Q</NavLink></li>
    </>

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully log out')
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <div className="shadow-xl">
            <div className="navbar bg-base-100 container z-10 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {listItem}
                        </ul>
                    </div>
                    <a className="text-xl rajdhani font-extrabold">Empire <span className="text-[#8D99FF]">Of Ours</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {listItem}
                    </ul>
                </div>
                <div className="navbar-end items-center">
                    {/* Avater */}
                    <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user ?
                                    user?.photoURL
                                    : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                } />
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            user ?
                                <NavLink to='/profile'><button className="btn">Profile</button></NavLink>
                                : <NavLink to='/register'><button className="btn btn-ghost">Register</button></NavLink>
                        }
                        {
                            user ?
                                <button onClick={handleSignOut} className="btn btn-ghost">Log Out</button>
                                : <NavLink to='/login'><button className="btn btn-ghost">Login</button></NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;