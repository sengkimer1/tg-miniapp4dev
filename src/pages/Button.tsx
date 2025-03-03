import React from 'react';

interface ButtonProps {
  text: string;
  imageSrc: string;
  onClick: () => void; // onClick function prop
}

const Button: React.FC<ButtonProps> = ({ text, imageSrc, onClick }) => {  return (
    <div className="w-full max-w-[200px] h-[80px] bg-black text-white text-xs flex items-center justify-center relative">
      {/* Button with Image */}
      <button onClick={onClick} className="w-[50px] h-[50px] bg-green-500 text-black text-xs flex items-center justify-center absolute left-3">
        <img src={imageSrc} alt={imageSrc} className="w-full h-full object-cover" />
      </button>

      {/* Main Text Display */}
      <div onClick={onClick} className="ml-14">
        {text}
      </div>
    </div>
  );
}

export default Button;
