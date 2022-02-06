import "./App.css";
import Habit from "./components/Habit";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tracking from "./components/Tracking";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="dark:bg-gray-800 min-h-screen flex flex-col">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <div className="flex-1">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <RequireAuth redirectTo="/login">
                    <Tracking />
                  </RequireAuth>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />

              <Route
                exact
                path="/habit"
                element={
                  <RequireAuth redirectTo="/login">
                    <Habit />
                  </RequireAuth>
                }
              />
            </Routes>
          </div>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
