import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Check } from "lucide-react";
import Testimonials from "../components/Testimonials";
import dms2 from "../assets/images/dms2.png";
import { Link } from "react-router";
import nsd1 from "../assets/images/nsd1.jpg"; 
import dms from "../assets/images/dms.png";

export default function Product() {
  const features = [
    "Kneads up to 70kg of shea paste per batch",
    "Mixing time: 20 minutes per batch",
    "Electric-powered (standard single-phase current)",
    "Requires only 1 person to operate",
    "Portable and compact — fits in small workspaces",
    "Low maintenance — spare parts available locally",
    "Wood interior — hygienic and easy to wash",
    "Designed for heavy-duty daily use in rural environments"
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-1 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#000949] mb-6">
              Our Product
            </h1>
            <p className="text-[#000949] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Our Machine kneads up to 70kg of shea paste in 20 minutes — no hand
              strain, no splitting batches. This is how you save time, boost output, and keep things clean.
            </p>
          </div>
        </div>
      </section>

      {/* Main Product Grid */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Product Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-4 mb-18">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Product Image */}
              <div className="p-8 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
                <img
                  src={dms2}
                  alt="Danny Machinery Shea Butter Kneading Machine"
                  className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Product Details */}
              <div className="p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-[#000949] mb-2">
                    Shea Butter Kneading Machine
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Professional-grade equipment designed specifically for small-scale shea butter processors
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#000949] mb-4">Key Features</h3>
                  <div className="grid gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">

                    <Link to="/requestdemo">
                  <button className="bg-[#000949] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors cursor-pointer">
                    Request Quote
                  </button></Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Product Cards - Add more products here */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Product Card 2 - Example for future products */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img src={dms} alt="equipment image" 
                className="w-full h-full object-cover"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#000949] mb-2">
                  Shea Butter Processing Machine
                </h3>
              </div>
            </div>

            {/* Product Card 3 - Example */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img src={dms2} alt="equipment image" 
                className="w-full h-full object-cover"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#000949] mb-2">
                  Shea butter Processing Machine
                </h3>
              </div>
            </div>
            {/* Product Card 4 - Example */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img src={nsd1} alt="equipment image" 
                className="w-full h-full object-cover"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#000949] mb-2">
                 Part of the Shea Butter Processing Machine
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Testimonials />
      <Footer />
    </>
  );
}