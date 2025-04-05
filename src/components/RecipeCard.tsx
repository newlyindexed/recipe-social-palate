
import { Link } from "react-router-dom";

interface RecipeCardProps {
  id: string;
  name: string;
  image: string;
  creator: {
    name: string;
    avatar: string;
  };
  cuisine: string;
  level: string;
  cookTime: string;
  rating: number;
  reviews: number;
}

export default function RecipeCard({
  id,
  name,
  image,
  creator,
  cuisine,
  level,
  cookTime,
  rating,
  reviews,
}: RecipeCardProps) {
  return (
    <Link to={`/recipe/${id}`} className="block">
      <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow mb-4 bg-white">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <h3 className="text-white text-lg font-bold">{name}</h3>
            <div className="flex items-center mt-1">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-6 h-6 rounded-full mr-2"
              />
              <span className="text-white text-sm">{creator.name}</span>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">({reviews})</span>
            </div>
            <span className="text-xs text-gray-500">{cookTime}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            <span className="text-xs bg-salad-secondary text-gray-700 py-1 px-2 rounded-full">
              {cuisine}
            </span>
            <span className="text-xs bg-salad-secondary text-gray-700 py-1 px-2 rounded-full">
              {level}
            </span>
          </div>
          <div className="mt-3 flex justify-between">
            <button className="text-xs text-gray-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2"
                />
              </svg>
              Looks Delicious
            </button>
            <button className="text-xs text-gray-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              I Want to Make It
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
