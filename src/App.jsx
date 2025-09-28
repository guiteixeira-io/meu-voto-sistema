import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SiteApp from "./site/SiteApp";
import SistemaApp from "./sistema/SistemaApp";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rotas do Site Público */}
          <Route path="/" element={<SiteApp />} />

          {/* Rotas de Autenticação */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />

          {/* Rotas do Sistema (Área Logada) - Protegidas */}
          <Route
            path="/sistema/*"
            element={
              <PrivateRoute>
                <SistemaApp />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
