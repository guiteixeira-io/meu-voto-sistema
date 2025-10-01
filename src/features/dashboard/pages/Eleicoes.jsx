import { useState } from "react";
import {
  Heart,
  X,
  RotateCcw,
  Info,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  Users,
  CheckCircle,
  AlertCircle,
  Filter,
  Settings,
} from "lucide-react";

const Eleicoes = () => {
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [matches, setMatches] = useState([]);
  const [rejected, setRejected] = useState([]);

  // Dados mock dos candidatos
  const candidates = [
    {
      id: 1,
      name: "Maria Santos",
      party: "PSD",
      position: "Vereadora",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      age: 45,
      location: "São Paulo - SP",
      experience: "8 anos",
      tags: [
        "Centro",
        "FocoEmEducação",
        "FocoEmSaúde",
        "IgualdadeRacial",
        "FichaLimpa",
      ],
      metrics: {
        efficiency: 85,
        officialPerformance: 92,
        publicReputation: 78,
      },
      proposals: [
        "Creches 24h para trabalhadores",
        "Programa de capacitação digital",
        "Clínicas populares de saúde",
      ],
      bio: "Professora há 20 anos, trabalha com políticas de educação inclusiva e saúde preventiva.",
      achievements: [
        "Lei das Creches Noturnas aprovada",
        "15 UBS reformadas",
        "Programa Alfabetiza+ implementado",
      ],
    },
    {
      id: 2,
      name: "João Silva",
      party: "PT",
      position: "Deputado Estadual",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      age: 52,
      location: "São Paulo - SP",
      experience: "12 anos",
      tags: [
        "Esquerda",
        "DefesaDasEstatais",
        "DireitosLGBTQIA+",
        "FocoEmSegurança",
        "Sustentabilidade",
      ],
      metrics: {
        efficiency: 76,
        officialPerformance: 88,
        publicReputation: 82,
      },
      proposals: [
        "Transporte público gratuito",
        "Energia solar em escolas",
        "Delegacia LGBTQIA+ especializada",
      ],
      bio: "Sindicalista e ativista pelos direitos humanos, defensor do transporte público de qualidade.",
      achievements: [
        "Lei Anti-Homofobia aprovada",
        "CPI do Transporte Público",
        "50 ônibus elétricos na frota",
      ],
    },
    {
      id: 3,
      name: "Ana Costa",
      party: "NOVO",
      position: "Vereadora",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1bc?w=400",
      age: 38,
      location: "São Paulo - SP",
      experience: "4 anos",
      tags: [
        "Liberal",
        "LivreMercado",
        "MenosImpostos",
        "Pró-Privatização",
        "PerfilTécnico",
        "RenovaçãoPolítica",
      ],
      metrics: {
        efficiency: 94,
        officialPerformance: 89,
        publicReputation: 75,
      },
      proposals: [
        "Desburocratização digital",
        "Parcerias público-privadas",
        "Startup Cidade",
      ],
      bio: "Empresária e economista, especialista em gestão pública eficiente e inovação tecnológica.",
      achievements: [
        "App Cidadão lançado",
        "30% redução no tempo de licenças",
        "Hub de Inovação criado",
      ],
    },
  ];

  const currentCandidate = candidates[currentCandidateIndex];

  const getTagColor = (tag) => {
    const tagColors = {
      Esquerda: "bg-red-100 text-red-800",
      Centro: "bg-yellow-100 text-yellow-800",
      Direita: "bg-blue-100 text-blue-800",
      Liberal: "bg-purple-100 text-purple-800",
      Progressista: "bg-green-100 text-green-800",
      Conservador: "bg-gray-100 text-gray-800",
      FocoEmEducação: "bg-indigo-100 text-indigo-800",
      FocoEmSaúde: "bg-pink-100 text-pink-800",
      FocoEmSegurança: "bg-orange-100 text-orange-800",
      Sustentabilidade: "bg-emerald-100 text-emerald-800",
      FichaLimpa: "bg-green-100 text-green-800",
      RenovaçãoPolítica: "bg-cyan-100 text-cyan-800",
      PerfilTécnico: "bg-violet-100 text-violet-800",
      LivreMercado: "bg-amber-100 text-amber-800",
      MenosImpostos: "bg-lime-100 text-lime-800",
      DefesaDasEstatais: "bg-rose-100 text-rose-800",
      "Pró-Privatização": "bg-teal-100 text-teal-800",
      "DireitosLGBTQIA+": "bg-rainbow-100 text-rainbow-800",
      IgualdadeRacial: "bg-purple-100 text-purple-800",
    };
    return tagColors[tag] || "bg-gray-100 text-gray-800";
  };

  const getMetricColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);

    setTimeout(() => {
      if (direction === "right") {
        setMatches((prev) => [...prev, currentCandidate]);
      } else {
        setRejected((prev) => [...prev, currentCandidate]);
      }

      setCurrentCandidateIndex((prev) => (prev + 1) % candidates.length);
      setSwipeDirection(null);
      setShowDetails(false);
    }, 300);
  };

  const resetSwipe = () => {
    if (currentCandidateIndex > 0) {
      setCurrentCandidateIndex((prev) => prev - 1);
    }
  };

  if (!currentCandidate) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Você avaliou todos os candidatos!
          </h2>
          <p className="text-gray-600 mb-6">
            Confira seus matches e candidatos rejeitados.
          </p>
          <button
            onClick={() => setCurrentCandidateIndex(0)}
            className="btn-primary"
          >
            Recomeçar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Modo Eleição
          </h1>
          <p className="text-xl text-gray-600">
            Encontre candidatos alinhados com seus valores
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600">
              {matches.length}
            </div>
            <div className="text-sm text-gray-600">Matches</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-gray-600">
              {currentCandidateIndex + 1}
            </div>
            <div className="text-sm text-gray-600">de {candidates.length}</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-red-600">
              {rejected.length}
            </div>
            <div className="text-sm text-gray-600">Rejeitados</div>
          </div>
        </div>

        {/* Candidate Card */}
        <div className="relative max-w-sm mx-auto">
          <div
            className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 ${
              swipeDirection === "left"
                ? "-translate-x-full rotate-12"
                : swipeDirection === "right"
                ? "translate-x-full -rotate-12"
                : ""
            }`}
          >
            {/* Photo */}
            <div className="relative h-96">
              <img
                src={currentCandidate.photo}
                alt={currentCandidate.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <Info className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Basic Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {currentCandidate.name}
                  </h3>
                  <p className="text-gray-600">
                    {currentCandidate.position} • {currentCandidate.party}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    {currentCandidate.age} anos
                  </p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {currentCandidate.location}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div
                    className={`text-2xl font-bold ${getMetricColor(
                      currentCandidate.metrics.efficiency
                    )}`}
                  >
                    {currentCandidate.metrics.efficiency}%
                  </div>
                  <div className="text-xs text-gray-500">Eficiência</div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-2xl font-bold ${getMetricColor(
                      currentCandidate.metrics.officialPerformance
                    )}`}
                  >
                    {currentCandidate.metrics.officialPerformance}%
                  </div>
                  <div className="text-xs text-gray-500">Atuação</div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-2xl font-bold ${getMetricColor(
                      currentCandidate.metrics.publicReputation
                    )}`}
                  >
                    {currentCandidate.metrics.publicReputation}%
                  </div>
                  <div className="text-xs text-gray-500">Reputação</div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {currentCandidate.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                  {currentCandidate.tags.length > 4 && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                      +{currentCandidate.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Proposals Preview */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Principais Propostas:
                </h4>
                <ul className="space-y-1">
                  {currentCandidate.proposals
                    .slice(0, 2)
                    .map((proposal, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-start"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        {proposal}
                      </li>
                    ))}
                </ul>
              </div>

              {/* Detailed Info (Expandable) */}
              {showDetails && (
                <div className="border-t pt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Biografia:
                    </h4>
                    <p className="text-sm text-gray-600">
                      {currentCandidate.bio}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Principais Conquistas:
                    </h4>
                    <ul className="space-y-1">
                      {currentCandidate.achievements.map(
                        (achievement, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <Award className="h-4 w-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Todas as Propostas:
                    </h4>
                    <ul className="space-y-1">
                      {currentCandidate.proposals.map((proposal, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          {proposal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <button
              onClick={() => handleSwipe("left")}
              className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={resetSwipe}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-3 rounded-full shadow-lg transition-colors"
            >
              <RotateCcw className="h-6 w-6" />
            </button>

            <button
              onClick={() => handleSwipe("right")}
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
            >
              <Heart className="h-8 w-8" />
            </button>
          </div>

          {/* Instructions */}
          <div className="text-center mt-6 text-sm text-gray-500">
            <p>❤️ Curtir • ❌ Passar • ↻ Desfazer • ℹ️ Mais detalhes</p>
          </div>
        </div>

        {/* Filter Button */}
        <div className="fixed bottom-6 right-6">
          <button className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transition-colors">
            <Filter className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Eleicoes;
