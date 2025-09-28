import React, { useState } from "react";
import {
  Search,
  Filter,
  Users,
  Award,
  TrendingUp,
  Calendar,
  MapPin,
  X,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Vote,
  AlertTriangle,
} from "lucide-react";

const PoliticosOtimizado = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedParty, setSelectedParty] = useState("");
  const [selectedPolitician, setSelectedPolitician] = useState(null);

  // Array reduzido com apenas alguns presidentes para teste
  const politicians = [
    {
      id: 1,
      name: "Deodoro da Fonseca",
      party: "Militar",
      position: "1º Presidente da República (1889-1891)",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      age: "Falecido (1827-1892)",
      location: "Alagoas - AL",
      experience: "Proclamador da República",
      biography:
        "Marechal e político brasileiro, proclamador da República no Brasil. Foi o primeiro presidente da República do Brasil.",
      tags: [
        "HistóricoRepublicano",
        "MilitarReformador",
        "ProclamadorRepública",
      ],
      metrics: {
        efficiency: {
          score: 75,
          problemsAssigned: 50,
          resolutionRate: 60,
          publicRating: 3.5,
          resolvedProblems: 30,
        },
        officialPerformance: {
          score: 70,
          proposalsPresented: 15,
          approvalRate: 40,
          attendance: 85,
        },
      },
      recentActions: [
        {
          title: "Proclamação da República",
          vote: "Favorável",
          status: "Aprovado",
          date: "15 nov 1889",
          type: "proposal",
        },
      ],
    },
    {
      id: 2,
      name: "Floriano Peixoto",
      party: "Militar",
      position: "2º Presidente da República (1891-1894)",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      age: "Falecido (1839-1895)",
      location: "Alagoas - AL",
      experience: "Consolidador da República",
      biography:
        "Militar e político brasileiro, conhecido como 'Marechal de Ferro'. Consolidou a República Brasileira.",
      tags: ["ConsolidadorRepública", "MarechalDeFerro", "MilitarRígido"],
      metrics: {
        efficiency: {
          score: 80,
          problemsAssigned: 60,
          resolutionRate: 70,
          publicRating: 3.8,
          resolvedProblems: 42,
        },
        officialPerformance: {
          score: 75,
          proposalsPresented: 20,
          approvalRate: 60,
          attendance: 90,
        },
      },
      recentActions: [
        {
          title: "Consolidação Republicana",
          vote: "Favorável",
          status: "Executado",
          date: "1891-1894",
          type: "proposal",
        },
      ],
    },
    {
      id: 15,
      name: "Getúlio Vargas",
      party: "PTB",
      position: "Presidente (1930-1945, 1951-1954)",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      age: "Falecido (1882-1954)",
      location: "Rio Grande do Sul - RS",
      experience: "Pai dos Pobres",
      biography:
        "Advogado e político gaúcho, governou o Brasil por 18 anos. Criou a CLT e desenvolveu a indústria nacional.",
      tags: [
        "PaiDosPobres",
        "CLT",
        "DireitosTrabalhistas",
        "DesenvolvimentoIndustrial",
      ],
      metrics: {
        efficiency: {
          score: 92,
          problemsAssigned: 150,
          resolutionRate: 85,
          publicRating: 4.7,
          resolvedProblems: 128,
        },
        officialPerformance: {
          score: 90,
          proposalsPresented: 80,
          approvalRate: 82,
          attendance: 96,
        },
      },
      recentActions: [
        {
          title: "Criação da CLT",
          vote: "Favorável",
          status: "Aprovado",
          date: "1 mai 1943",
          type: "proposal",
        },
      ],
    },
  ];

  const filteredPoliticians = politicians.filter((politician) => {
    const matchesSearch = politician.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesParty =
      selectedParty === "" || politician.party === selectedParty;
    return matchesSearch && matchesParty;
  });

  const parties = [...new Set(politicians.map((p) => p.party))];

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getTagColor = (tag) => {
    const colors = {
      HistóricoRepublicano: "bg-blue-100 text-blue-800",
      MilitarReformador: "bg-green-100 text-green-800",
      ProclamadorRepública: "bg-purple-100 text-purple-800",
      ConsolidadorRepública: "bg-indigo-100 text-indigo-800",
      MarechalDeFerro: "bg-gray-100 text-gray-800",
      MilitarRígido: "bg-red-100 text-red-800",
      PaiDosPobres: "bg-yellow-100 text-yellow-800",
      CLT: "bg-blue-100 text-blue-800",
      DireitosTrabalhistas: "bg-green-100 text-green-800",
      DesenvolvimentoIndustrial: "bg-purple-100 text-purple-800",
    };
    return colors[tag] || "bg-gray-100 text-gray-800";
  };

  const _getActionIcon = (type, status) => {
    if (status === "Aprovado" || status === "Executado") {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
    if (status === "Rejeitado") {
      return <XCircle className="w-5 h-5 text-red-500" />;
    }
    if (status === "Pendente") {
      return <Clock className="w-5 h-5 text-yellow-500" />;
    }
    return <FileText className="w-5 h-5 text-blue-500" />;
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Políticos</h1>
        <p className="text-gray-600">
          Acompanhe o desempenho e histórico dos políticos brasileiros
        </p>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nome..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="lg:w-64">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                value={selectedParty}
                onChange={(e) => setSelectedParty(e.target.value)}
              >
                <option value="">Todos os partidos</option>
                {parties.map((party) => (
                  <option key={party} value={party}>
                    {party}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Políticos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPoliticians.map((politician) => (
          <div
            key={politician.id}
            className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedPolitician(politician)}
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={politician.photo}
                  alt={politician.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                    {politician.name}
                  </h3>
                  <p className="text-sm text-gray-600">{politician.party}</p>
                  <p className="text-xs text-gray-500 truncate">
                    {politician.position}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Eficiência</span>
                  <span
                    className={`text-sm font-semibold ${getScoreColor(
                      politician.metrics.efficiency.score
                    )}`}
                  >
                    {politician.metrics.efficiency.score}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Desempenho</span>
                  <span
                    className={`text-sm font-semibold ${getScoreColor(
                      politician.metrics.officialPerformance.score
                    )}`}
                  >
                    {politician.metrics.officialPerformance.score}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Avaliação</span>
                  <span className="text-sm font-semibold text-blue-600">
                    {politician.metrics.efficiency.publicRating}/5
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex flex-wrap gap-1">
                  {politician.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded text-xs font-medium ${getTagColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                  {politician.tags.length > 2 && (
                    <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">
                      +{politician.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes */}
      {selectedPolitician && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedPolitician.photo}
                    alt={selectedPolitician.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedPolitician.name}
                    </h2>
                    <p className="text-gray-600">{selectedPolitician.party}</p>
                    <p className="text-sm text-gray-500">
                      {selectedPolitician.position}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPolitician(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Biografia */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Biografia
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedPolitician.biography}
                </p>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Tags Políticas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPolitician.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PoliticosOtimizado;
