import Navbar from "../components/Navbar";
import dms2 from "../assets/images/dms2.png";
import { Link } from "react-router";
import demovid from '../assets/images/demovid.mp4';

export default function RequestDemo() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-5xl w-full flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden mt-20">
          
          {/* Left Div - Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 pb-10">
            <img
              src={dms2}
              alt="Product Demo"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Div - Price & Button */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 text-center">
            <video
                      src={demovid}
                      autoPlay
                    
                      loop
                      playsInline
                      className="w-full rounded-lg shadow"
                    >
                      Your browser does not support the video tag.
                    </video>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Quoted Price: <span className="text-blue-600">GHc 15,000</span>
            </h2>


            <Link to="http://wa.me/233547302552" target="_blank">
            <button
              type="button"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition cursor-pointer"
            >
              Place Order
            </button></Link>
          </div>

        </div>
      </div>
    </>
  );
}
