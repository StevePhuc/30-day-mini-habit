import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

export default function RequireAuth({ children, redirectTo }) {
  const { user } = useAuth();

  let isAuthenticated = user?.id;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
