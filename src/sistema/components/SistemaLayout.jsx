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
                  className="block px-3 py-2 rounded hover:bg-primary-100 text-primary-700 font-semibold transition"
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
          <div className="p-4 space-y-4">
            {/* Header do Perfil */}
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-lg font-bold text-gray-900">Perfil</h2>
              <p className="text-sm text-gray-600 mt-1">
                Gerencia seu perfil e preferências
              </p>
            </div>

            {/* Menu de Opções do Perfil */}
            <nav className="space-y-1">
              <button
                onClick={() => {
                  localStorage.setItem("perfilActiveSection", "meus-dados");
                  window.dispatchEvent(
                    new CustomEvent("perfilSectionChange", {
                      detail: "meus-dados",
                    })
                  );
                }}
                className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
              >
                <svg
                  className="mr-3 h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-left">Meus Dados</span>
              </button>

              <button
                onClick={() => {
                  localStorage.setItem("perfilActiveSection", "meu-titulo");
                  window.dispatchEvent(
                    new CustomEvent("perfilSectionChange", {
                      detail: "meu-titulo",
                    })
                  );
                }}
                className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
              >
                <svg
                  className="mr-3 h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-left">Meu Título</span>
              </button>

              <button
                onClick={() => {
                  localStorage.setItem(
                    "perfilActiveSection",
                    "minhas-eleicoes"
                  );
                  window.dispatchEvent(
                    new CustomEvent("perfilSectionChange", {
                      detail: "minhas-eleicoes",
                    })
                  );
                }}
                className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
              >
                <svg
                  className="mr-3 h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span className="text-left">Minhas Eleições</span>
              </button>

              <button
                onClick={() => {
                  localStorage.setItem("perfilActiveSection", "conquistas");
                  window.dispatchEvent(
                    new CustomEvent("perfilSectionChange", {
                      detail: "conquistas",
                    })
                  );
                }}
                className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
              >
                <svg
                  className="mr-3 h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span className="text-left">Conquistas</span>
              </button>

              <button
                onClick={() => {
                  localStorage.setItem("perfilActiveSection", "denuncias");
                  window.dispatchEvent(
                    new CustomEvent("perfilSectionChange", {
                      detail: "denuncias",
                    })
                  );
                }}
                className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
              >
                <svg
                  className="mr-3 h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                <span className="text-left">Denúncias</span>
              </button>

              <button
                onClick={() => {
                  localStorage.setItem(
                    "perfilActiveSection",
                    "realidade-interesses"
                  );
                  window.dispatchEvent(
                    new CustomEvent("perfilSectionChange", {
                      detail: "realidade-interesses",
                    })
                  );
                }}
                className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
              >
                <svg
                  className="mr-3 h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-left">Realidade e Interesses</span>
              </button>

              <button
                onClick={() => {
                  localStorage.setItem("perfilActiveSection", "politico-ideal");
                  window.dispatchEvent(
                    new CustomEvent("perfilSectionChange", {
                      detail: "politico-ideal",
                    })
                  );
                }}
                className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
              >
                <svg
                  className="mr-3 h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span className="text-left">Político Ideal</span>
              </button>

              <button
                onClick={() => {
                  localStorage.setItem("perfilActiveSection", "bloqueados");
                  window.dispatchEvent(
                    new CustomEvent("perfilSectionChange", {
                      detail: "bloqueados",
                    })
                  );
                }}
                className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
              >
                <svg
                  className="mr-3 h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728"
                  />
                </svg>
                <span className="text-left">Bloqueados</span>
              </button>

              <button
                onClick={() => {
                  localStorage.setItem("perfilActiveSection", "principios");
                  window.dispatchEvent(
                    new CustomEvent("perfilSectionChange", {
                      detail: "principios",
                    })
                  );
                }}
                className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
              >
                <svg
                  className="mr-3 h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span className="text-left">Princípios</span>
              </button>
            </nav>
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
