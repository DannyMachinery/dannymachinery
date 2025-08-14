import Footer from "../components/Footer";
import group5 from "../assets/images/group5.jpg";

import Navbar from "../components/Navbar";





export default function Product() {
    return (
        <>
            <Navbar />
            <div className="text-center mt-12 px-4">
                <div className="text-4xl font-semi-bold">A Scalable, Field-Tested Intervention for Women’s Economic
                    Empowerment</div>

                <h3 className=" font-bold p-4"> Danny Machinery’s shea kneading machine is a proven, locally built solution designed
                    with rural women, for rural women. It reduces kneading time by over 80%, improves
                    consistency, and frees women to focus on higher-value work. <br /> But building the machine was only step one. The next step — getting it into the right
                    hands — is where real impact happens. That’s where we need you. <br />  We’re inviting NGOs, women’s funds, development programs, and ecosystem builders to
                    scale this intervention where it’s needed most.  </h3>

            </div>



            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:shadow-blue-400 transition-all duration-300 max-w-md mx-auto">
                <p className="font-bold text-2xl mb-4">Ways to collaborate</p>
                <ul className="space-y-4">
                    <li>
                        <div className="flex items-start text-sm text-gray-700">
                            <span className="mt-1 mr-2 text-blue-700">•</span>
                            <span>
                                <span className="font-semibold">Fund Direct Distribution</span>
                                <br />
                                Cover the cost of machines for co-ops who can’t afford them. Your grant puts a working solution directly into women’s hands.
                            </span>
                        </div>
                        <hr className="my-4 border-gray-200" />
                    </li>
                    <li>
                        <div className="flex items-start text-sm text-gray-700">
                            <span className="mt-1 mr-2 text-blue-700">•</span>
                            <span>
                                <span className="font-semibold">Support Field Pilots</span>
                                <br />
                                Sponsor structured testing with your partner communities. We’ll co-design feedback loops and capture insights for replication.
                            </span>
                        </div>
                        <hr className="my-4 border-gray-200" />
                    </li>
                    <li>
                        <div className="flex items-start text-sm text-gray-700">
                            <span className="mt-1 mr-2 text-blue-700">•</span>
                            <span>
                                <span className="font-semibold">Embed in Women's Livelihood Programs</span>
                                <br />
                                Integrate the machine into your existing economic empowerment initiatives. We’ll support onboarding, training, and maintenance setup.
                            </span>
                        </div>
                        <hr className="my-4 border-gray-200" />
                    </li>
                    <li>
                        <div className="flex items-start text-sm text-gray-700">
                            <span className="mt-1 mr-2 text-blue-700">•</span>
                            <span>
                                <span className="font-semibold">Invest in Manufacturing Scale-Up</span>
                                <br />
                                Help us expand our production capacity to meet growing demand. Your capital fuels local jobs and lower unit costs.
                            </span>
                        </div>
                        <hr className="my-4 border-gray-200" />
                    </li>
                    <li>
                        <div className="flex items-start text-sm text-gray-700">
                            <span className="mt-1 mr-2 text-blue-700">•</span>
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

                <button className="mt-6 px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded hover:bg-blue-800 transition-colors mb-1">
                    Partner with Us
                </button>
            </div>







            <Footer />

        </>
    )
};