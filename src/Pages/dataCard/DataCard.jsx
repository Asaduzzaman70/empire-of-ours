import { NavLink } from "react-router-dom";
import { LiaExpandArrowsAltSolid } from "react-icons/lia";
import 'animate.css';
import { FaMapLocation } from "react-icons/fa6";


const DataCard = ({ property }) => {
    const { image, title, price, description, area, id, segmentName, status, location } = property;

    return (
        <div>
            <div className="rounded-xl shadow-2xl p-8 animate__animated animate__fadeInUp">
                <div className="bg-no-repeat bg-cover bg-bottom h-72 w-full rounded-xl" style={{ backgroundImage: `url(${image})` }}></div>
                <div>
                    <p className="roboto text-xl mt-4 text-gray-600 font-medium">{segmentName}</p>
                    <h1 className="roboto text-3xl font-bold hover:text-[#8D99FF] transition duration-300">{title}</h1>
                    <p className="roboto my-4 rounded-lg text-[#7c89fc] border border-[#7c89fc] text-sm inline-block px-3 py-1">Property Id: {id}</p>
                    <p className="roboto text-lg text-[#8D99FF] transition duration-300 hover:text-[#7c89fc]">Form $ {price} per month</p>
                    <p className="roboto text-lg text-gray-600 mt-6">{description.slice(0, 45)}...</p>
                </div>
                <div className="roboto text-lg text-gray-600 mt-10 h-full mb-auto flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
                    <div className="flex gap-3 items-center">
                        <LiaExpandArrowsAltSolid />
                        <p>{area}<sup>2</sup></p>
                    </div>
                    <div className="flex items-center gap-3 text-lx roboto text-gray-600">
                        <FaMapLocation />
                        <p>{location}</p>
                    </div>
                </div>
                <div className="my-4">
                    <button className="uppercase btn border-2 border-[#7c89fc] px-5">{status}</button>
                </div>
                <div className="mt-6">
                    <NavLink to={`/details/${id}`}><button className="btn bg-[#7c89fc] roboto">View Property</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default DataCard;