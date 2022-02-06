import "./App.css";
import Form from "./components/Form";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import Header from "./components/Header";
import Tracking from "./components/Tracking";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="dark:bg-gray-800 min-h-screen">
      <BrowserRouter>
        <AuthProvider>
          <Header />
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
                  <Form />
                </RequireAuth>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
