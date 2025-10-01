import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  EyeIcon,
  ChartBarIcon,
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({ isOpen, setIsOpen, setSelectedNav }) => {
  const location = useLocation();

  const navegacaoUnificada = [
    { nome: "Descobrir", href: "/sistema/tinder", icon: HeartIcon },
    { nome: "3 Poderes", href: "/sistema/politicos", icon: UserGroupIcon },
    { nome: "Fiscalização", href: "/sistema/fiscalizacao", icon: EyeIcon },
    {
      nome: "Matches",
      href: "/sistema/tinder/matches",
      icon: ChatBubbleLeftRightIcon,
    },
    { nome: "Boost", href: "/sistema/boost", icon: BoltIcon },
    // { nome: "Vibe", href: "/sistema/vibe", icon: CompassIcon },
    { nome: "Perfil", href: "/sistema/perfil", icon: UserIcon },
  ];

  const isActivePath = (path) => {
    return (
      location.pathname === path ||
      (path === "/sistema/" && location.pathname === "/sistema")
    );
  };

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
  h-[calc(100vh-4rem)] w-[5vw] min-w-[56px] bg-white shadow-lg transition-transform duration-300 ease-in-out z-10 flex flex-col overflow-y-auto
  ${isOpen ? "translate-x-0" : "-translate-x-full"}
  lg:translate-x-0
  `}
      >
        {/* Header da Sidebar com ícone */}
        <div className="flex flex-col items-center justify-center p-4 border-b border-gray-200">
          <div className="flex justify-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-primary-600 mb-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2"
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
          {/* Removido nome do usuário e texto 'Eleitor' */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 lg:hidden mt-2"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Navegação Unificada */}
        <nav className="flex-1 px-2 py-6 overflow-y-auto">
          <div className="space-y-1">
            {navegacaoUnificada.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.nome}
                  to={item.href}
                  onClick={() => {
                    setIsOpen(false);
                    if (setSelectedNav) setSelectedNav(item.nome);
                  }}
                  className={`
                    group flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                    ${
                      isActivePath(item.href)
                        ? "bg-primary-100 text-primary-700 border-r-2 border-primary-700"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                  title={item.nome}
                >
                  <Icon className="h-6 w-6 flex-shrink-0" />
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer da Sidebar */}
        <div className="p-4 border-t border-gray-200">
          {/* Botão 'Sair' movido para Perfil */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
