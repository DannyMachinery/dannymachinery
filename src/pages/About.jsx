import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import dmteam from '../assets/images/dmteam.png';
import Photocard from '../components/Photocard';
import mach2 from '../assets/images/mach2.jpg';
import { Link } from 'react-router';









export default function About() {
    return (
        <>
            <Navbar />
            <div className="text-center mt-24 px-4">
                <h3 className="text-4xl text-[#000949] font-bold">Our Story</h3>
                <div className="w-24 h-1 bg-[#000949] mx-auto rounded-full mt-5"></div>
            </div>



            <div className="flex flex-col md:flex-row justify-center items-center mt-20 px-4">

                <img src={mach2} alt="Danny Machinery Logo" className="w-full max-w-xl py-10 px-4 rounded-full" />

                <div className="md:w-[60%] w-full px-4">
                    <h4 className="text-4xl font-bold mb-4"></h4>
                    <p className="text-gray-700 text-base md:text-lg mb-2">
                        Danny Machinery is a Ghanaian-based startup focused on designing practical equipment
                        for small-scale shea butter processors. Our flagship product is a kneading machine —
                        built specifically to reduce the labor, time, and health risks women face during the
                        kneading stage of production.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg">
                        We started operations in 2024 after identifying a clear gap in processing efficiency at the
                        kneading stage — an area often overlooked in the value chain. Our team is driven by the
                        need to make local production faster, safer, and more scalable.
                    </p>
                </div>
            </div>


            <div style={{ backgroundColor: "#D2D2D2" }} className="pt-20 min-h-screen mt-40 px-4">
                <div className="text-center">
                    <h3 className="text-4xl font-bold">Meet Our Team</h3>
                    <div className="w-24 h-1 bg-[#000949] mx-auto rounded-full mt-5"></div>
                    <div className="flex justify-center mt-12">
                        <img
                            src={dmteam}
                            className="w-full max-w-4xl h-75 object-cover rounded-lg shadow-md"
                        />
                        
                    </div>

                </div>

            </div>

            <div className="bg-white py-10 px-4 my-8 rounded-lg">
                <div className="flex flex-col md:flex-row md:space-x-12">

                    <div className="flex-1">
                <div className=" text-[#000949]  text-center mt-12 px-4 ">
                    <h3 className="text-4xl font-bold">Why kneading is the focus</h3>
                    <div className="w-24 h-1 bg-[#000949] mx-auto rounded-full mt-5"></div>
                </div>
                <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto text-center pt-4">
                    Manual shea kneading is one of the most physically demanding stages of processing  —
                    often taking 2 to 3 hours of non-stop work, involving repetitive hand motion under
                    intense heat.<br />
                    According to multiple studies, kneading contributes to “significant fatigue, strain, and
                    productivity loss among rural processors” (source: Global SheaAlliance technical
                    reports). <br />
                    Unlike roasting or milling, the kneading stage has seen little innovation  — yet it directly
                    limits how much paste a woman can process in a day. That’s why our first solution
                    tackles this stage directly.
                </p>

                        <div className="flex-1">
                <div className=" text-[#000949]  text-center mt-12 px-4 ">
                    <h3 className="text-4xl font-bold">Mission and values</h3>
                    <div className="w-24 h-1 bg-[#000949] mx-auto rounded-full mt-5"></div>
                </div>
                <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto text-center pt-4">
                    Our Mission: To design and manufacture efficient, easy to use kneading machines that
                    enhance shea butter production, empowering women and promoting sustainable
                    economic development.<br />
                    Our Values: Innovation , Empowerment , Sustainability , Quality,  and Integrity </p>
                    </div>

            </div>
            </div>
            </div>


            <Photocard />

            <Footer />
        </>
    );
}