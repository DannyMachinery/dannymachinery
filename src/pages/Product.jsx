import Navbar from "../components/Navbar"   
import Footer from "../components/Footer"
import { Check } from "lucide-react"
import Testimonials from "../components/Testimonials"




export default function Product() {
    return (
        <>
            <Navbar />
            <div className="text-center mt-24 px-4">
                <h3 className="text-4xl font-bold">Shea kneading solved</h3>
                <div className="w-24 h-1 bg-[#000949] mx-auto rounded-full mt-5"></div>
                <img src={imageUrl} alt="" className="w-full md:w-[40%] px-10 py-4 rounded-md" />
            </div>
            <div className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl ml-0 md:ml-8">
                    <p className="mb-4">
                        Our Machine knead s up to 70kg of shea paste in 20 minutes  — no hand
                        strain, no splitting batches.    <br />
                        This is how you save time, boost output, and keep things
                        clean.
                    </p>
                </div>
                <div className="text-center mt-24 px-4">
                <h1 className="text-l font-bold">Key Features</h1>
                <h3 className="text-m font-semi-bold"></h3>
                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949] mr-2 flex-shrink-0" />
                        <span> Kneads up to 70kg of shea paste per batch </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949] mr-2 flex-shrink-0" />
                        <span> Mixing time: 20 minutes per batch </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949] mr-2 flex-shrink-0" />
                        <span>Electric-powered (standard single- phase current)</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949] mr-2 flex-shrink-0" />
                        <span> Requires only 1 person to operate </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949] mr-2 flex-shrink-0" />
                        <span> Portable and compact — fits in small workspaces </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949] mr-2 flex-shrink-0" />
                        <span> Low maintenance — spare parts available locally </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949] mr-2 flex-shrink-0" />
                        <span>Wood interior — hygienic and easy to wash </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#000949] mr-2 flex-shrink-0" />
                        <span>Designed for heavy -duty daily use in rural environments </span>
                    </div>
                

                </div>
            

            
        <Testimonials />

       <Footer />
              </>      
    )
};