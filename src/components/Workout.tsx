import React from 'react';
import { FaRunning, FaDumbbell, FaBicycle } from 'react-icons/fa';

// Type definition for workout
type Workout = {
  name: string;
  icon: React.ReactNode;  // Define the type for the icon prop
};

// List of workouts
const workouts: Workout[] = [
  {
    name: '🏋️ Arnold Schwarzenegger’s Classic Workout Plan. ',
    icon: <FaRunning />,
  },
  {
    name: '🏋️ Bruce Lee Inspired Workout Plan .',
    icon: <FaDumbbell />,
  },
  {
    name: ' 🏋️‍♀️ Gal Gadot Inspired Workout Plan. ',
    icon: <FaBicycle />,
  },
  {
    name: ' 🏋️‍♀️ Full-Body Functional Fitness Plan. ',
    icon: <FaBicycle />,
  },
];

const WorkoutPlan: React.FC = () => {
  return (
    <div className="py-10 ">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Workout Plan</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 ">
        {workouts.map((workout, index) => (
          <div
            key={index}
            className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            {/* <div className="text-6xl mb-4 text-black text-center">{workout.icon}</div> */}
            <h3 className="text-xl font-semibold text-green-500">{workout.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlan;
