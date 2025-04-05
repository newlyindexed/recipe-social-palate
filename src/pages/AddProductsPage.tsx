
import { useState } from "react";
import { Link } from "react-router-dom";

// Sample ingredients for the ingredients selection page
const sampleIngredients = [
  {
    id: "i1",
    name: "Tomato",
    image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: "i2",
    name: "Salt",
    image: "https://images.unsplash.com/photo-1519917318765-d6caddddf8b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: "i3",
    name: "Ketchup",
    image: "https://images.unsplash.com/photo-1631289994647-675fb4128bcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: "i4",
    name: "Light Soy Sauce",
    image: "https://images.unsplash.com/photo-1620894169431-dba3c9abf2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: "i5",
    name: "Butter",
    image: "https://images.unsplash.com/photo-1589985270958-a664f78bd8b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: "i6",
    name: "Egg",
    image: "https://images.unsplash.com/photo-1489726644834-24c6c1c9542b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: "i7",
    name: "Potato",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: "i8",
    name: "Bread",
    image: "https://images.unsplash.com/photo-1601233242964-9809d8ed0c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: "i9",
    name: "Green Onion",
    image: "https://images.unsplash.com/photo-1522767131594-6b7e96848fba?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: "i10",
    name: "Sugar",
    image: "https://images.unsplash.com/photo-1581846303137-9c5e91e52990?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: "i11",
    name: "Yellow Onion",
    image: "https://images.unsplash.com/photo-1620574387535-233ded254660?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: "i12",
    name: "Chicken Wing",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
];

export default function AddProductsPage() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const toggleIngredient = (id: string) => {
    if (selectedIngredients.includes(id)) {
      setSelectedIngredients(selectedIngredients.filter(item => item !== id));
    } else {
      setSelectedIngredients([...selectedIngredients, id]);
    }
  };
  
  const filteredIngredients = searchQuery
    ? sampleIngredients.filter(ingredient => 
        ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : sampleIngredients;
  
  return (
    <div className="min-h-screen bg-secondary pb-16">
      <header className="bg-secondary p-4 sticky top-0 z-10">
        <h1 className="text-xl font-bold">Add Products</h1>
        
        <div className="mt-3 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Find products..."
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
      </header>
      
      <main className="p-4">
        <div className="grid grid-cols-3 gap-3">
          {filteredIngredients.map(ingredient => (
            <div 
              key={ingredient.id}
              className="aspect-square bg-white rounded-lg p-3 flex flex-col items-center justify-center relative"
            >
              <div className="absolute top-3 right-3">
                <input
                  type="checkbox"
                  checked={selectedIngredients.includes(ingredient.id)}
                  onChange={() => toggleIngredient(ingredient.id)}
                  className="w-4 h-4 text-salad-primary bg-white border-gray-300 rounded focus:ring-1 focus:ring-salad-primary"
                />
              </div>
              <img 
                src={ingredient.image} 
                alt={ingredient.name} 
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="text-xs text-center">{ingredient.name}</span>
            </div>
          ))}
        </div>
      </main>
      
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex justify-around items-center px-4">
        <Link 
          to="/"
          className="flex flex-col items-center text-gray-500"
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
            />
          </svg>
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link 
          to="/explore"
          className="flex flex-col items-center text-salad-primary"
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
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
            />
          </svg>
          <span className="text-xs mt-1">Chef</span>
        </Link>
        
        <Link 
          to="#"
          className="flex flex-col items-center text-gray-500"
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          <span className="text-xs mt-1">Calendar</span>
        </Link>
        
        <Link 
          to="/community"
          className="flex flex-col items-center text-gray-500"
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
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" 
            />
          </svg>
          <span className="text-xs mt-1">Community</span>
        </Link>
      </div>
    </div>
  );
}
