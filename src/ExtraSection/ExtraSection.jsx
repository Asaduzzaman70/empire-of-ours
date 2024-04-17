
const ExtraSection = () => {
    return (
        <div className="card h-96 lg:card-side bg-base-100 shadow-xl">
            <figure className="h-full"><img className="h-full" src="https://i.ibb.co/HGPkVMk/Entertainment-Venue-3.jpg" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Exciting New Album Release!</h2>
                <p>Welcome to the launch of our latest album, filled with captivating melodies and unforgettable lyrics. Immerse yourself in a musical journey that will uplift your spirits and touch your soul.</p>
                <p>Join us as we embark on this musical adventure. Click the button below to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <a href="https://example.com" className="btn bg-[#8D99FF]">Listen Now</a>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;