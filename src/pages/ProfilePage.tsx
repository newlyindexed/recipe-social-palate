
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

// Sample data for the profile page
const sampleRecipes = [
  {
    id: "r1",
    name: "Veggie Stir Fry",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: "r2",
    name: "Avocado Toast",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=872&q=80"
  },
  {
    id: "r3",
    name: "Tomato Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=771&q=80"
  }
];

export default function ProfilePage() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/welcome");
    } catch (error) {
      console.error("Failed to log out", error);
      toast.error("Failed to log out");
    }
  };
  
  const username = currentUser?.email ? currentUser.email.split("@")[0] : "User";
  
  return (
    <div className="pb-20">
      <header className="bg-secondary p-4 flex items-center">
        <button 
          onClick={() => navigate(-1)}
          className="mr-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1 className="text-xl font-bold text-center flex-1 pr-6">Profile</h1>
      </header>
      
      <div className="p-4 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-yellow-300 overflow-hidden mb-3">
          <img
            src="https://randomuser.me/api/portraits/lego/1.jpg"
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h2 className="text-xl font-bold mb-1">{username}</h2>
        
        <p className="text-gray-500 text-sm mb-4">
          Connect to {currentUser?.email || "user@gmail.com"}
        </p>
        
        <div className="flex w-full justify-center gap-4 mb-6">
          <div className="text-center">
            <p className="font-semibold">23</p>
            <p className="text-xs text-gray-500">Following</p>
          </div>
          
          <div className="text-center">
            <p className="font-semibold">2</p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>
        </div>
        
        <div className="w-full space-y-3 mb-6">
          <button className="w-full py-3 bg-salad-primary text-white rounded-md flex items-center justify-center">
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
              />
            </svg>
            Manage Account
          </button>
          
          <button className="w-full py-3 bg-salad-primary text-white rounded-md flex items-center justify-center">
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
              />
            </svg>
            Notifications
          </button>
          
          <button className="w-full py-3 bg-salad-primary text-white rounded-md flex items-center justify-center">
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            Help Center
          </button>
          
          <button className="w-full py-3 bg-salad-primary text-white rounded-md flex items-center justify-center">
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
            Collections
          </button>
        </div>
        
        <div className="w-full">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">My Recipes</h3>
            <button className="text-salad-primary text-sm">View All</button>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {sampleRecipes.map(recipe => (
              <div key={recipe.id} className="aspect-square rounded-md overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={handleLogout}
          className="mt-8 py-2 px-6 bg-red-500 text-white rounded-md"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
