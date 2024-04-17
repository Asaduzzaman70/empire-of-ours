import { NavLink } from "react-router-dom";
import { LiaExpandArrowsAltSolid } from "react-icons/lia";
import 'animate.css';


const DataCard = ({ property }) => {
    const { image, title, price, description, area } = property;

    return (
        <div>
            <div className="rounded-xl shadow-2xl p-8 animate__animated animate__fadeInUp">
                <div className="bg-no-repeat bg-cover bg-bottom h-72 w-full rounded-xl" style={{ backgroundImage: `url(${image})` }}></div>
                <div>
                    <h1 className="roboto text-3xl font-bold hover:text-[#8D99FF] transition duration-300 mt-8">{title}</h1>
                    <p className="roboto text-lg text-[#8D99FF] transition duration-300 hover:text-[#7c89fc]">Form $ {price} per month</p>
                    <p className="roboto text-lg text-gray-600 mt-6">{description.slice(0, 45)}...</p>
                </div>
                <div className="roboto text-lg text-gray-600 mt-10 h-full mb-auto flex gap-3 items-center">
                    <LiaExpandArrowsAltSolid />
                    <p>{area}<sup>2</sup></p>
                </div>
                <div className="mt-6">
                    <NavLink to='/details'><button className="btn bg-[#7c89fc] roboto">View Property</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default DataCard;