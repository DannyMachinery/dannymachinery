
import { Phone, MapPin, Mail } from 'lucide-react';


export default function Footer() {
    return (
        <div className="bg-[#D2D2D2] text-[#000949] py-8 px-4 font-sans w-full">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 pb-0">
                    <div className="col-span-1 lg:col-span-1">
                        <div className=" text-[#000949] flex items-center gap-2 mb-4 text-2xl font-semibold ">Danny Machinery</div>




                        <p className="text-sm leading-6 text-[#000949] mb-4">
                            “We have seen the strain of kneading firsthand — hours of backbreaking work under the sun. That is why we built a simple, locally made machine that takes the stress out of shea processing. Less labor, more output, and more time for what really matters.
                        </p>

                    </div>


                    <div className="col-span-1 lg:col-span-1">
                        <h3 className="text-lg font-semibold text-[#000949] mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-[#000949] hover:text-black transition-colors duration-300">Home</a></li>
                            <li><a href="#" className="text-sm text-[#000949] hover:text-black transition-colors duration-300">Product</a></li>
                            <li><a href="#" className="text-sm text-[#000949] hover:text-black transition-colors duration-300">Partners</a></li>
                            <li><a href="#" className="text-sm text-[#000949] hover:text-black transition-colors duration-300">About</a></li>
                        </ul>
                    </div>



                    <div className="col-span-1 lg:col-span-1">
                        <h3 className="text-lg font-semibold text-[#000949] mb-4">Contact Us</h3>
                        <ul className="space-y-2">

                            <li className="flex items-center gap-3 text-sm">
                                <a href=" https://www.linkedin.com/in/danny-machinery-20a828342/ " className="text-sm text-[#000949] hover:text-black transition-colors duration-300">LinkedIn</a></li>

                            <li className="flex items-center gap-3 text-sm"><a href=" https://vm.tiktok.com/ZMSTuFf6x/ " className="text-sm text-[#000949] hover:text-black transition-colors duration-300">Tik Tok</a></li>


                            <li className="flex items-center gap-3 text-sm"><a href="https://www.instagram.com/danny_machinery?igsh=Y2NzOW13ejZuZjNv" className="text-sm text-[#000949] hover:text-black transition-colors duration-300">Instagram</a></li>

                            <li className="flex items-center gap-3 text-sm">
                                <Phone className="text-[#000949] w-4 h-4 stroke-[3]" />
                                <a href=" http://wa.me/233547302552 " className="text-sm text-[#000949] hover:text-black transition-colors duration-300">Whatsapp</a></li>


                            <li className="flex items-center gap-3 text-sm">
                                <Mail className="text-black w-4 h-4 stroke-[3]" />
                                <span className="text-[#000949]">dannymachinery5@gmail.com</span>
                            </li>



                            <li className="flex items-center gap-3 text-sm">
                                <MapPin className="text-black w-4 h-4 stroke-[3]" />
                                <span className="text-[#000949]">Wa, Upper West Region, Ghana</span>
                            </li>
                        </ul>
                    </div>
                </div>

               


                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-300 space-y-4 pt-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        © 2025 Danny Machinery. All rights reserved.
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                        <a href="#" className="hover:text-blue-300 transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-300 transition-colors duration-300">Terms of Service</a>
                        <a href="#" className="hover:text-blue-400 transition-colors duration-300">Data Protection</a>
                        <a href="#" className="hover:text-blue-400 transition-colors duration-300">Support</a>

                    </div>
                </div>

                <div className="text-xs text-[#000949] text-center mt-4">
                    This website is designed to be accessible and compliant with applicable legal standards, including data protection and accessibility regulations. For assistance or to report the issue.
                </div>
            </div>
        </div>
    );
}