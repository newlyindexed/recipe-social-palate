
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-salad-primary p-6 text-center">
      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6">
        <img 
          src="/lovable-uploads/5eb7340f-c917-4a8a-a060-e17a2540daab.png" 
          alt="Not Just Salad Logo" 
          className="w-24 h-24"
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
