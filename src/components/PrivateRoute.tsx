
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import BottomNavigation from "./BottomNavigation";

export default function PrivateRoute() {
  const { currentUser } = useAuth();

  return currentUser ? (
    <div className="pb-16">
      <Outlet />
      <BottomNavigation />
    </div>
  ) : (
    <Navigate to="/welcome" replace />
  );
}
