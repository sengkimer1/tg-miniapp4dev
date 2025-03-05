import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BranchDetailPage: React.FC = () => {
  // Use useParams to get the dynamic branch location from the URL
  const { location } = useParams<{ location: string }>();

  // Use useNavigate to navigate to the Branch page
  const navigate = useNavigate();

  // Example branch data with more fields
  const branchData: Record<string, { 
    name: string; 
    description: string;
    imageSrc: string; 
    address: string;
    contact: string;
    hours: string;
  }> = {
    ToulKork: {
      name: 'Phnom Penh - Toul Kork District',
      description: 'Our Toul Kork branch is a state-of-the-art fitness center located in the bustling Toul Kork district. Offering a variety of fitness equipment and expert trainers to help you achieve your fitness goals.',
      imageSrc: '/img1.png',  // Example image path
      address: 'Toul Kork, Phnom Penh, Cambodia',
      contact: '+855 23 456 789',
      hours: 'Mon - Fri: 6 AM - 10 PM, Sat - Sun: 8 AM - 6 PM',
    },
    BKK1: {
      name: 'Phnom Penh - BKK1 District',
      description: 'Located in the heart of BKK1, this gym offers a vibrant and modern fitness environment with excellent facilities, including a range of workout equipment, group classes, and personal training services.',
      imageSrc: '/img2.png',  // Example image path
      address: 'BKK1, Phnom Penh, Cambodia',
      contact: '+855 23 123 456',
      hours: 'Mon - Fri: 6 AM - 10 PM, Sat - Sun: 8 AM - 6 PM',
    },
    ChbarAmpov: {
      name: 'Phnom Penh - Chbar Ampov District',
      description: 'Our Chbar Ampov branch is a growing fitness hub with a wide range of fitness options. It is known for its clean, friendly atmosphere and top-tier trainers who can help guide you to your fitness goals.',
      imageSrc: '/img3.png',  // Example image path
      address: 'Chbar Ampov, Phnom Penh, Cambodia',
      contact: '+855 23 234 567',
      hours: 'Mon - Fri: 7 AM - 9 PM, Sat - Sun: 9 AM - 5 PM',
    },
    SenSok: {
      name: 'Phnom Penh - Sen Sok District',
      description: 'The Sen Sok gym offers an advanced selection of fitness equipment and training programs tailored to all fitness levels. A fantastic place to build strength and improve overall health.',
      imageSrc: '/img4.png',  // Example image path
      address: 'Sen Sok, Phnom Penh, Cambodia',
      contact: '+855 23 345 678',
      hours: 'Mon - Fri: 6 AM - 10 PM, Sat - Sun: 8 AM - 6 PM',
    },
    DaunPenh: {
      name: 'Phnom Penh - Daun Penh District',
      description: 'The Daun Penh branch is located in a lively area offering a full range of equipment and training services. With spacious facilities, it’s a great place to enhance your fitness.',
      imageSrc: '/img5.png',  // Example image path
      address: 'Daun Penh, Phnom Penh, Cambodia',
      contact: '+855 23 567 890',
      hours: 'Mon - Fri: 6 AM - 10 PM, Sat - Sun: 8 AM - 6 PM',
    },
    RusseyKeo: {
      name: 'Phnom Penh - Russey Keo District',
      description: 'Our Russey Keo branch is known for its excellent service and high-quality gym equipment. It provides a welcoming atmosphere for fitness enthusiasts of all levels.',
      imageSrc: '/img6.png',  // Example image path
      address: 'Russey Keo, Phnom Penh, Cambodia',
      contact: '+855 23 678 901',
      hours: 'Mon - Fri: 6 AM - 10 PM, Sat - Sun: 8 AM - 6 PM',
    },
    Meanchey: {
      name: 'Phnom Penh - Meanchey District',
      description: 'The Meanchey gym is a well-equipped fitness center providing a variety of training options, from individual workouts to group sessions in a supportive environment.',
      imageSrc: '/img7.png',  // Example image path
      address: 'Meanchey, Phnom Penh, Cambodia',
      contact: '+855 23 789 012',
      hours: 'Mon - Fri: 6 AM - 10 PM, Sat - Sun: 8 AM - 6 PM',
    },
    '7Makara': {
      name: 'Phnom Penh - Khan 7 Makara District',
      description: 'Located in the bustling Khan 7 Makara district, this branch offers everything you need to stay fit, including professional trainers and modern workout facilities.',
      imageSrc: '/img8.png',  // Example image path
      address: 'Khan 7 Makara, Phnom Penh, Cambodia',
      contact: '+855 23 890 123',
      hours: 'Mon - Fri: 6 AM - 10 PM, Sat - Sun: 8 AM - 6 PM',
    },
  };

  // Check if the branch location exists in the data
  const branch = branchData[location || 'ToulKork']; // Default to ToulKork if no location is provided

  if (!branch) {
    return <div>Branch not found.</div>; // Fallback if branch data is not found
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-2 p-2 sm:max-w-xs sm:w-full mx-auto">
      <button 
        onClick={() => navigate('/branch')}  // Go to the Branch page
        className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded mb-4 mr-55"
      >
        Back
      </button>

      {/* Branch Image */}
      <img src={branch.imageSrc} alt={branch.name} className="w-full max-w-[400px] rounded-md mb-4 sm:max-w-[300px]" />

      {/* Branch Name */}
      <div className="text-2xl font-bold text-center sm:text-lg">{branch.name}</div>

      {/* Branch Description */}
      <p className="mt-2 text-sm text-gray-600 text-center sm:text-xs">{branch.description}</p>

      {/* Branch Address */}
      <p className="mt-2 text-sm text-gray-600 text-center sm:text-xs"> <b>Address:</b> {branch.address}</p>

      {/* Branch Contact */}
      <p className="mt-2 text-sm text-gray-600 text-center sm:text-xs"><b>Contact:</b> {branch.contact}</p>

      {/* Branch Hours */}
      <p className="mt-2 text-sm text-gray-600 text-center sm:text-xs"><b>Hours:</b> {branch.hours}</p>
    </div>
  );
};

export default BranchDetailPage;
