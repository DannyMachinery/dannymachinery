import Navbar from "../components/Navbar";
import { MapPin, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#000949] mb-4">
              Let's Talk
            </h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-[#000949] mb-6">
                Send us a message
              </h2>
              
              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000949] focus:border-transparent outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Organization/Business Name */}
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization/Business Name
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000949] focus:border-transparent outline-none transition-colors"
                    placeholder="Enter your organization name"
                  />
                </div>

                {/* Phone or Email */}
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone or Email *
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000949] focus:border-transparent outline-none transition-colors"
                    placeholder="Enter your phone number or email"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000949] focus:border-transparent outline-none transition-colors bg-white"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="demo">Demo</option>
                    <option value="partner">Partner</option>
                    <option value="general">General</option>
                  </select>
                </div>

                {/* Message Box */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000949] focus:border-transparent outline-none transition-colors resize-vertical"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#000949] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors focus:ring-2 focus:ring-[#000949] focus:ring-offset-2 outline-none cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Cards */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-[#000949] mb-6">
                  Get in touch
                </h2>
                
                <div className="space-y-6">
                  
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#000949] p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <a 
                        href="mailto:dannymachinery5@gmail.com"
                        className="text-[#000949] hover:underline"
                      >
                        dannymachinery5@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 p-3 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
                      <a 
                        href="http://wa.me/233547302552" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                      <p className="text-gray-600">
                        Wa, Ghana<br />
                        Upper West Region
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}