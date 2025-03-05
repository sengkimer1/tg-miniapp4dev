import { useState } from "react";
import { X, Menu, Home, Dumbbell, BadgePercent, Ticket, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-4 focus:outline-none"
      >
        <Menu className="text-black" size={28} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-green-700 p-6 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:block`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 md:hidden"
        >
          <X className="text-white" size={28} />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col mt-14 space-y-6">
          {[
            { to: "/", label: "Home", icon: <Home size={22} /> },
            { to: "/workout-plan", label: "Workout", icon: <Dumbbell size={22} /> },
            { to: "/membership", label: "Membership", icon: <Users size={22} /> },
            { to: "/promotion", label: "Promotion", icon: <BadgePercent size={22} /> },
            { to: "/coupon", label: "Coupon", icon: <Ticket size={22} /> },
            { to: "/branch", label: "Branch", icon: <MapPin size={22} /> },
            { to: "/info", label: "MemberInfo", icon: <MapPin size={22} /> },

          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center space-x-3 text-white text-lg hover:text-gray-300 transition px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
