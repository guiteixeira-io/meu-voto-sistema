import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Vote, LogIn } from "lucide-react";

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
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
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/sistema"
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <LogIn className="h-4 w-4" />
              <span>Entrar no Sistema</span>
            </Link>
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
            <Link
              to="/sistema"
              className="flex items-center space-x-2 bg-primary-600 text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="h-5 w-5" />
              <span>Entrar no Sistema</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
