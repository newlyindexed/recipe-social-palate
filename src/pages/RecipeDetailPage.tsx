
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

// Sample recipe data
const sampleRecipe = {
  id: "1",
  name: "Tomato Egg",
  images: [
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
  ],
  video: "https://example.com/tomato-egg-video.mp4",
  creator: {
    id: "user2",
    name: "Bee Lan's Kitchen",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  rating: 4.9,
  reviews: 66,
  cookTime: "15-20mins",
  calories: 160,
  cuisine: "Chinese",
  skillLevel: "Beginner",
  ingredients: [
    { name: "Eggs", amount: "2" },
    { name: "Tomato", amount: "1" },
    { name: "Salt", amount: "Pinch" },
    { name: "Oil", amount: "Pinch" },
    { name: "Ketchup", amount: "1.5 tsp" },
  ],
  steps: [
    "Lightly whisk the eggs with a pinch of salt. In a non-stick frying pan, heat up a bit of oil. Add the eggs, using a spatula to stir occasionally as the eggs cook evenly, pushing every so often and up with large curds, about 2-3 minits. Put it in the bowl and set aside.",
    "Add abit more oil to the pan and add the tomatoes and cook until the tomatoes start to cook and caramelize, pushing down on the tomatoes to release their juices. Stir in the sugar and ketchup.",
    "When the tomatoes are juicy and bubbling, turn the heat down and let the sauces reduce a bit.",
    "Add the eggs back into the pan briefly and then enjoy on fluffy white rice."
  ],
  userReviews: [
    {
      id: "r1",
      user: {
        id: "u1",
        name: "Krystal",
        avatar: "https://randomuser.me/api/portraits/women/67.jpg",
      },
      rating: 5,
      text: "This was so good!!!",
      image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvJTIwZWdnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      likes: 28,
      comments: 2,
    },
    {
      id: "r2",
      user: {
        id: "u2",
        name: "Robert",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      rating: 4,
      text: "I love this recipe! The tomatoes are perfectly mushy and saucy.",
      image: null,
      likes: 12,
      comments: 0,
    },
  ],
};

export default function RecipeDetailPage() {
  const { recipeId } = useParams();
  const [currentTab, setCurrentTab] = useState<"details" | "steps" | "reviews">("details");
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState("");
  const [isFollowing, setIsFollowing] = useState(false);
  
  // In a real app, we would fetch the recipe data based on recipeId
  const recipe = sampleRecipe;
  
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
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
    );
  };
  
  const handleRatingSelect = (rating: number) => {
    setUserRating(rating);
  };
  
  const handleSubmitReview = () => {
    // In a real app, we would submit the review to a database
    console.log("User rating:", userRating);
    console.log("User review:", userReview);
    setUserRating(0);
    setUserReview("");
  };
  
  return (
    <div className="pb-20">
      {currentTab === "details" && (
        <div>
          <div className="relative">
            <img 
              src={recipe.images[0]} 
              alt={recipe.name} 
              className="w-full h-64 object-cover"
            />
            <Link 
              to="#"
              className="absolute top-4 left-4 bg-white/80 rounded-full p-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </Link>
          </div>
          
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">{recipe.name}</h1>
            <div className="flex items-center mb-3">
              <span className="text-sm">by {recipe.creator.name}</span>
            </div>
            
            <div className="flex items-center mb-4">
              {renderStars(recipe.rating)}
              <span className="text-sm text-gray-500 ml-2">{recipe.rating} ({recipe.reviews}+)</span>
              
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`ml-auto py-1 px-4 rounded-full text-sm ${
                  isFollowing
                    ? "bg-salad-secondary text-salad-primary border border-salad-primary"
                    : "bg-salad-primary text-white"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>
            
            <div className="flex justify-between mb-6 text-sm text-gray-600">
              <span>{recipe.cookTime}</span>
              <span>{recipe.calories} calories</span>
              <span>Cuisine: {recipe.cuisine}</span>
              <span>{recipe.skillLevel} Level</span>
            </div>
            
            <h2 className="font-bold mb-3">Ingredients</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {recipe.ingredients.map((ingredient, index) => (
                <span 
                  key={index} 
                  className="bg-salad-primary text-white py-1 px-3 rounded-full text-sm"
                >
                  {ingredient.amount} {ingredient.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {currentTab === "steps" && (
        <div>
          <div className="relative">
            <div className="w-full h-56 bg-gray-800 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-black/30 flex items-center justify-center">
                <svg 
                  className="w-12 h-12 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
            </div>
            <Link 
              to="#"
              className="absolute top-4 left-4 bg-white/80 rounded-full p-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </Link>
          </div>
          
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Follow the steps</h2>
            
            <div className="space-y-6">
              {recipe.steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-4">
                    <div className="w-8 h-8 rounded-full bg-salad-primary text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {currentTab === "reviews" && (
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">User Reviews & Ratings</h1>
          
          <div className="space-y-4 mb-6">
            {recipe.userReviews.map(review => (
              <div key={review.id} className="p-3 bg-salad-secondary rounded-lg">
                <div className="flex items-center mb-2">
                  <img 
                    src={review.user.avatar} 
                    alt={review.user.name} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-medium">{review.user.name}</h3>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                </div>
                
                <p className="mb-2 text-sm">{review.text}</p>
                
                {review.image && (
                  <img 
                    src={review.image} 
                    alt="User's cooked dish" 
                    className="w-20 h-20 rounded-md object-cover mb-2"
                  />
                )}
                
                <div className="flex items-center text-gray-500 text-xs">
                  <button className="flex items-center mr-4">
                    <svg 
                      className="w-4 h-4 mr-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" 
                      />
                    </svg>
                    {review.likes}
                  </button>
                  
                  <button className="flex items-center">
                    <svg 
                      className="w-4 h-4 mr-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {review.comments}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <h2 className="mb-3">How would you rate this recipe?</h2>
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => handleRatingSelect(rating)}
                  className="w-8 h-8"
                >
                  <svg
                    className={`w-7 h-7 ${
                      rating <= userRating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="mb-2">Write your review</h3>
              <textarea
                value={userReview}
                onChange={(e) => setUserReview(e.target.value)}
                placeholder="Review..."
                className="w-full bg-transparent focus:outline-none mb-3"
                rows={3}
              ></textarea>
              
              <div className="flex justify-end">
                <button
                  onClick={handleSubmitReview}
                  className="bg-salad-primary text-white py-2 px-4 rounded-md"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex justify-around items-center px-4">
        <button
          onClick={() => setCurrentTab("details")}
          className={`flex flex-col items-center ${
            currentTab === "details" ? "text-salad-primary" : "text-gray-500"
          }`}
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
        </button>
        
        <button
          onClick={() => setCurrentTab("steps")}
          className={`flex flex-col items-center ${
            currentTab === "steps" ? "text-salad-primary" : "text-gray-500"
          }`}
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
            />
          </svg>
          <span className="text-xs mt-1">Chef</span>
        </button>
        
        <button
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
        </button>
        
        <button
          onClick={() => setCurrentTab("reviews")}
          className={`flex flex-col items-center ${
            currentTab === "reviews" ? "text-salad-primary" : "text-gray-500"
          }`}
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
          <span className="text-xs mt-1">Reviews</span>
        </button>
      </div>
    </div>
  );
}
