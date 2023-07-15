import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Login } from "./components/Login.jsx";
import { Register } from "./components/Register.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
