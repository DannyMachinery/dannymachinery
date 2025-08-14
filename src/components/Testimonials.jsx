

export default function Testimonials() {
    return (

        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mb-8">
            <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>

            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center text-center bg-white rounded-lg shadow p-6">
                        <img src="https://via.placeholder.com/150" alt="Image 1" className="mb-4 rounded-full w-32 h-32 object-cover" />
                        <div className="text-lg font-medium text-gray-700"> Since we started using the kneading machine, everything has changed. We no longer spend hours kneading — now it’s faster and cleaner. We’re able to produce more shea butter, sell more, and make better money. This machine has really helped us.”
                            —Konjiehi women’s shea group</div>
                    </div>
                    <div className="flex flex-col items-center text-center bg-white rounded-lg shadow p-6">
                        <img src="https://via.placeholder.com/150" alt="Image 2" className="mb-4 rounded-full w-32 h-32 object-cover" />
                        <div className="text-lg font-medium text-gray-700">This is the second section</div>
                    </div>
                </div>
            </div>
        </div>




    );
}