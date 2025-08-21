import spn1 from "../assets/images/spn1.png";
import spn2 from "../assets/images/spn2.jpeg";
import spn3 from "../assets/images/spn3.png";
import { Link } from "react-router";



export default function Hero() {
    return (
        <div className="bg-white rounded-xl p-6  max-w-md mx-auto">
                <div className="flex justify-center mb-4 ">
                    <div className="w-12 h-8 rounded-full flex items-center justify-center">
                    </div>
                </div>
                <h3 className="text-2xl font-semibold text-black text-center mb-3">Word is spreading </h3>
                <p className="text-xl text-[#000949] text-center mb-4 leading-relaxed">  Trusted by cooperatives and supported by real partners on the ground <br />  KIC | Tondaar| GSA | </p>

                

                <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 mt-8">
                    <img src={spn1} alt="Partner 1" className="w-20 h-20 " />
                    <img src={spn2} alt="Partner 2" className="w-20 h-20 " />
                    <img src={spn3} alt="Partner 3" className="w-20 h-20 " />
                </div>
                </div>


                    <div className="flex mt-8 mb-6 ml-19 px-8">
            <Link to="/partnerwithus">
                <button className="px-6 py-2 text-lg font-bold bg-blue-500 text-white rounded-lg shadow hover:bg-blue-800 transition-colors cursor-pointer">
                    Be part of the Buzz
                </button></Link>
                </div>


            </div>
            

         );
}