
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import RecipeCard from "@/components/RecipeCard";
import { useNavigate } from "react-router-dom";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, limit, orderBy } from "firebase/firestore";

// Sample data for initial UI
const sampleRecipes = [
  {
    id: "1",
    name: "Tomato Egg",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    creator: {
      name: "Bee Lan's Kitchen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    cuisine: "Chinese",
    level: "Beginner",
    cookTime: "15-20mins",
    rating: 4.9,
    reviews: 66,
  },
  {
    id: "2",
    name: "Avocado Toast",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=872&q=80",
    creator: {
      name: "Robert",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    cuisine: "Western",
    level: "Beginner",
    cookTime: "10mins",
    rating: 4.5,
    reviews: 42,
  },
  {
    id: "3",
    name: "Chicken Curry",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    creator: {
      name: "Krystal",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    },
    cuisine: "Indian",
    level: "Intermediate",
    cookTime: "30-40mins",
    rating: 4.7,
    reviews: 89,
  },
];

export default function HomePage() {
  const { currentUser } = useAuth();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("User");
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.email) {
      setUsername(currentUser.email.split("@")[0]);
    }
    
    // In a real app, we would fetch recipes from Firestore here
    // This is a simplified example
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        // Fetch real recipes here
        // const recipesRef = collection(db, "recipes");
        // const q = query(recipesRef, orderBy("createdAt", "desc"), limit(10));
        // const snapshot = await getDocs(q);
        // const recipeData = snapshot.docs.map(doc => ({
        //   id: doc.id,
        //   ...doc.data()
        // }));
        // setRecipes(recipeData);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    // Uncomment to fetch real recipes
    // fetchRecipes();
  }, [currentUser]);

  const handleSearch = () => {
    navigate("/explore");
  };

  return (
    <div className="pb-20">
      <header className="bg-secondary p-4 sticky top-0 z-10">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-gray-500 text-sm">Hello, {username}!</p>
            <h1 className="text-2xl font-bold text-gray-700">What would you like</h1>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/lego/1.jpg"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Find recipes..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-salad-primary"
              onClick={handleSearch}
              readOnly
            />
            <svg
              className="absolute left-3 top-2.5 text-gray-400 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button
            onClick={() => navigate("/explore")}
            className="bg-white p-2 rounded-lg border border-gray-300"
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </button>
        </div>
      </header>
      
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Recommended For You</h2>
          <button className="text-salad-primary text-sm">View All</button>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-salad-primary"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
