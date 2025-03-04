import { Link } from 'react-router-dom';
import { MoreVertical } from "lucide-react";

const Info = () => {
    return (
        <Link to="/membershipDetail" className="flex flex-col items-center w-full p-4">
            <div className="flex flex-col items-center gap-6 p-5 md:flex-row md:gap-8 bg-black text-white rounded-2xl shadow-xl w-full max-w-4xl">
                <img
                    src="gym.webp"
                    alt="Member Picture"
                    className="size-28 shadow-xl rounded-md border-2 border-green-500 object-cover"
                />
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl font-bold text-green-600">Allibaba</h2>
                    <p className="text-lg">079 479 794</p>
                </div>
                <button className="hover:text-gray-800 self-start">
                    <MoreVertical size={24} />
                </button>
            </div>
        </Link>
    );
};

export default Info;
