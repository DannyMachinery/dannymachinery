import demovid from '../assets/images/demovid.mp4';
import wwmpic from '../assets/images/wwmpic.png';




export default function Priority() {
  return (
    <div className="bg-white rounded-xl p-6 max-w-5xl mx-auto">
      <h3 className="text-lg font-semibold text-gray-900 text-center mb-3">
        Built for Women Who Process Shea.<br />What Relief Looks Like.
      </h3>
      <p className="text-sm text-[#000949] text-center mb-4 leading-relaxed">
        Hours of kneading used to be part of the job. Now, a simple machine is changing that —
        giving women back their time, strength, and peace of mind. It’s not just faster. It’s freedom.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 mt-8">
        <img
          src={wwmpic}
          alt="Woman using the machine"
          className="w-full rounded-lg shadow"
        />

        <video
          src={demovid}
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-lg shadow"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <blockquote className="italic text-blue-900 text-center mt-4">
        “Now we can knead in 20 minutes...”
      </blockquote>
    </div>



  );
}