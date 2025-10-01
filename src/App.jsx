import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SiteApp from "./site/SiteApp";
import SistemaApp from "./sistema/SistemaApp";
import PrivateRoute from "./components/PrivateRoute";
import { LoginPage, RegisterPage, ForgotPasswordPage } from "./features/auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rotas do Site Público */}
          <Route path="/" element={<SiteApp />} />

          {/* Rotas de Autenticação */}
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route
            path="/auth/forgot-password"
            element={<ForgotPasswordPage />}
          />

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
