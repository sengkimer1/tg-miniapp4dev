import React from 'react';
import Promotion from '../components/Promotion';  // Import the WorkoutPlan component
import Sidebar from "../components/Sidebar"; 

const Workout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className='text-start'>   <Sidebar />
      </div>
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Promotion</h2>
      
      <Promotion />
      <Promotion />
    </div>
  );
};

export default Workout;
