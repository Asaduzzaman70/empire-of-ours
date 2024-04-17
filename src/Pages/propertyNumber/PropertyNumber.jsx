import 'animate.css';
import { useLoaderData } from 'react-router-dom';

const PropertyNumber = () => {
    const loadPropertyData = useLoaderData();


    // Data Filter Function
    const dataFilter = (arg) => {
        const data = loadPropertyData.filter(data => data.segmentName === arg);
        const dataLength = data.length;
        return dataLength;
    }

    // Retail Space
    const retailSpace = dataFilter("Retail Space");
    // Office Building
    const officeBuilding = dataFilter("Office Building");
    // Warehouse
    const warehouse = dataFilter("Warehouse");
    // restaurant
    const restaurant = dataFilter("Restaurant");
    // industrialFacility
    const industrialFacility = dataFilter("Industrial Facility");
    // entertainmentVenue
    const entertainmentVenue = dataFilter("Entertainment Venue");

    console.log(retailSpace);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 container mx-auto">
                {/* 1st */}
                <div className='animate__animated animate__fadeInUp px-12 py-20 transition duration-400 hover:bg-gray-100'>
                    <p className='overlay text-9xl rajdhani font-bold text-gray-200'>0{retailSpace}</p>
                    <div>
                        <p className='text-sm -mt-16 rajdhani text-gray-600 font-semibold' style={{ letterSpacing: '1px' }}>EXPLORE THE LISTINGS</p>
                        <h1 className='text-2xl uppercase rajdhani font-semibold'>Retail <br />Space</h1>
                        <button className='rajdhani text-sm text-gray-600 mt-16 transition duration-200 hover:text-[#8D99FF] font-semibold' style={{ letterSpacing: '5px' }}>READ MORE</button>
                    </div>
                </div>
                {/* 2st */}
                <div className='animate__animated animate__fadeInUp px-12 py-20 transition duration-400 hover:bg-gray-100'>
                    <p className='overlay text-9xl rajdhani font-bold text-gray-200'>0{officeBuilding}</p>
                    <div>
                        <p className='text-sm -mt-16 rajdhani text-gray-600 font-semibold' style={{ letterSpacing: '1px' }}>EXPLORE THE LISTINGS</p>
                        <h1 className='text-2xl uppercase rajdhani font-semibold'>Office Building</h1>
                        <button className='rajdhani text-sm text-gray-600 mt-16 transition duration-200 hover:text-[#8D99FF] font-semibold' style={{ letterSpacing: '5px' }}>READ MORE</button>
                    </div>
                </div>
                {/* 3st */}
                <div className='animate__animated animate__fadeInUp px-12 py-20 transition duration-400 hover:bg-gray-100'>
                    <p className='overlay text-9xl rajdhani font-bold text-gray-200'>0{warehouse}</p>
                    <div>
                        <p className='text-sm -mt-16 rajdhani text-gray-600 font-semibold' style={{ letterSpacing: '1px' }}>EXPLORE THE LISTINGS</p>
                        <h1 className='text-2xl uppercase rajdhani font-semibold'>Ware <br />House</h1>
                        <button className='rajdhani text-sm text-gray-600 mt-16 transition duration-200 hover:text-[#8D99FF] font-semibold' style={{ letterSpacing: '5px' }}>READ MORE</button>
                    </div>
                </div>
                {/* 4st */}
                <div className='animate__animated animate__fadeInUp px-12 py-20 transition duration-400 hover:bg-gray-100'>
                    <p className='overlay text-9xl rajdhani font-bold text-gray-200'>0{restaurant}</p>
                    <div>
                        <p className='text-sm -mt-16 rajdhani text-gray-600 font-semibold' style={{ letterSpacing: '1px' }}>EXPLORE THE LISTINGS</p>
                        <h1 className='text-2xl uppercase rajdhani font-semibold'>Restaurant <br />Facilities</h1>
                        <button className='rajdhani text-sm text-gray-600 mt-16 transition duration-200 hover:text-[#8D99FF] font-semibold' style={{ letterSpacing: '5px' }}>READ MORE</button>
                    </div>
                </div>
                {/* 5st */}
                <div className='animate__animated animate__fadeInUp px-12 py-20 transition duration-400 hover:bg-gray-100'>
                    <p className='overlay text-9xl rajdhani font-bold text-gray-200'>0{industrialFacility}</p>
                    <div>
                        <p className='text-sm -mt-16 rajdhani text-gray-600 font-semibold' style={{ letterSpacing: '1px' }}>EXPLORE THE LISTINGS</p>
                        <h1 className='text-2xl uppercase rajdhani font-semibold'>Industrial Facility</h1>
                        <button className='rajdhani text-sm text-gray-600 mt-16 transition duration-200 hover:text-[#8D99FF] font-semibold' style={{ letterSpacing: '5px' }}>READ MORE</button>
                    </div>
                </div>
                {/* 6st */}
                <div className='animate__animated animate__fadeInUp px-12 py-20 transition duration-400 hover:bg-gray-100'>
                    <p className='overlay text-9xl rajdhani font-bold text-gray-200'>0{entertainmentVenue}</p>
                    <div>
                        <p className='text-sm -mt-16 rajdhani text-gray-600 font-semibold' style={{ letterSpacing: '1px' }}>EXPLORE THE LISTINGS</p>
                        <h1 className='text-2xl uppercase rajdhani font-semibold'>Entertainment Venue</h1>
                        <button className='rajdhani text-sm text-gray-600 mt-16 transition duration-200 hover:text-[#8D99FF] font-semibold' style={{ letterSpacing: '5px' }}>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyNumber;