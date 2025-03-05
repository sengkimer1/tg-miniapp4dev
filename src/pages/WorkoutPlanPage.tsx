import React from 'react';
import WorkoutPlan from '../components/Workout';  // Import the WorkoutPlan component
import Sidebar from "../components/Sidebar"; 

const Workout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className='text-start'>      <Sidebar />
      </div>
      <WorkoutPlan />
    </div>
  );
};

export default Workout;
