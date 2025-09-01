import { Link } from "react-router";
import dmlogo1 from "../assets/images/dmlogo.jpg"

export default function Navbar() {
    return (
        <nav className="bg-white px-6 py-3 sticky top-0 z-50 shadow-md">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 ml-20">
                    
                      <img
                        src={dmlogo1}
                        alt="Danny Machinery Logo"
                        className="h-10 w-auto cursor-pointer rounded-xl"/>
                        </div>
               


                <div className="flex items-center space-x-8 text-[#000949]">
                    <Link to="/"><span className="font-sm font-semibold cursor-pointer hover:text-blue-400 transition-colors">Home</span></Link>
                    <Link to="/product"><span className="font-sm font-semibold cursor-pointer hover:text-blue-400 transition-colors">Product</span></Link>
                    <Link to="/partners"><span className="font-sm font-semibold cursor-pointer hover:text-blue-400 transition-colors">Partners</span></Link>
                    <Link to="/about"><span className="font-sm font-semibold cursor-pointer hover:text-blue-400 transition-colors">About</span></Link>
                    <Link to="/contact"><span className="font-sm font-semibold cursor-pointer hover:text-blue-400 transition-colors">Contact</span></Link>
                    
                    
                </div>

                {/* <div className="flex items-center space-x-4"></div> */}
                {/* <Link to="/register"> */}
                {/* <button className="bg-blue-600 font-semibold text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition-colors"> */}
                {/* Request a Demo</button></Link> */}

            </div>
        </nav>
    )
}