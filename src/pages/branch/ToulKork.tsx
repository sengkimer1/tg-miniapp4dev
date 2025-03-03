import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
const BranchPage: React.FC = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false); // State to track visibility

  const handleNavigation = (location: string) => {
    // Navigate to the detail page of the selected branch
    navigate(`/branch/${location}`); // Use the dynamic location in the URL
  };

  const handleToggle = () => {
    // Toggle between showing all branches or the first 4
    setShowAll(prev => !prev);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-2 p-2">
      {/* Branch Header */}
      <div className="flex justify-between w-full max-w-[400px] px-2 mb-2 text-black mr-3">
        <div className="text-base font-bold">Branch</div>
        <div 
          className="text-xs cursor-pointer" 
          onClick={handleToggle} 
        >
          {showAll ? "See Less" : "See All"} {/* Change text based on state */}
        </div>
      </div>

      {/* Buttons (conditional rendering based on state) */}
      <div className="grid grid-cols-2 gap-2 w-full max-w-[400px]">
        {/* Initial 4 branches in Phnom Penh's districts */}
        <Button text="Phnom Penh - Toul Kork District" imageSrc="img1.png" onClick={() => handleNavigation('ToulKork')} />
        <Button text="Phnom Penh - BKK1 District" imageSrc="img2.png" onClick={() => handleNavigation('BKK1')} />
        <Button text="Phnom Penh - Chbar Ampov District" imageSrc="img3.png" onClick={() => handleNavigation('ChbarAmpov')} />
        <Button text="Phnom Penh - Sen Sok District" imageSrc="img4.png" onClick={() => handleNavigation('SenSok')} />
        
        {/* Show the rest only if showAll is true */}
        {showAll && (
          <>
            <Button text="Phnom Penh - Daun Penh District" imageSrc="img5.png" onClick={() => handleNavigation('DaunPenh')} />
            <Button text="Phnom Penh - Russey Keo District" imageSrc="img6.png" onClick={() => handleNavigation('RusseyKeo')} />
            <Button text="Phnom Penh - Meanchey District" imageSrc="img7.png" onClick={() => handleNavigation('Meanchey')} />
            <Button text="Phnom Penh - Khan 7 Makara District" imageSrc="img8.png" onClick={() => handleNavigation('7Makara')} />
            <Button text="Phnom Penh - Khan Chamkarmon District" imageSrc="img9.png" onClick={() => handleNavigation('Chamkarmon')} />
          </>
        )}
      </div>
    </div>
  );
};

export default BranchPage;
