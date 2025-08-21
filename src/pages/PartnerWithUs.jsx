import Navbar from "../components/Navbar";

export default function PartnerWithUs() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center text-[#000949] mb-6">
            Partner With Us
          </h2>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Representative Name
              </label>
              <input
                type="text"
                placeholder="Representative Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#000949]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#000949]"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Company or Organization"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#000949]"
              />
            </div>

            <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Business *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000949] focus:border-transparent outline-none transition-colors bg-white"
                  >
                    <option value="">Please Select</option>
                    <option value="NGO">Non Governmental Organization (NGO)</option>
                    <option value="SMEs">Small & Medium Enterprises (SMEs)</option>
                    <option value="Corporation">Corporation</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Retail">Retail</option>
                    <option value="Manufacturing">Manufacturing</option>
                  </select>
                </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Describe the mission and objectives of your organization
              </label>
              <textarea
                rows="4"
                placeholder="Type here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#000949]"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Tell us how you'd like to partner
              </label>
              <textarea
                rows="4"
                placeholder="Type here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#000949]"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#000949] text-white px-6 py-2 rounded-md hover:bg-blue-900 transition cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
