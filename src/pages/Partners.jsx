import Footer from "../components/Footer";
import group5 from "../assets/images/group5.jpg";

import Navbar from "../components/Navbar";
import { Link } from "react-router";





export default function Product() {
    return (
        <>
            <Navbar />
            <div className="text-center mt-12 px-4">
                <div className="text-2xl font-semi-bold">A Scalable, Field-Tested Intervention for Women’s Economic
                    Empowerment</div>

                <h3 className=" font-bold text-[#000949] p-4"> Getting the machines into the right hands— is where real impact happens. That’s where we need you. <br />  We’re inviting NGOs, women’s funds, development programs, and ecosystem builders to
                    scale this intervention where it’s needed most.  </h3>

            </div>

            <h2 className="font-bold text-2xl text-[#000949] text-center mb-4 mt-12">Ways to collaborate</h2>


            <div className="flex flex-col md:flex-row md:space-x-6">
                <ul className="flex-1 space-y-4">
                    <li>
                        <div className="flex items-start text-sm text-black">
                            <span className="mt-1 mr-2 text-blue-700"></span>
                            <span>
                                <span className="font-semibold">Fund Direct Distribution</span>
                                <br />
                                Cover the cost of machines for co-ops who can’t afford them. Your grant puts a working solution directly into women’s hands.
                            </span>
                        </div>
                        <hr className="my-4 border-[#000949]" />
                    </li>
                    <li>
                        <div className="flex items-start text-sm text-black">
                            <span className="mt-1 mr-2 text-blue-700"></span>
                            <span>
                                <span className="font-semibold">Support Field Pilots</span>
                                <br />
                                Sponsor structured testing with your partner communities. We’ll co-design feedback loops and capture insights for replication.
                            </span>
                        </div>
                        <hr className="my-4 border-[#000949]" />
                    </li>
                    <li>
                        <div className="flex items-start text-sm text-black">
                            <span className="mt-1 mr-2 text-blue-700"></span>
                            <span>
                                <span className="font-semibold">Embed in Women's Livelihood Programs</span>
                                <br />
                                Integrate the machine into your existing economic empowerment initiatives. We’ll support onboarding, training, and maintenance setup.
                            </span>
                        </div>
                        <hr className="my-4 border-[#000949]" />
                    </li>
                    <li>
                        <div className="flex items-start text-sm text-black">
                            <span className="mt-1 mr-2 text-blue-700"></span>
                            <span>
                                <span className="font-semibold">Invest in Manufacturing Scale-Up</span>
                                <br />
                                Help us expand our production capacity to meet growing demand. Your capital fuels local jobs and lower unit costs.
                            </span>
                        </div>
                        <hr className="my-4 border-[#000949]" />
                    </li>
                    <li>
                        <div className="flex items-start text-sm text-black">
                            <span className="mt-1 mr-2 text-blue-700"></span>
                            <span>
                                <span className="font-semibold">Co-Brand or Bundle with Your Model</span>
                                <br />
                                Leverage the tool in your own branded interventions. Ideal for NGOs offering starter kits or entrepreneurship packs.
                            </span>
                        </div>
                    </li>
                </ul>

                <img
                    src={group5}
                    alt="Partner Collaboration"
                    className="w-full max-w-md mx-auto mb-6 rounded-lg shadow"
                />
            </div>

            <div className="text-center mt-15 mb-6 px-8">
                <Link to="/partnerwithus">
                    <button className="px-6 py-2 text-lg font-bold bg-blue-600 text-white rounded-lg shadow hover:bg-blue-800 transition-colors cursor-pointer">
                        Partner with Us
                    </button></Link>
            </div>
            <Footer />
        </>
    );
}