import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const { id } = useParams();
    const id_int = parseInt(id);
    const propertyData = useLoaderData();

    const filterProperty = propertyData.filter(data => data.id === id_int);
    console.log(filterProperty[0]);

    const { image, title, price, description, area, location, facilities, status, segmentName } = filterProperty[0];

    console.log(facilities);
    return (
        <div className="relative flex flex-col justify-end items-center mb-14 p-4">
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
            </div>
            <div className="w-1/2 mx-auto bg-white -mt-11 grid grid-cols-2 p-6 rounded-xl shadow-2xl">
                <h1 className="rajdhani text-2xl text-gray-700 text-center"><span className="font-bold">Area:</span> {area}<sup>2</sup></h1>
                <h1 className="rajdhani text-2xl text-gray-700 text-center"><span className="font-bold">Location:</span> {location}</h1>
            </div>
            <div className="space-y-7 mt-10">
                <p className="rajdhani text-2xl">{segmentName}</p>
                <h1 className="rajdhani uppercase text-6xl font-semibold">{title}</h1>
                <p className="border-2 inline-block py-2 px-5 text-xl text-[#8d98ff] rounded-2xl uppercase border-[#8d98ff]">{status}</p>
                <p className="roboto text-2xl text-gray-500">{description}</p>
                <div className="mt-6">
                    <p className="text-3xl rajdhani mb-5">Facilities:</p>
                    {
                        facilities.map(data => <button className="bg-[#8d98ff] py-2 px-3 rounded-2xl mr-4 text-gray-100 border-4">{data}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CardDetails;