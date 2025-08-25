import { useState } from "react";
import Navbar from "../components/Navbar";
import { sendPartnershipMessage } from "../api/client.js";

export default function PartnerWithUs() {
  const [formData, setFormData] = useState({
    representativeName: '',
    email: '',
    companyName: '',
    businessType: '',
    organizationMission: '',
    howToPartner: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      await sendPartnershipMessage(formData);
      setSubmitStatus('success');
      setFormData({
        representativeName: '',
        email: '',
        companyName: '',
        businessType: '',
        organizationMission: '',
        howToPartner: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending partnership message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center text-[#000949] mb-6">
            Partner With Us
          </h2>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              Partnership inquiry sent successfully! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              Failed to send partnership inquiry. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Representative Name */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Representative Name *
              </label>
              <input
                type="text"
                name="representativeName"
                value={formData.representativeName}
                onChange={handleChange}
                required
                placeholder="Representative Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#000949]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#000949]"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Company Name *
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                placeholder="Company or Organization"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#000949]"
              />
            </div>

            {/* Business Type */}
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                Type of Business *
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
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

            {/* Organization Mission */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Describe the mission and objectives of your organization *
              </label>
              <textarea
                name="organizationMission"
                value={formData.organizationMission}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Type here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#000949]"
              ></textarea>
            </div>

            {/* How to Partner */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Tell us how you'd like to partner *
              </label>
              <textarea
                name="howToPartner"
                value={formData.howToPartner}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Type here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#000949]"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#000949] text-white px-6 py-2 rounded-md hover:bg-blue-900 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}