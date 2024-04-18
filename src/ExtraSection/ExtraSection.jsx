import { FaBuilding, FaChalkboard, FaDollarSign, FaHandshake, FaKey, FaPlay, FaSpaceAwesome } from "react-icons/fa6";

const ExtraSection = () => {
    return (
        <div className="container mx-auto py-36">
            <div className="text-center">
                <p className='overlay text-9xl rajdhani font-bold text-gray-200'>TOP</p>
                <div className="-mt-24 animate__animated animate__fadeInUp">
                    <p className="text-lg text-gray-500 rajdhani">DETROIT REAL ESTATE</p>
                    <h1 className="text-5xl rajdhani font-semibold">OUR SERVICES</h1>
                </div>
            </div>
            {/* Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {/* 1st */}
                <div className="flex flex-row gap-7 p-20 animate__animated animate__fadeInUp">
                    <div className="text-5xl text-[#8D99FF]">
                        <FaHandshake />
                    </div>
                    <div>
                        <h1 className="rajdhani text-2xl font-semibold uppercase tracking-wide">Sell SPACES </h1>
                        <p className="roboto text-base text-gray-500">We do a free evaluation to be sure you want to start selling.</p>
                    </div>
                </div>
                {/* 1st */}
                <div className="flex flex-row gap-7 p-20 animate__animated animate__fadeInUp">
                    <div className="text-5xl text-[#8D99FF]">
                        <FaChalkboard/>
                    </div>
                    <div>
                        <h1 className="rajdhani text-2xl font-semibold uppercase tracking-wide"> RENT SPACES  </h1>
                        <p className="roboto text-base text-gray-500">We do a free evaluation to be sure you want to start selling. </p>
                    </div>
                </div>
                {/* 1st */}
                <div className="flex flex-row gap-7 p-20 animate__animated animate__fadeInUp">
                    <div className="text-5xl text-[#8D99FF]">
                        <FaBuilding/>
                    </div>
                    <div>
                        <h1 className="rajdhani text-2xl font-semibold uppercase tracking-wide">Buy SPACES </h1>
                        <p className="roboto text-base text-gray-500">We do a free evaluation to be sure you want to buy it.</p>
                    </div>
                </div>
                {/* 1st */}
                <div className="flex flex-row gap-7 p-20 animate__animated animate__fadeInUp">
                    <div className="text-5xl text-[#8D99FF]">
                        <FaPlay/>
                    </div>
                    <div>
                        <h1 className="rajdhani text-2xl font-semibold uppercase tracking-wide">FREE MARKETING</h1>
                        <p className="roboto text-base text-gray-500">We advertise your listing on most popular social media networks.</p>
                    </div>
                </div>
                {/* 1st */}
                <div className="flex flex-row gap-7 p-20 animate__animated animate__fadeInUp">
                    <div className="text-5xl text-[#8D99FF]">
                        <FaKey/>
                    </div>
                    <div>
                        <h1 className="rajdhani text-2xl font-semibold uppercase tracking-wide"> Tenant Services </h1>
                        <p className="roboto text-base text-gray-500"> Rent long-term or short-term industrial, commercial, or offices.</p>
                    </div>
                </div>
                {/* 1st */}
                <div className="flex flex-row gap-7 p-20 animate__animated animate__fadeInUp">
                    <div className="text-5xl text-[#8D99FF]">
                        <FaDollarSign/>
                    </div>
                    <div>
                        <h1 className="rajdhani text-2xl font-semibold uppercase tracking-wide"> LANDLORD SERVICES</h1>
                        <p className="roboto text-base text-gray-500"> We focus on filling your vacancies with qualified tenants.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;