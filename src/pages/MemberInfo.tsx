import React from 'react';
import Member from '../components/MemberInfo';  // Import the WorkoutPlan component
import Sidebar from "../components/Sidebar"; 

const MemberInfo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className='text-start'>   <Sidebar />
      </div>
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">MemberShip Plan</h2>

      <Member />
    </div>
  );
};

export default MemberInfo;
