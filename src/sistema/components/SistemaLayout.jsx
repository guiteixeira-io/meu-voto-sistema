import { Outlet } from "react-router-dom";
import SistemaHeader from "./SistemaHeader";
import SistemaFooter from "./SistemaFooter";
import Sidebar from "./Sidebar";
import useSidebar from "../hooks/useSidebar";

import { useState } from "react";

const SistemaLayout = () => {
  const { isOpen, setIsOpen, toggleSidebar } = useSidebar();
  // Estado para controlar o item selecionado do Sidebar
  const [selectedNav, setSelectedNav] = useState("Descobrir");

  // Conteúdo dinâmico para a área de 15%
  const renderDynamicContent = () => {
    switch (selectedNav) {
      case "Descobrir":
        return (
          <div className="p-4 space-y-6">
            {/* Header */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center space-x-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                <h1 className="text-2xl font-bold text-gray-900">
                  Descobrir Políticos
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 text-pink-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
              <p className="text-base text-gray-600 max-w-xs">
                Descubra políticos que compartilham suas ideias e valores.
                Analise propostas e tome decisões conscientes!
              </p>
            </div>
            {/* Como funciona */}
            <div className="bg-gradient-to-r from-pink-50 to-orange-50 border border-pink-200 rounded-xl p-4">
              <div className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-pink-600 mt-1 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 016.364 0l.318.318.318-.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-pink-900 mb-2">
                    Como funciona?
                  </h3>
                  <ul className="text-sm text-pink-800 space-y-1">
                    <li>
                      • <strong>Botão verde (❤️)</strong> ou tecla{" "}
                      <kbd className="bg-white px-1 py-0.5 rounded text-xs">
                        L
                      </kbd>
                      : Dar like no político
                    </li>
                    <li>
                      • <strong>Botão vermelho (❌)</strong> ou tecla{" "}
                      <kbd className="bg-white px-1 py-0.5 rounded text-xs">
                        D
                      </kbd>
                      : Rejeitar político
                    </li>
                    <li>
                      • <strong>Botão laranja (🚩)</strong>: Denunciar conteúdo
                      inadequado
                    </li>
                    <li>• Leia as propostas e experiência antes de decidir</li>
                    <li>• Use o botão ℹ️ para ver mais detalhes</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Guia de controles do teclado atualizado */}
            <div className="bg-gray-900 rounded-xl p-4 flex flex-wrap items-center gap-3 mt-2">
              <span className="flex items-center gap-1 text-white">
                <kbd className="bg-gray-800 px-2 py-1 rounded">←</kbd> Passar
                (❌)
              </span>
              <span className="flex items-center gap-1 text-white">
                <kbd className="bg-gray-800 px-2 py-1 rounded">→</kbd> Curtir
                (❤️)
              </span>
              <span className="flex items-center gap-1 text-white">
                <kbd className="bg-gray-800 px-2 py-1 rounded">R</kbd> Denunciar
                (🚩)
              </span>
              <span className="flex items-center gap-1 text-white">
                <kbd className="bg-gray-800 px-2 py-1 rounded">I</kbd> Mais
                informações (ℹ️)
              </span>
            </div>
          </div>
        );
      case "3 Poderes":
        return (
          <div className="p-4 text-sm text-gray-700">
            <div className="mb-4 font-bold text-base text-gray-800">
              Navegação dos 3 Poderes
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="/sistema/politicos"
                  className="block px-3 py-2 rounded hover:bg-blue-100 text-blue-700 font-semibold transition"
                >
                  Políticos
                </a>
              </li>
              <li>
                <span className="block px-3 py-2 rounded text-green-700 font-semibold cursor-not-allowed bg-gray-100">
                  PLs <span className="text-xs text-gray-500">(em breve)</span>
                </span>
              </li>
              <li>
                <span className="block px-3 py-2 rounded text-purple-700 font-semibold cursor-not-allowed bg-gray-100">
                  PECs <span className="text-xs text-gray-500">(em breve)</span>
                </span>
              </li>
            </ul>
          </div>
        );
      case "Fiscalização":
        return (
          <div className="p-4 text-sm text-gray-700">
            Acompanhe denúncias e fiscalize políticos.
            <br />
            Envie novas denúncias aqui.
          </div>
        );
      case "Matches":
        return (
          <div className="p-4 text-sm text-gray-700">
            Veja os políticos que você curtiu.
            <br />
            Entre em contato ou acompanhe novidades.
          </div>
        );
      case "Boost":
        return (
          <div className="p-4 text-sm text-gray-700">
            Impulsione sua visibilidade política.
            <br />
            Aumente suas chances de matches.
          </div>
        );
      case "Vibe":
        return (
          <div className="p-4 text-sm text-gray-700">
            Descubra tendências políticas.
            <br />
            Explore diferentes perspectivas.
          </div>
        );
      case "Perfil":
        return (
          <div className="p-4 text-sm text-gray-700">
            Gerencie seu perfil e preferências.
            <br />
            Atualize suas informações pessoais.
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header fixo no topo */}
      <SistemaHeader onMenuClick={toggleSidebar} />

      {/* Container principal com sidebar, área dinâmica e conteúdo */}
      <div className="flex flex-row">
        {/* Sidebar */}
        <div
          className="hidden lg:flex overflow-y-auto"
          style={{
            width: "5vw",
            minWidth: 56,
            maxWidth: 96,
            height: "calc(100vh - 4rem)",
            zIndex: 10,
          }}
        >
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setSelectedNav={setSelectedNav}
          />
        </div>
        {/* Área dinâmica de 15% */}
        <div
          className="hidden lg:block overflow-y-auto"
          style={{
            width: "20vw",
            minWidth: 180,
            maxWidth: 340,
            background: "#f8fafc",
            borderRight: "1px solid #e5e7eb",
            height: "calc(100vh - 4rem)",
          }}
        >
          {renderDynamicContent()}
        </div>
        {/* Main Content Area */}
        <div
          className="flex-1 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 4rem)" }}
        >
          <main className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
          <SistemaFooter />
        </div>
      </div>
    </div>
  );
};

export default SistemaLayout;
