import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import SiteLayout from "./components/SiteLayout";
import Home from "./pages/Home";
import { AuthContext } from "../contexts/AuthContext";

function SiteApp() {
  const { isAuthenticated, loading } = useContext(AuthContext);

  // Se o usuário estiver logado, redireciona para o sistema
  if (isAuthenticated && !loading) {
    return <Navigate to="/sistema" replace />;
  }

  // Se ainda está carregando, mostra um loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </SiteLayout>
  );
}

export default SiteApp;
