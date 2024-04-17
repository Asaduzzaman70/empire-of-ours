import { useLoaderData } from "react-router-dom";
import DataCard from "../dataCard/DataCard";
import 'animate.css';


const CardSection = () => {
    const loadPropertyData = useLoaderData();


    return (
        <div className="bg-gray-100 py-28 container mx-auto">
            <div className="text-center">
                <p className='overlay text-9xl rajdhani font-bold text-gray-200'>HOT</p>
                <div className="-mt-24 animate__animated animate__fadeInUp">
                    <p className="text-lg text-gray-500 rajdhani">DETROIT LISTINGS</p>
                    <h1 className="text-5xl">LATEST PROPERTIES</h1>
                </div>
            </div>
            {/* Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-20">
                {
                    loadPropertyData.slice(0, 9).map(property => <DataCard property={property} key={property.id}></DataCard>)
                }
            </div>
        </div>
    );
};

export default CardSection;