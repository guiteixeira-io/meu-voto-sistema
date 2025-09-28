import { Link } from "react-router-dom";
import {
  Shield,
  Vote,
  Users,
  BarChart3,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Eye,
  Heart,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Modo Fiscalização",
      description:
        "Reporte problemas na sua comunidade e acompanhe soluções em tempo real.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Vote,
      title: "Modo Eleição",
      description:
        "Encontre candidatos alinhados com seus valores através de match inteligente.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: BarChart3,
      title: "Biografia Dinâmica",
      description:
        "Veja métricas reais de desempenho dos políticos baseadas em dados.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const metrics = [
    {
      icon: Eye,
      title: "Eficiência",
      description: "Taxa de resolução de problemas reportados",
      items: ["Problemas atribuídos", "Taxa de resolução", "Avaliação popular"],
    },
    {
      icon: Users,
      title: "Atuação Oficial",
      description: "Desempenho baseado em dados públicos",
      items: [
        "Histórico de votações",
        "Frequência em sessões",
        "Transparência financeira",
      ],
    },
    {
      icon: Heart,
      title: "Reputação Pública",
      description: "Análise de mídia e fact-checking",
      items: [
        "Status judicial",
        "Envolvimento em escândalos",
        "Verificação de discurso",
      ],
    },
  ];

  const principles = [
    "Justiça Social",
    "Honestidade",
    "Responsabilidade",
    "Empatia",
    "Respeito às Leis",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conectando <span className="text-accent-400">Cidadania</span> ao{" "}
              <span className="text-accent-400">Voto</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Um ecossistema de cidadania ativa que mantém você engajado durante
              todo o ano, não apenas nas eleições.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/auth/register"
                className="btn-primary text-lg px-8 py-3 flex items-center space-x-2 bg-accent-500 hover:bg-accent-600"
              >
                <Shield className="h-5 w-5" />
                <span>Criar Conta</span>
              </Link>
              <Link
                to="/auth/login"
                className="btn-secondary text-lg px-8 py-3 flex items-center space-x-2 bg-white text-primary-600 hover:bg-gray-100"
              >
                <Vote className="h-5 w-5" />
                <span>Entrar</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona o Voto Social
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Duas funcionalidades que se complementam para criar uma democracia
              mais participativa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="card text-center group hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Biografias Dinâmicas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Biografias Dinâmicas dos Políticos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Avaliação completa baseada em três pilares de dados concretos e
              verificáveis
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="card">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {metric.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {metric.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {metric.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-gray-700"
                      >
                        <CheckCircle className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Princípios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Valores que devem guiar a política para o bem comum
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-6 text-center border border-primary-100 hover:border-primary-200 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {principle}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para uma Democracia Mais Participativa?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Comece hoje mesmo a fiscalizar sua comunidade e descobrir candidatos
            alinhados com seus valores.
          </p>
          <Link
            to="/sistema/fiscalizacao"
            className="btn-primary text-lg px-8 py-3 bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center space-x-2"
          >
            <span>Começar Agora</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
