import dms from '../assets/images/dms.png';
import { Link } from 'react-router';

export default function Hero() {
 
  return (
    <div className="bg-[#D2D2D2] py-16 px-4 sm:px-6 lg:px-8 mb-2">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        
        {/* Left Content Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Because women have better things to do than knead shea paste for hours.
          </h1>
          
          <p className="text-lg text-[#000949] mb-6">
            Our machine does in 20 minutes what used to take hours. No stress. No burns. Just
            smooth, ready paste — and more time for everything else.
          </p>

          <div className="py-5 px-2 mb-6">
            <p className="text-center text-[#000949] text-lg">
              "We've seen the strain of kneading firsthand — hours of backbreaking work under the
              sun. That's why we built a simple, locally made machine that takes the stress out of shea
              processing. Less labor, more output, and more time for what really matters."
            </p>
          </div>

          {/* Centered Button */}
          <div className="text-center">

            <Link to="/requestdemo">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Request a Demo
            </button></Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={dms}
            alt="Danny Machinery shea butter kneading machine"
            className="w-96 h-96 rounded-lg shadow-md object-cover"
          />
        </div>
        
      </div>
    </div>
  );
}