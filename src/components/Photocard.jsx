import group1 from '../assets/images/group1.jpg';
import group2 from '../assets/images/group2.jpg';   
import group3 from '../assets/images/group3.jpg';
import group4 from '../assets/images/group4.jpg';



export default function Photocard() {
    return (
        <div className="bg-[#D2D2D2] py-16 px-4 sm:px-6 lg:px-8 mb-8">
            <div className="text-4xl text-[#000949] font-bold text-center mb-10 ">Sponsors</div>
            <h2 className="w-24 h-1 bg-[#000949] mx-auto rounded-full mt-5"></h2>
            
            


            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 mt-8">
                    <div className="flex flex-col items-center text-center">
                        <img src={group1} alt="Image 1" className="mb-4 w-full h-60 object-cover rounded-lg" />
                        </div>

                    <div className="flex flex-col items-center text-center">
                        <img src={group2} alt="Image 2" className=" mb-4 w-full h-60 object-cover rounded-lg" />
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 mt-8">
                    <div className="flex flex-col items-center text-center">
                        <img src={group3} alt="Image 1" className="mb-4 w-full h-60 object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={group4} alt="Image 2" className="mb-4 w-full h-60 object-cover rounded-lg" />
                        
                    </div>
                </div>
            </div>

            </div>



          );
}