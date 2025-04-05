
import { Link, useLocation } from "react-router-dom";
import { Home, ChefHat, Users, User } from "lucide-react";

export default function BottomNavigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex justify-around items-center px-4">
      <Link 
        to="/" 
        className={`flex flex-col items-center ${isActive('/') ? 'text-salad-primary' : 'text-gray-500'}`}
      >
        <Home size={24} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      
      <Link 
        to="/explore" 
        className={`flex flex-col items-center ${isActive('/explore') ? 'text-salad-primary' : 'text-gray-500'}`}
      >
        <ChefHat size={24} />
        <span className="text-xs mt-1">Explore</span>
      </Link>
      
      <Link 
        to="/community" 
        className={`flex flex-col items-center ${isActive('/community') ? 'text-salad-primary' : 'text-gray-500'}`}
      >
        <Users size={24} />
        <span className="text-xs mt-1">Community</span>
      </Link>
      
      <Link 
        to="/profile" 
        className={`flex flex-col items-center ${isActive('/profile') ? 'text-salad-primary' : 'text-gray-500'}`}
      >
        <User size={24} />
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </div>
  );
}
