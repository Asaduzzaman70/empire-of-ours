import { useContext, useState } from "react";
import { CreateContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const { user, upProfile } = useContext(CreateContext)
    const [showEditSaveButton, setShowEditSaveButton] = useState(false);
    console.log(user);


    const handleFormSubmit = e => {
        e.preventDefault();
        if (showEditSaveButton) {
            const form = new FormData(e.currentTarget);
            const name = form.get('name');
            const photoUrl = form.get('photoUrl')
            upProfile(name, photoUrl)
        }
    }

    return (
        <div className="container mx-auto my-10 p-5">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="text-center">
                    <div className="hero h-60 w-60 rounded-full border-4 border-[#8d98ff] shadow-2xl bg-cover bg-no-repeat bg-center inline-block" style={{ backgroundImage: `url(${user?.photoURL})` }}>
                    </div>
                    <div className="mt-6">
                        <h1 className="text-5xl rajdhani font-bold text-[#7280fa]">{user?.displayName}</h1>
                        <p className="roboto mt-3 text-2xl font-light text-gray-500 border-2 inline-block rounded-3xl py-1 px-3">{user?.email}</p>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleFormSubmit}>
                        {/* Name */}
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text text-xl font-bold roboto text-white lg:text-gray-600">Name</span>
                            </label>
                            {
                                showEditSaveButton ?
                                    <input name="name" type="text" placeholder="Enter Your name" className="input input-bordered" required />
                                    : <h1 className="roboto text-2xl">{user?.displayName}</h1>
                            }
                        </div>
                        {/* Photo Url */}
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text text-xl font-bold roboto text-white lg:text-gray-600">Photo URL</span>
                            </label>
                            {
                                showEditSaveButton ?
                                    <input name="photoUrl" type="text" placeholder="Past Your Photo URL" className="input input-bordered" required />
                                    : <h1 className="roboto">{user?.photoURL}</h1>
                            }
                        </div>
                        {/* Submit */}
                        <div className="form-control mt-14 text-center">
                            {showEditSaveButton ?

                                <button type="submit" className="
                            bg-[#8D99FF] text-white py-3 z-0 border-2 border-transparent rounded-md
                            transition duration-300
                            hover:bg-transparent lg:hover:text-[#8D99FF] hover:border-2 hover:border-[#8D99FF]
                            ">
                                    Save
                                </button>
                                : <button type="button" onClick={() => setShowEditSaveButton(!showEditSaveButton)} className="
                            bg-[#8D99FF] text-white py-3 z-0 border-2 border-transparent rounded-md
                            transition duration-300
                            hover:bg-transparent lg:hover:text-[#8D99FF] hover:border-2 hover:border-[#8D99FF]
                            ">
                                    Edit
                                </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;