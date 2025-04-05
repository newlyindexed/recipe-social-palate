
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary">
      <div className="animate-pulse">
        <img 
          src="/lovable-uploads/3576e68d-8f8d-41c8-9660-f1262e9531f0.png" 
          alt="Not Just Salad Logo" 
          className="w-48 h-48"
        />
      </div>
      
      <div className="mt-6 grid grid-cols-4 gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i} 
            className="w-8 h-8 rounded-full bg-salad-primary opacity-20 animate-pulse"
            style={{ 
              animationDelay: `${i * 0.1}s`,
              animationDuration: "1.5s" 
            }}
          />
        ))}
      </div>
    </div>
  );
}
