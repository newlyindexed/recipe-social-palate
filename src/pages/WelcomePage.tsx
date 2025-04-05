
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-salad-primary p-6 text-center">
      <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-6">
        <img 
          src="/lovable-uploads/3576e68d-8f8d-41c8-9660-f1262e9531f0.png" 
          alt="Not Just Salad Logo" 
          className="w-32 h-32"
        />
      </div>
      
      <h1 className="text-white text-xl font-semibold mb-2">Welcome to Not Just Salad</h1>
      <p className="text-white text-sm mb-12">
        "Your Journey to Smarter, Healthier Meals Starts Here!"
      </p>
      
      <div className="w-full max-w-xs space-y-4">
        <Link
          to="/login"
          className="block w-full bg-white text-salad-primary rounded-md py-3 font-medium"
        >
          Log In
        </Link>
        
        <Link
          to="/signup"
          className="block w-full bg-white text-salad-primary rounded-md py-3 font-medium"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
