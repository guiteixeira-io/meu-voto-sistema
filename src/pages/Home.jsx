import { Link } from "react-router-dom";
import {
  Users,
  Vote,
  TrendingUp,
  Shield,
  ArrowRight,
  Star,
  CheckCircle,
  BarChart3,
} from "lucide-react";

const Home = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Acompanhe a
              <span className="block text-blue-600">Política Brasileira</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
              Conheça presidentes históricos e deputados atuais com dados
              oficiais da Câmara dos Deputados. Fiscalize, vote e participe da
              democracia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link
                to="/sistema"
                className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center font-medium shadow-lg hover:shadow-xl"
              >
                Começar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="#features"
                className="w-full sm:w-auto border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center font-medium"
              >
                Ver Funcionalidades
              </a>
            </div>

            {/* Stats Cards - Mobile Friendly */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-sm border border-white/50">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Políticos Catalogados
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-sm border border-white/50">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                  100%
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Dados Oficiais
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-sm border border-white/50">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                  24/7
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Atualização
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
              Funcionalidades do Sistema
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
              Ferramentas completas para acompanhar e fiscalizar a política
              brasileira
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Base de Políticos
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                Presidentes históricos e deputados federais atuais com fotos e
                biografias oficiais da Câmara dos Deputados.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Fotos oficiais da Câmara</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Dados atualizados em tempo real</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Biografias completas</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Métricas de Desempenho
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                Acompanhe a eficiência e desempenho oficial dos políticos
                através de métricas detalhadas.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Score de eficiência</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Taxa de aprovação</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Avaliação pública</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <Vote className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Modo Tinder Político
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                Descubra políticos de forma interativa com swipe cards e
                encontre seus matches ideológicos.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Interface intuitiva</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Sistema de matches</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Suporte a teclado</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Fiscalização
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                Ferramentas para acompanhar proposições, votações e atividades
                dos representantes.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Histórico de votações</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Presença em sessões</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Proposições apresentadas</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Tendências Políticas
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                Análise de tendências, popularidade e movimentações no cenário
                político nacional.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Gráficos interativos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Análise temporal</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Comparações</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Star className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Dashboard Personalizado
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                Painel principal com estatísticas, gráficos e informações
                personalizadas do sistema.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Visão geral completa</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Filtros avançados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Interface responsiva</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 px-4">
            Sobre o Meu Voto
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4 leading-relaxed">
            Uma plataforma moderna e intuitiva para acompanhar a política
            brasileira. Utilizamos dados oficiais da Câmara dos Deputados para
            fornecer informações precisas e atualizadas sobre nossos
            representantes políticos.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-8 px-4 leading-relaxed">
            Nosso objetivo é promover a transparência política e facilitar o
            acesso à informação, permitindo que cidadãos façam escolhas mais
            conscientes e participem ativamente da democracia brasileira.
          </p>

          {/* Call to Action with additional info */}
          <div className="space-y-6">
            <Link
              to="/sistema"
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center font-medium shadow-lg hover:shadow-xl"
            >
              Explorar Sistema
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
                  Transparência
                </div>
                <div className="text-gray-700 text-sm">
                  Dados verificados e atualizados diretamente das fontes
                  oficiais
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-2">
                  Gratuito
                </div>
                <div className="text-gray-700 text-sm">
                  Acesso livre e gratuito a todas as funcionalidades do sistema
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
