import { Routes, Route, Navigate } from "react-router-dom";
import SistemaLayout from "./components/SistemaLayout";
import Dashboard from "./pages/Dashboard";
import DashboardTest from "./pages/DashboardTest";
import Politicos from "./pages/Politicos";
import PoliticosSimples from "./pages/PoliticosSimples";
import PoliticosOtimizado from "./pages/PoliticosOtimizado";
import PoliticosPaginado from "./pages/PoliticosPaginado";
import PoliticosComFotosReais from "./pages/PoliticosComFotosReais";
import PoliticosComAPICompleta from "./pages/PoliticosComAPICompleta";
import Fiscalizacao from "./pages/Fiscalizacao";
import Eleicoes from "./pages/Eleicoes";
import TinderPage from "./pages/TinderPage";
import Perfil from "./pages/Perfil";

function SistemaApp() {
  return (
    <Routes>
      <Route path="/" element={<SistemaLayout />}>
        <Route index element={<Navigate to="/sistema/perfil" replace />} />
        <Route path="politicos" element={<PoliticosComAPICompleta />} />
        <Route path="fiscalizacao" element={<Fiscalizacao />} />
        <Route path="eleicoes" element={<Eleicoes />} />
        <Route path="tinder" element={<TinderPage />} />
        <Route path="perfil" element={<Perfil />} />
        <Route
          path="tinder/matches"
          element={
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold">Seus Matches</h2>
              <p className="text-gray-600 mt-2">
                Lista dos políticos que você curtiu
              </p>
            </div>
          }
        />
        <Route
          path="boost"
          element={
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold">Boost</h2>
              <p className="text-gray-600 mt-2">
                Impulsione sua visibilidade política
              </p>
            </div>
          }
        />
        <Route
          path="vibe"
          element={
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold">Vibe</h2>
              <p className="text-gray-600 mt-2">
                Descubra tendências políticas
              </p>
            </div>
          }
        />
        {/* Rota antiga de perfil removida */}
        {/* Redirect any unknown routes to dashboard */}
        <Route path="*" element={<Navigate to="/sistema/" replace />} />
      </Route>
    </Routes>
  );
}

export default SistemaApp;
