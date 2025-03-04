const MembershipInfo = () => {
    return (
        <div className="flex flex-col items-center w-full p-4">
            <div className="flex flex-col items-center gap-6 p-5 md:flex-row md:gap-8 bg-white rounded-2xl shadow-xl w-full max-w-4xl">
                <img
                    src="gym.webp"
                    alt="Member Picture"
                    className="size-28 shadow-xl rounded-md border-2 border-green-500 object-cover"
                />
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl sm:text-2xl font-bold text-green-600">John Doe</h2>
                    <p className="text-lg text-gray-600">📞 079 489 890</p>
                </div>
            </div>
            <div className="mt-6 sm:mt-8 w-full max-w-4xl bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-green-600">Membership Details</h3>
                <div className="space-y-4 mt-4">
                    <div className="flex justify-between">
                        <span className="text-sm sm:text-base text-gray-700 font-medium">Workout Plan:</span>
                        <span className="text-sm sm:text-base text-gray-600">Strength</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm sm:text-base text-gray-700 font-medium">Start Date:</span>
                        <span className="text-sm sm:text-base text-gray-600">Jan 1, 2023</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm sm:text-base text-gray-700 font-medium">Usage History:</span>
                        <span className="text-sm sm:text-base text-gray-600">3 times per week</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm sm:text-base text-gray-700 font-medium">End Date:</span>
                        <span className="text-sm sm:text-base text-gray-600">Dec 31, 2023</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipInfo;
