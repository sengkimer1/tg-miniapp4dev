import React from 'react';
import Coupon from '../components/Coupon';  // Import the WorkoutPlan component
import Sidebar from "../components/Sidebar"; 

const CouponPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className='text-start'>   <Sidebar />
      </div>
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Coupon</h2>

      <Coupon />
    </div>
  );
};

export default CouponPage;
