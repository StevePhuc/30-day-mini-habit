import { useAuth } from "../contexts/Auth";
import { useNavigate } from "react-router-dom";
export default function Signout() {
  const { signOut } = useAuth();

  const navigate = useNavigate();

  async function handleSignOut() {
    // Ends user session
    await signOut();

    // Redirects the user to Login page
    navigate("/login");
  }

  return <button onClick={handleSignOut}>Sign out</button>;
}
