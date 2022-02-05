import React, { useContext, useState, useEffect } from "react";
import { supabase } from "../database/supabaseClient";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // Check active sessions and sets the user
    const session = supabase.auth.session();

    setUser(session?.user ?? null);
    setLoading(false);

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  // Will be passed down to Signup, Login and Dashboard components
  const value = {
    signUp: async (signupVo) => {
      // Calls `signUp` function from the context
      const { error } = await supabase.auth.signUp(signupVo);

      if (error) {
        console.log("signUp error", error);
        alert("Error signup, please check: " + (error?.message || "Contact support"));
      } else {
        console.log("signUp user", user);
        alert("Please check your email to verify your email now");
        navigate("/login");
      }
    },
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
