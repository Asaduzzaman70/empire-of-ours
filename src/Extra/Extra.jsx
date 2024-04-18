
const Extra = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-100 animate__animated animate__fadeInUp">
                <div className="hero h-full bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/61QnR1c/Retail-Space-2.jpg)' }}></div>
                <div className="text-center text-neutral-content p-28">
                    <div className="text-left">
                        <p className='overlay text-9xl rajdhani font-bold text-gray-200'>ABOUT</p>
                        <div className="-mt-24 animate__animated animate__fadeInUp">
                            <p className="text-lg text-gray-500 rajdhani">DETROIT AGENCY</p>
                            <h1 className="text-5xl text-black rajdhani font-semibold">PROFESSIONAL REAL ESTATE AGENTS</h1>
                            <p className="text-gray-600 tracking-wider roboto leading-relaxed mt-5">
                                Established in 1980, Detroit & Areas CO is now a locally owned third-generation real estate brokerage firm. Our firm is revolutionizing Commercial Real Estate Finance in ways that empower and enrich the richer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-100 animate__animated animate__fadeInUp">
                <div className="text-center text-neutral-content p-28">
                    <div className="text-left">
                        <p className='overlay text-9xl rajdhani font-bold text-gray-200'>ABOUT</p>
                        <div className="-mt-24 animate__animated animate__fadeInUp">
                            <p className="text-lg text-gray-500 rajdhani">WHAT WE DO</p>
                            <h1 className="text-5xl text-black rajdhani font-semibold">TOP SERVICES IN DETROIT AREA</h1>
                            <p className="text-gray-600 tracking-wider roboto leading-relaxed mt-5">
                                After decades at the forefront of Commercial Real Estate, our founders realized that commissions are not for mortgages.  So they set out to free the general population from the inflated commissions paid on each loan.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hero h-full bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/kgpYsHm/Restaurant-5.jpg)' }}></div>
            </div>
        </div>

    );
};

export default Extra;