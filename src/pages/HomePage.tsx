import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; 
// import Background from "../image/gym.webp"; // Correct path to your image

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center h-screen">
      {/* Sidebar Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-50 text-start">
        <Sidebar />
      </div>

      {/* Centered Content */}
      <div className="relative text-start text-black p-6 max-w-[430px] w-full">
        <h1 className="text-xl font-bold font-sans ">
        Get stronger, fitter, and healthier <br />
          Crush your health and fitness goals in no time</h1>
        <p className="mt-2 text-lg text-green-500">Get stronger every day!</p>
        <button
          onClick={() => navigate("/coupon")}
          className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
        >
           Start 7 day free trial
        </button>
      </div>
    </div>
  );
};

export default Home;
