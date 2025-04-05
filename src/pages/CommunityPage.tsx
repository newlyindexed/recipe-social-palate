
import { useState } from "react";
import UserProfileCard from "@/components/UserProfileCard";

// Sample data for community page
const sampleUsers = [
  {
    id: "user1",
    name: "Krystal",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    followers: 1300,
    isFollowing: true,
  },
  {
    id: "user2",
    name: "Bee Lan's Kitchen",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    followers: 1800,
    isFollowing: true,
  },
  {
    id: "user3",
    name: "Robert",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    followers: 200,
    isFollowing: false,
  },
  {
    id: "user4",
    name: "Jack",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    followers: 400,
    isFollowing: false,
  },
  {
    id: "user5",
    name: "Yivonne",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    followers: 3000,
    isFollowing: false,
  },
  {
    id: "user6",
    name: "Lizz",
    avatar: "https://randomuser.me/api/portraits/women/89.jpg",
    followers: 784,
    isFollowing: false,
  },
  {
    id: "user7",
    name: "Zorro",
    avatar: "",
    followers: 2000,
    isFollowing: false,
  },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<"suggestions" | "following">("suggestions");
  const [users, setUsers] = useState(sampleUsers);
  
  const suggestions = users.filter(user => !user.isFollowing);
  const following = users.filter(user => user.isFollowing);
  
  const handleFollow = (userId: string) => {
    setUsers(
      users.map(user => 
        user.id === userId 
          ? { ...user, isFollowing: !user.isFollowing }
          : user
      )
    );
  };
  
  return (
    <div className="pb-20">
      <header className="bg-secondary p-4 sticky top-0 z-10 flex items-center justify-between">
        <svg 
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
          />
        </svg>
        <h1 className="text-xl font-bold">Community</h1>
        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/lego/1.jpg"
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </header>
      
      <div className="p-4 flex justify-between items-center">
        <button 
          className={`py-1 px-4 rounded-full ${
            activeTab === "following" 
              ? "bg-salad-primary text-white" 
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveTab("following")}
        >
          {following.length} Following
        </button>
        <button 
          className={`py-1 px-4 rounded-full ${
            activeTab === "suggestions" 
              ? "bg-salad-primary text-white" 
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveTab("suggestions")}
        >
          Suggestions
        </button>
      </div>
      
      <div className="px-4">
        {activeTab === "following" ? (
          <div>
            {following.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">You're not following anyone yet.</p>
              </div>
            ) : (
              following.map(user => (
                <UserProfileCard
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  avatar={user.avatar}
                  followers={user.followers}
                  isFollowing={user.isFollowing}
                  onFollow={() => handleFollow(user.id)}
                />
              ))
            )}
          </div>
        ) : (
          <div>
            {suggestions.map(user => (
              <div key={user.id} className="mb-6">
                <UserProfileCard
                  id={user.id}
                  name={user.name}
                  avatar={user.avatar}
                  followers={user.followers}
                  isFollowing={user.isFollowing}
                  onFollow={() => handleFollow(user.id)}
                />
                
                {user.id === "user7" && (
                  <div className="grid grid-cols-3 gap-1 mt-2">
                    <img 
                      src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                      alt="Food" 
                      className="w-full h-24 object-cover rounded-md"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                      alt="Food" 
                      className="w-full h-24 object-cover rounded-md"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                      alt="Food" 
                      className="w-full h-24 object-cover rounded-md"
                    />
                  </div>
                )}
                
                {user.id === "user2" && (
                  <div className="grid grid-cols-3 gap-1 mt-2">
                    <img 
                      src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                      alt="Food" 
                      className="w-full h-24 object-cover rounded-md"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                      alt="Food" 
                      className="w-full h-24 object-cover rounded-md"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                      alt="Food" 
                      className="w-full h-24 object-cover rounded-md"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
