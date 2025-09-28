import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Vote, Shield, Users } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Fiscalização", href: "/fiscalizacao", icon: Shield },
    { name: "Eleições", href: "/eleicoes", icon: Vote },
    { name: "Políticos", href: "/politicos", icon: Users },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Vote className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Voto</span>
                <span className="text-xl font-bold text-primary-600">
                  Social
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary-100 text-primary-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? "bg-primary-100 text-primary-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
