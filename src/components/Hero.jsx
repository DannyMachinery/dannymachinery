import nsd1 from '../assets/images/nsd1.jpg';

export default function Hero() {
  
  const requestDemo = () => {
    alert("Demo request received! We’ll be in touch soon.");
  };

  return (
    <div className="bg-[#D2D2D2] py-16 px-4 sm:px-6 lg:px-8 mb-8">
      
      <div className="flex flex-col md:flex-row items-center justify-between p-5">
       
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Because women have better things to do than knead shea paste for hours.
          </h1>
          <p className="text-lg mb-6">
            Our machine does in 20 minutes what used to take hours. No stress. No burns. Just
            smooth, ready paste — and more time for everything else.
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            onClick={requestDemo}
          >
            Request a Demo
          </button>
        </div>
       
        <div className="md:w-1/2 flex justify-center">
          <img
            src={nsd1}
            alt="Shea Machine"
            width={500}
            height={700}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>

      
      <div className="py-5 px-2">
        <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto">
          “We’ve seen the strain of kneading firsthand — hours of backbreaking work under the
          sun. That’s why we built a simple, locally made machine that takes the stress out of shea
          processing. Less labor, more output, and more time for what really matters.”
        </p>
      </div>
    </div>
  );
}