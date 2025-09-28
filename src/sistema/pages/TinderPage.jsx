import { useState } from "react";
import { Heart, X, Flag, Info, MapPin, CheckCircle, Award } from "lucide-react";
import { HeartIcon, FireIcon, SparklesIcon } from "@heroicons/react/24/outline";

const TinderPage = () => {
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Dados dos candidatos (combinando os dados das duas páginas)
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
      // Apenas avança para o próximo candidato sem salvar os estados
      setCurrentCandidateIndex((prev) => (prev + 1) % candidates.length);
      setSwipeDirection(null);
      setShowDetails(false);
    }, 300);
  };

  const handleReport = () => {
    alert(
      `Denúncia sobre ${currentCandidate.name} registrada. Nosso time irá analisar.`
    );
  };

  if (!currentCandidate) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Você avaliou todos os candidatos!
          </h2>
          <p className="text-gray-600 mb-6">
            Reinicie para continuar descobrindo políticos.
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
    <div className="max-w-7xl mx-auto py-8 min-h-[80vh] flex flex-col md:flex-row">
      {/* Conteúdo principal centralizado (card) */}
      <div className="flex-1 flex flex-col items-center justify-center h-full">
        {/* Card e botões distribuídos verticalmente */}
        <div className="w-full flex flex-col items-center justify-center gap-6">
          {/* Candidate Card */}
          <div className="w-full max-w-lg">
            <div
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 ${
                swipeDirection === "left"
                  ? "-translate-x-full rotate-12"
                  : swipeDirection === "right"
                  ? "translate-x-full -rotate-12"
                  : ""
              }`}
            >
              {/* Foto e informações lado a lado */}
              <div className="flex flex-row gap-4 p-4 md:p-6 items-center">
                {/* Foto menor */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                  <img
                    src={currentCandidate.photo}
                    alt={currentCandidate.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Informações principais */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {currentCandidate.name}
                  </h3>
                  <p className="text-gray-600">
                    {currentCandidate.position} • {currentCandidate.party}
                  </p>
                  <div className="flex gap-4">
                    <span className="text-sm text-gray-500">
                      {currentCandidate.age} anos
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {currentCandidate.location}
                    </span>
                  </div>
                  {/* Métricas resumidas */}
                  <div className="flex gap-2 mt-2">
                    <span
                      className={`text-xs font-bold ${getMetricColor(
                        currentCandidate.metrics.efficiency
                      )}`}
                    >
                      Eficiência: {currentCandidate.metrics.efficiency}%
                    </span>
                    <span
                      className={`text-xs font-bold ${getMetricColor(
                        currentCandidate.metrics.officialPerformance
                      )}`}
                    >
                      Atuação: {currentCandidate.metrics.officialPerformance}%
                    </span>
                    <span
                      className={`text-xs font-bold ${getMetricColor(
                        currentCandidate.metrics.publicReputation
                      )}`}
                    >
                      Reputação: {currentCandidate.metrics.publicReputation}%
                    </span>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {currentCandidate.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${getTagColor(
                          tag
                        )}`}
                      >
                        {tag}
                      </span>
                    ))}
                    {currentCandidate.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        +{currentCandidate.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Propostas principais */}
              <div className="px-4 md:px-6 pb-2">
                <h4 className="font-semibold text-gray-900 mb-1">
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

              {/* Detalhes expansíveis */}
              {showDetails && (
                <div className="border-t pt-4 px-4 md:px-6 space-y-4">
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

              {/* Botões de ação embaixo */}
              <div className="flex justify-center items-center space-x-4 md:space-x-6 mt-4 md:mt-6 pb-4">
                <button
                  onClick={handleReport}
                  className="bg-orange-500 hover:bg-orange-600 text-white p-2 md:p-3 rounded-full shadow-lg transition-colors"
                >
                  <Flag className="h-5 md:h-6 w-5 md:w-6" />
                </button>
                <button
                  onClick={() => handleSwipe("left")}
                  className="bg-red-500 hover:bg-red-600 text-white p-3 md:p-4 rounded-full shadow-lg transition-colors"
                >
                  <X className="h-7 md:h-8 w-7 md:w-8" />
                </button>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="bg-white/90 backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-colors border border-gray-200"
                  title="Mais informações"
                >
                  <Info className="h-5 md:h-6 w-5 md:w-6 text-gray-700" />
                </button>
                <button
                  onClick={() => handleSwipe("right")}
                  className="bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg transition-colors"
                >
                  <Heart className="h-7 md:h-8 w-7 md:w-8" />
                </button>
              </div>

              {/* Legenda dos botões */}
              <div className="text-center mt-2 md:mt-4 text-xs md:text-sm text-gray-500 pb-4">
                <p>❤️ Curtir • 🚩 Denunciar • ❌ Passar • ℹ️ Mais detalhes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinderPage;
