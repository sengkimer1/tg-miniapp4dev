// BranchPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button'; // UI Button Component

const BranchPage: React.FC = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false); // State to track visibility

  const handleNavigation = (location: string) => {
    // Navigate to the detail page of the selected branch
    navigate(`/branch/${location}`); // Dynamically navigate to the branch detail page based on the location
  };

  const handleToggle = () => {
    // Toggle between showing all branches or the first 4
    setShowAll(prev => !prev);
  };

  return (
    <div className="flex flex-col justify-center items-center  gap-2 p-2">
      {/* Branch Header */}
      <div className="flex justify-between w-full max-w-[400px] px-2 mb-2 text-black mr-3">
        <div className="text-base font-bold">Branch</div>
        <div 
  className={`text-xs cursor-pointer ${showAll ? 'text-red-500' : 'text-green-500'}`} 
  onClick={handleToggle}
>
  {showAll ? "See Less" : "See All"} {/* "See All" is green initially, "See Less" is red */}
</div>


      </div>

      {/* Buttons (conditional rendering based on state) */}
      <div className="grid grid-cols-2 gap-7 w-full max-w-[400px]">
        {/* Initial 4 branches in Phnom Penh's districts */}
        <Button text="Hulk Gym - Toul Kork Branch" imageSrc="img1.png" onClick={() => handleNavigation('ToulKork')} />
        <Button text="Hulk Gym - BKK1 Branch" imageSrc="img2.png" onClick={() => handleNavigation('BKK1')} />
        <Button text="Hulk Gym - Chbar Ampov Branch" imageSrc="img3.png" onClick={() => handleNavigation('ChbarAmpov')} />
        <Button text="Hulk Gym - Sen Sok Branch" imageSrc="img4.png" onClick={() => handleNavigation('SenSok')} />
        
        {/* Show the rest only if showAll is true */}
        {showAll && (
          <>
            {/* More Phnom Penh Branch Branches */}
            <Button text="Hulk Gym - Daun Penh Branch" imageSrc="img5.png" onClick={() => handleNavigation('DaunPenh')} />
            <Button text="Hulk Gym - Russey Keo Branch" imageSrc="img6.png" onClick={() => handleNavigation('RusseyKeo')} />
            <Button text="Hulk Gym - Meanchey Branch" imageSrc="img7.png" onClick={() => handleNavigation('Meanchey')} />
            <Button text="Hulk Gym - Khan 7 Makara Branch" imageSrc="img8.png" onClick={() => handleNavigation('7Makara')} />
          </>
        )}
      </div>
    </div>
  );
};

export default BranchPage;
