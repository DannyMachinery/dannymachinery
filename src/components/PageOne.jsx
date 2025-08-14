import { Check } from "lucide-react"
import spn1 from "../assets/images/spn1.png";
import spn2 from "../assets/images/spn2.jpeg";
import spn3 from "../assets/images/spn3.png";   



export default function Hero() {
    return (<div className="min-h-screen bg-[#F6F4F0] py-12 px-1">
        <div className="max-w-4xl mx-auto"></div>
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:shadow-blue-400 transition-all duration-300">
                <div className="flex justify-center">
                    <div className="w-12 h-8 rounded-full flex items-center justify-center">
                    </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-3">Built. Tested. Trusted.</h3>
                <p className="text-sm text-[#736363] text-center mb-4 leading-relaxed"> Danny Machinery is proof that local ideas. This machine has been tested in real conditions, in real communities, and it’s already making a difference. Now, we’re ready to scale — with partners who care about results that reach the ground.</p>


                <div className="space-y-2 p-2">
                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949]  mr-2 flex-shrink-0" />
                        <span> Working prototype tested and refined</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949]  mr-2 flex-shrink-0" />
                        <span> 3 field trials completed in Upper West 100+ kg of paste processed during testing</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949]   mr-2 flex-shrink-0" />
                        <span> 80% labor time reduced</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949] mr-2 flex-shrink-0" />
                        <span> Backed by KIC, Baraka Shea, and local cooperatives </span>
                    </div>
                </div>
                <div className="flex space-x-2 pt-28">
                    <button className="px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded hover:bg-blue-800 transition-colors">
                        Get our impact summary
                    </button>
                    <button className="px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded hover:bg-blue-800 transition-colors">
                        See the pitch deck
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:shadow-blue-400 transition-all duration-300 ">
                <div className="flex justify-center mb-4">
                    <div className="w-12 h-8 rounded-full flex items-center justify-center">
                    </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-3">Let’s Scale What Works.</h3>
                <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed">  You’re already working to empower women. We’ve built a tool that helps you go further.Danny Machinery’s kneading machine is already transforming how shea processors work, cutting hours of manual labor into minutes. But tools only change lives when they reach the right hands.That’s where you come in. We’re partnering with NGOs, women’s funds, and development programs to put this machine where it matters most.</p>

                <div className="space-y-2 p-2">
                    <h3> Ways to partner with us </h3>
                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949] mr-2 flex-shrink-0" />
                        <span> Procure machines for cooperatives</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949] mr-2 flex-shrink-0" />
                        <span> Include us in women’s livelihood programs</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949] mr-2 flex-shrink-0" />
                        <span> Co-brand for training and outreach</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949] mr-2 flex-shrink-0" />
                        <span> Support local distribution and visibility</span>
                    </div>

                    <button className="px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded hover:bg-blue-800 transition-colors">
                        Partner with Us
                    </button>

                </div>
                
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:shadow-blue-400 transition-all duration-300">
                <div className="flex justify-center mb-4">
                    <div className="w-12 h-8 rounded-full flex items-center justify-center">
                    </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-3">Built for Women Who Process Shea.<br/> What Relief Looks Like. </h3>
                <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed"> Hours of kneading used to be part of the job. Now, a simple machine is changing that —giving women back their time, strength, and peace of mind. It’s not just faster. It’s freedom.<br />
                    We’re designing tools for the women we grew up with. That’s why every version starts
                    with their voice — not ours</p>

            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:shadow-blue-400 transition-all duration-300">
                <div className="flex justify-center mb-4 ">
                    <div className="w-12 h-8 rounded-full flex items-center justify-center">
                    </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-3">Word is spreading </h3>
                <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed">  Trusted by cooperatives and supported by real partners on the ground <br />  KIC | Tondaar| GSA | </p>

                <div className="flex justify-center items-center space-x-4 mb-8">
                    <img src={spn1} alt="Partner 1" className="w-16 h-16 object-cover rounded-full" />
                    <img src={spn2} alt="Partner 2" className="w-16 h-16 object-cover rounded-full" />
                    <img src={spn3} alt="Partner 3" className="w-16 h-16 object-cover rounded-full" />
                </div>


                <button className="px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded hover:bg-blue-800 transition-colors mt-96">
                    Be Part of the Buzz
                </button>
            </div>



        </div>



    </div>














    )
};