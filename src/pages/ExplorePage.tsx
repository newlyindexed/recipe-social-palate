
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "@/components/RecipeCard";

// Sample data for the explore page
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
    id: "4",
    name: "Spinach Pasta",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    creator: {
      name: "Jack",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    cuisine: "Italian",
    level: "Intermediate",
    cookTime: "25mins",
    rating: 4.2,
    reviews: 37,
  },
  {
    id: "5",
    name: "Vegetable Stir Fry",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    creator: {
      name: "Yivonne",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    cuisine: "Chinese",
    level: "Beginner",
    cookTime: "15mins",
    rating: 4.4,
    reviews: 52,
  },
];

// Filter options
const dietOptions = ["Veg", "Non-Veg", "Vegan", "Keto", "Dairy-free", "Gluten-free"];
const cuisineOptions = ["Malay", "Chinese", "Indian", "Japanese", "Korean", "Western", "Others"];
const skillOptions = ["Beginner", "Intermediate", "Chef Level"];

export default function ExplorePage() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [selectedDiet, setSelectedDiet] = useState<string[]>([]);
  const [selectedCuisine, setSelectedCuisine] = useState<string[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleDietFilter = (diet: string) => {
    if (selectedDiet.includes(diet)) {
      setSelectedDiet(selectedDiet.filter(item => item !== diet));
    } else {
      setSelectedDiet([...selectedDiet, diet]);
    }
  };

  const toggleCuisineFilter = (cuisine: string) => {
    if (selectedCuisine.includes(cuisine)) {
      setSelectedCuisine(selectedCuisine.filter(item => item !== cuisine));
    } else {
      setSelectedCuisine([...selectedCuisine, cuisine]);
    }
  };

  const toggleSkillFilter = (skill: string) => {
    if (selectedSkill.includes(skill)) {
      setSelectedSkill(selectedSkill.filter(item => item !== skill));
    } else {
      setSelectedSkill([...selectedSkill, skill]);
    }
  };

  const resetFilters = () => {
    setSelectedDiet([]);
    setSelectedCuisine([]);
    setSelectedSkill([]);
  };

  const applyFilters = () => {
    // In a real app, this would filter based on the selected options
    setShowFilters(false);
  };

  return (
    <div className="pb-20 relative">
      <header className="bg-secondary p-4 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-center mb-4">Explore Recipes</h1>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search recipes..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-salad-primary"
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
            onClick={() => setShowFilters(!showFilters)}
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
      
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 z-20 flex items-end">
          <div className="bg-white rounded-t-xl w-full p-4 animate-slide-in-up">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button 
                onClick={resetFilters}
                className="text-salad-accent text-sm font-medium"
              >
                RESET
              </button>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Diet</h3>
              <div className="flex flex-wrap gap-2">
                {dietOptions.map((diet) => (
                  <button
                    key={diet}
                    onClick={() => toggleDietFilter(diet)}
                    className={`py-1 px-3 rounded-full text-sm ${
                      selectedDiet.includes(diet)
                        ? "bg-salad-accent text-salad-accent-foreground"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {diet}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Cuisine</h3>
              <div className="flex flex-wrap gap-2">
                {cuisineOptions.map((cuisine) => (
                  <button
                    key={cuisine}
                    onClick={() => toggleCuisineFilter(cuisine)}
                    className={`py-1 px-3 rounded-full text-sm ${
                      selectedCuisine.includes(cuisine)
                        ? "bg-salad-accent text-salad-accent-foreground"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {cuisine}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Skill Level</h3>
              <div className="flex flex-wrap gap-2">
                {skillOptions.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkillFilter(skill)}
                    className={`py-1 px-3 rounded-full text-sm ${
                      selectedSkill.includes(skill)
                        ? "bg-salad-accent text-salad-accent-foreground"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 py-2 border border-salad-accent rounded-md text-salad-accent"
              >
                CLOSE
              </button>
              <button
                onClick={applyFilters}
                className="flex-1 py-2 bg-salad-accent text-white rounded-md"
              >
                APPLY
              </button>
            </div>
          </div>
        </div>
      )}
      
      <main className="p-4">
        <div className="space-y-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </main>
      
      <button
        onClick={() => navigate("/add-products")}
        className="fixed bottom-20 right-4 bg-salad-primary text-white p-3 rounded-full shadow-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
}
