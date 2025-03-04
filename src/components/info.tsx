// const Info = () => {
//     return (

//         <div className="max-w-xl sm:max-w-md  mx-auto bg-white sm:p-6 rounded-lg shadow-md mt-3">
//             <div className="flex items-center space-x-4 sm:space-x-6">
//                 <div className="relative">
//                     <img
//                         src="gym.webp"
//                         alt="Member Picture"
//                         className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-green-500"
//                     />
//                 </div>
//                 <div className="pl-6">
//                     <h2 className="text-xl sm:text-xl font-bold text-green-600">Allibaba</h2>
//                     <p className="text-sm sm:text-lg text-gray-600">079 479 794</p>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default Info;
import { MoreVertical } from "lucide-react";

const Info = () => {
    return (
        <div className="max-w-sm mx-auto text-white bg-black  sm:p-3 rounded-lg shadow-md mt-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img
                        src="gym.webp"
                        alt="Member Picture"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-green-500"
                    />
                    <div>
                        <h2 className="text-lg sm:text-xl font-bold text-green-600">Allibaba</h2>
                        <p className="text-sm sm:text-lg">079 479 794</p>
                    </div>
                </div>
                <button className=" hover:text-gray-800">
                    <MoreVertical size={24} />
                </button>
            </div>
        </div>
    );
};

export default Info;



