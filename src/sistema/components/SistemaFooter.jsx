import { Vote } from "lucide-react";

const SistemaFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="bg-primary-600 p-1 rounded">
              <Vote className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-900">Voto</span>
              <span className="text-sm font-semibold text-primary-600">
                Social
              </span>
              <span className="text-xs text-gray-500 ml-1">Sistema</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © {currentYear} Voto Social - Sistema de Gestão
            </p>
            <p className="text-gray-400 text-xs mt-1">Versão 1.0.0</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SistemaFooter;
