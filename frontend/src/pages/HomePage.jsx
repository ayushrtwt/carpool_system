import homepageImage from "../assets/homepage_image.jpeg";
import feature1 from "../assets/Feature1.png"
import feature2 from "../assets/Feature2.png"
import feature3 from "../assets/Feature3.png"
import Footer from "../components/Footer";


const HomePage = () => {
    return (
        <>
        <div className="home-container flex flex-col items-center justify-center min-h-screen text-center [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#87CEEB_100%)]">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                <div className="md:w-1/2">
                    <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to CarPOOL</h1>
                    <p className="text-lg text-gray-700 mb-2">Your trusted carpooling app!</p>
                    <p className="text-lg text-gray-700 mb-6">
                        Join our community and help reduce traffic and carbon footprint.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={homepageImage}
                        alt="Carpooling illustration"
                        className="w-3/4 max-w-lg rounded-lg shadow-md"
                    />
                </div>
            </div>
            <div className="p-8">
                {/* Feature Heading */}
                <h2 className="text-4xl font-bold mb-4 text-left">Features</h2>

                {/* Horizontal Sections */}
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Ride Section */}
                    <div className="flex-1 p-4 border rounded-lg shadow-md bg-[#f3f3f3]">
                    <h3 className="text-xl font-semibold mb-2 text-left flex items-center">Search</h3>


                    <div className="flex items-start">
                    {/* Paragraph (Left Side) */}
                    <p className="text-gray-700 text-left flex-1 mr-4">
                        Find your ride, hop in, and go. Search for available trips and get where you need to be—effortlessly.
                    </p>

                    {/* Image (Right Side) */}
                    <div className="flex-shrink-0">
                        <img
                        src={feature1} 
                        alt="Search Icon"
                        className="w-30 h-30" 
                        />
                    </div>
                    </div>

                    </div>

                    {/* Details Section */}
                    <div className="flex-1 p-4 border rounded-lg shadow-md bg-[#f3f3f3]">
                    <h3 className="text-xl font-semibold mb-2 text-left flex items-center">Share</h3>


                    <div className="flex items-start">
                    {/* Paragraph (Left Side) */}
                    <p className="text-gray-700 text-left flex-1 mr-4">
                        Share your ride, connect, and go. Let others join your journey by sharing ride details—making carpooling simple and seamless for everyone.
                    </p>

                    {/* Image (Right Side) */}
                    <div className="flex-shrink-0">
                        <img
                        src={feature2} 
                        alt="Search Icon"
                        className="w-30 h-30" 
                        />
                    </div>
                    </div>

                    </div>

                    {/* Reserve Section */}
                    <div className="flex-1 p-4 border rounded-lg shadow-md bg-[#f3f3f3]">
                    <h3 className="text-xl font-semibold mb-2 text-left flex items-center">Trips</h3>


                    <div className="flex items-start">
                    {/* Paragraph (Left Side) */}
                    <p className="text-gray-700 text-left flex-1 mr-4">
                        Stay in control of your journey. With the Trips feature, drivers can view ride requests, and riders can track their ride status—keeping everyone connected and informed every step of the way.
                    </p>

                    {/* Image (Right Side) */}
                    <div className="flex-shrink-0">
                        <img
                        src={feature3} 
                        alt="Search Icon"
                        className="w-30 h-30" 
                        />
                    </div>
                    </div>

                    </div>
                </div>
                </div>

        </div>
        <Footer />
        </>
    );
};

export default HomePage;