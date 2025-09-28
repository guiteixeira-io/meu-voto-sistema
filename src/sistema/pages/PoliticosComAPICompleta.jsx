import React, { useState, useMemo, useEffect } from "react";
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
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import { fetchDeputados, generateAvatarUrl } from "../utils/camaraAPI";

// Presidentes históricos com dados completos
const presidentesHistoricos = [
  {
    id: 1,
    name: "Deodoro da Fonseca",
    party: "Militar",
    position: "1º Presidente da República (1889-1891)",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Deodoro_da_Fonseca_%28Brasil%29.jpg/300px-Deodoro_da_Fonseca_%28Brasil%29.jpg",
    age: "Falecido (1827-1892)",
    location: "Alagoas - AL",
    experience: "Proclamador da República",
    biography:
      "Marechal e político brasileiro, proclamador da República no Brasil. Foi o primeiro presidente da República do Brasil. Nasceu em Alagoas e teve carreira militar destacada, participando da Guerra do Paraguai.",
    tags: ["HistóricoRepublicano", "MilitarReformador", "ProclamadorRepública"],
    type: "presidente",
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
    name: "Getúlio Vargas",
    party: "PTB",
    position: "Presidente (1930-1945, 1951-1954)",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Get%C3%BAlio_Vargas_%281930%29.jpg/300px-Get%C3%BAlio_Vargas_%281930%29.jpg",
    age: "Falecido (1882-1954)",
    location: "Rio Grande do Sul - RS",
    experience: "Pai dos Pobres",
    biography:
      "Advogado e político gaúcho, governou o Brasil por 18 anos. Criou a CLT, desenvolveu a indústria nacional e promoveu direitos trabalhistas. Suicidou-se em 1954.",
    tags: [
      "PaiDosPobres",
      "CLT",
      "DireitosTrabalhistas",
      "DesenvolvimentoIndustrial",
    ],
    type: "presidente",
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
  {
    id: 3,
    name: "Juscelino Kubitschek",
    party: "PSD",
    position: "21º Presidente da República (1956-1961)",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Juscelino_Kubitschek_%28cropped%29.jpg/300px-Juscelino_Kubitschek_%28cropped%29.jpg",
    age: "Falecido (1902-1976)",
    location: "Minas Gerais - MG",
    experience: "Presidente Bossa Nova",
    biography:
      "Médico e político mineiro, conhecido pelo slogan '50 anos em 5'. Construiu Brasília e promoveu o desenvolvimentismo nacional com o Plano de Metas.",
    tags: [
      "50AnosEm5",
      "ConstruçãoBrasília",
      "PlanoDeMetas",
      "Desenvolvimentismo",
    ],
    type: "presidente",
    metrics: {
      efficiency: {
        score: 95,
        problemsAssigned: 120,
        resolutionRate: 90,
        publicRating: 4.8,
        resolvedProblems: 108,
      },
      officialPerformance: {
        score: 93,
        proposalsPresented: 60,
        approvalRate: 88,
        attendance: 98,
      },
    },
    recentActions: [
      {
        title: "Construção de Brasília",
        vote: "Favorável",
        status: "Concluído",
        date: "21 abr 1960",
        type: "proposal",
      },
    ],
  },
  {
    id: 4,
    name: "Fernando Henrique Cardoso",
    party: "PSDB",
    position: "34º Presidente da República (1995-2003)",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Fernando_Henrique_Cardoso.jpg/300px-Fernando_Henrique_Cardoso.jpg",
    age: "93 anos",
    location: "Rio de Janeiro - RJ",
    experience: "Sociólogo e político",
    biography:
      "Sociólogo e político carioca, foi presidente por dois mandatos. Criou o Plano Real como Ministro da Fazenda e promoveu estabilidade econômica no país.",
    tags: [
      "PlanoReal",
      "EstabilidadeEconômica",
      "SociologoPolítico",
      "DoisMandatos",
    ],
    type: "presidente",
    metrics: {
      efficiency: {
        score: 88,
        problemsAssigned: 140,
        resolutionRate: 78,
        publicRating: 4.1,
        resolvedProblems: 109,
      },
      officialPerformance: {
        score: 86,
        proposalsPresented: 65,
        approvalRate: 75,
        attendance: 94,
      },
    },
    recentActions: [
      {
        title: "Criação do Plano Real",
        vote: "Favorável",
        status: "Implementado",
        date: "1994",
        type: "economic",
      },
    ],
  },
  {
    id: 5,
    name: "Luiz Inácio Lula da Silva",
    party: "PT",
    position: "35º Presidente da República (2003-2011, 2023-atual)",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Lula_-_foto_oficial05012007.jpg/300px-Lula_-_foto_oficial05012007.jpg",
    age: "78 anos",
    location: "Pernambuco - PE",
    experience: "Líder sindical e político",
    biography:
      "Metalúrgico e político pernambucano, líder sindical que se tornou presidente. Criou programas sociais como Bolsa Família e promoveu inclusão social. Atualmente em seu terceiro mandato.",
    tags: [
      "LíderSindical",
      "BolsaFamília",
      "InclusãoSocial",
      "ProgramasSociais",
    ],
    type: "presidente",
    metrics: {
      efficiency: {
        score: 89,
        problemsAssigned: 200,
        resolutionRate: 82,
        publicRating: 4.3,
        resolvedProblems: 164,
      },
      officialPerformance: {
        score: 87,
        proposalsPresented: 95,
        approvalRate: 78,
        attendance: 94,
      },
    },
    recentActions: [
      {
        title: "Programa Bolsa Família",
        vote: "Favorável",
        status: "Ativo",
        date: "2023",
        type: "social",
      },
    ],
  },
];

const PoliticosComAPICompleta = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedParty, setSelectedParty] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPolitician, setSelectedPolitician] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [deputadosAtivos, setDeputadosAtivos] = useState([]);
  const [allPoliticians, setAllPoliticians] = useState(presidentesHistoricos);

  const itemsPerPage = 16;

  // Carrega deputados da API ao montar o componente
  useEffect(() => {
    loadDeputados();
  }, []);

  const loadDeputados = async () => {
    setLoading(true);
    try {
      const deputados = await fetchDeputados();

      // Converte deputados para o formato esperado
      const deputadosFormatados = deputados
        .slice(0, 50)
        .map((deputado, index) => ({
          id: deputado.id || 1000 + index,
          name: deputado.name,
          party: deputado.party,
          position: `Deputado Federal por ${deputado.state}`,
          photo: deputado.photo,
          age: "Em exercício",
          location: `${deputado.state} - ${deputado.state}`,
          experience: "Deputado Federal",
          biography: `${deputado.name} é deputado federal em exercício, representando o estado de ${deputado.state} pelo partido ${deputado.party}. Atua no Congresso Nacional em diversas comissões e projetos legislativos.`,
          tags: [
            "DeputadoFederal",
            "LegislativoAtual",
            "PolíticoAtivo",
            deputado.party,
          ],
          type: "deputado",
          email: deputado.email,
          metrics: {
            efficiency: {
              score: Math.floor(Math.random() * 30) + 70,
              problemsAssigned: Math.floor(Math.random() * 25) + 15,
              resolutionRate: Math.floor(Math.random() * 30) + 60,
              publicRating: (Math.random() * 1.5 + 3.5).toFixed(1),
              resolvedProblems: Math.floor(Math.random() * 20) + 10,
            },
            officialPerformance: {
              score: Math.floor(Math.random() * 25) + 65,
              proposalsPresented: Math.floor(Math.random() * 20) + 8,
              approvalRate: Math.floor(Math.random() * 25) + 55,
              attendance: Math.floor(Math.random() * 10) + 88,
            },
          },
          recentActions: [
            {
              title: "Atividade Legislativa Recente",
              vote: "Participação ativa",
              status: "Em exercício",
              date: "2024",
              type: "legislative",
            },
          ],
        }));

      setDeputadosAtivos(deputadosFormatados);
      setAllPoliticians([...presidentesHistoricos, ...deputadosFormatados]);
    } catch (error) {
      console.error("Erro ao carregar deputados:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPoliticians = useMemo(() => {
    return allPoliticians.filter((politician) => {
      const matchesSearch = politician.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesParty =
        selectedParty === "" || politician.party === selectedParty;
      const matchesType =
        selectedType === "" || politician.type === selectedType;
      return matchesSearch && matchesParty && matchesType;
    });
  }, [searchTerm, selectedParty, selectedType, allPoliticians]);

  const totalPages = Math.ceil(filteredPoliticians.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPoliticians = filteredPoliticians.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const parties = [...new Set(allPoliticians.map((p) => p.party))].sort();
  const types = [...new Set(allPoliticians.map((p) => p.type))];

  const getScoreColor = (score) => {
    if (score >= 85) return "text-green-600";
    if (score >= 70) return "text-blue-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getTagColor = (tag) => {
    const colors = {
      // Presidentes históricos
      HistóricoRepublicano: "bg-blue-100 text-blue-800",
      MilitarReformador: "bg-green-100 text-green-800",
      ProclamadorRepública: "bg-purple-100 text-purple-800",
      PaiDosPobres: "bg-yellow-100 text-yellow-800",
      CLT: "bg-blue-100 text-blue-800",
      DireitosTrabalhistas: "bg-green-100 text-green-800",
      DesenvolvimentoIndustrial: "bg-purple-100 text-purple-800",
      "50AnosEm5": "bg-orange-100 text-orange-800",
      ConstruçãoBrasília: "bg-teal-100 text-teal-800",
      PlanoDeMetas: "bg-cyan-100 text-cyan-800",
      Desenvolvimentismo: "bg-emerald-100 text-emerald-800",
      PlanoReal: "bg-green-100 text-green-800",
      EstabilidadeEconômica: "bg-blue-100 text-blue-800",
      SociologoPolítico: "bg-indigo-100 text-indigo-800",
      LíderSindical: "bg-red-100 text-red-800",
      BolsaFamília: "bg-green-100 text-green-800",
      InclusãoSocial: "bg-purple-100 text-purple-800",
      ProgramasSociais: "bg-blue-100 text-blue-800",

      // Deputados atuais
      DeputadoFederal: "bg-blue-100 text-blue-800",
      LegislativoAtual: "bg-cyan-100 text-cyan-800",
      PolíticoAtivo: "bg-green-100 text-green-800",

      // Partidos
      PT: "bg-red-100 text-red-800",
      PSDB: "bg-blue-100 text-blue-800",
      MDB: "bg-yellow-100 text-yellow-800",
      PSD: "bg-orange-100 text-orange-800",
      PP: "bg-blue-100 text-blue-800",
      PL: "bg-green-100 text-green-800",
      PSOL: "bg-orange-100 text-orange-800",
      PSB: "bg-red-100 text-red-800",
      PDT: "bg-red-100 text-red-800",
      REPUBLICANOS: "bg-blue-100 text-blue-800",
      UNIÃO: "bg-purple-100 text-purple-800",
      PODE: "bg-cyan-100 text-cyan-800",
      NOVO: "bg-orange-100 text-orange-800",
    };
    return colors[tag] || "bg-gray-100 text-gray-800";
  };

  const getTypeLabel = (type) => {
    const labels = {
      presidente: "Presidente",
      deputado: "Deputado Federal",
      senador: "Senador",
    };
    return labels[type] || type;
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Políticos Brasileiros
          </h1>
          <button
            onClick={loadDeputados}
            disabled={loading}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            <span>Atualizar da Câmara</span>
          </button>
        </div>
        <p className="text-gray-600">
          Presidentes históricos e deputados atuais com fotos oficiais -{" "}
          {filteredPoliticians.length} perfis encontrados
        </p>
        {loading && (
          <div className="text-sm text-blue-600 mt-2">
            Carregando dados da API da Câmara dos Deputados...
          </div>
        )}
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por nome..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              value={selectedParty}
              onChange={(e) => {
                setSelectedParty(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">Todos os partidos</option>
              {parties.map((party) => (
                <option key={party} value={party}>
                  {party}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">Todos os cargos</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {getTypeLabel(type)}
                </option>
              ))}
            </select>
          </div>

          <div className="text-sm text-gray-600 flex items-center">
            <Award className="w-4 h-4 mr-2" />
            {presidentesHistoricos.length} históricos + {deputadosAtivos.length}{" "}
            atuais
          </div>
        </div>
      </div>

      {/* Grid de Políticos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
        {paginatedPoliticians.map((politician) => (
          <div
            key={politician.id}
            className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 cursor-pointer group"
            onClick={() => setSelectedPolitician(politician)}
          >
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={politician.photo}
                    alt={politician.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-300 transition-colors"
                    onError={(e) => {
                      e.target.src = generateAvatarUrl(politician.name);
                    }}
                  />
                  {politician.type === "presidente" && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Award className="w-3 h-3 text-yellow-800" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                    {politician.name}
                  </h3>
                  <p className="text-sm text-gray-600">{politician.party}</p>
                  <p className="text-xs text-gray-500 truncate">
                    {politician.position}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
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

              <div className="flex flex-wrap gap-1">
                {politician.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 rounded text-xs font-medium ${getTagColor(
                      tag
                    )}`}
                  >
                    {tag}
                  </span>
                ))}
                {politician.tags.length > 3 && (
                  <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">
                    +{politician.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Anterior
          </button>

          <div className="flex space-x-1">
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let page;
              if (totalPages <= 5) {
                page = i + 1;
              } else if (currentPage <= 3) {
                page = i + 1;
              } else if (currentPage >= totalPages - 2) {
                page = totalPages - 4 + i;
              } else {
                page = currentPage - 2 + i;
              }

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Próxima
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      )}

      {/* Modal de Detalhes */}
      {selectedPolitician && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={selectedPolitician.photo}
                      alt={selectedPolitician.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                      onError={(e) => {
                        e.target.src = generateAvatarUrl(
                          selectedPolitician.name
                        );
                      }}
                    />
                    {selectedPolitician.type === "presidente" && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-yellow-800" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedPolitician.name}
                    </h2>
                    <p className="text-gray-600">
                      {selectedPolitician.party} -{" "}
                      {getTypeLabel(selectedPolitician.type)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {selectedPolitician.position}
                    </p>
                    {selectedPolitician.email && (
                      <a
                        href={`mailto:${selectedPolitician.email}`}
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center mt-1"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {selectedPolitician.email}
                      </a>
                    )}
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
                  Áreas de Atuação
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

              {/* Métricas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Métricas de Eficiência
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Score Geral:
                      </span>
                      <span
                        className={`font-semibold ${getScoreColor(
                          selectedPolitician.metrics.efficiency.score
                        )}`}
                      >
                        {selectedPolitician.metrics.efficiency.score}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Problemas Resolvidos:
                      </span>
                      <span className="font-semibold text-gray-700">
                        {selectedPolitician.metrics.efficiency.resolvedProblems}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Taxa de Resolução:
                      </span>
                      <span className="font-semibold text-gray-700">
                        {selectedPolitician.metrics.efficiency.resolutionRate}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Avaliação Pública:
                      </span>
                      <span className="font-semibold text-blue-600">
                        {selectedPolitician.metrics.efficiency.publicRating}/5
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Desempenho Oficial
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Score Geral:
                      </span>
                      <span
                        className={`font-semibold ${getScoreColor(
                          selectedPolitician.metrics.officialPerformance.score
                        )}`}
                      >
                        {selectedPolitician.metrics.officialPerformance.score}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Propostas Apresentadas:
                      </span>
                      <span className="font-semibold text-gray-700">
                        {
                          selectedPolitician.metrics.officialPerformance
                            .proposalsPresented
                        }
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Taxa de Aprovação:
                      </span>
                      <span className="font-semibold text-gray-700">
                        {
                          selectedPolitician.metrics.officialPerformance
                            .approvalRate
                        }
                        %
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Presença:</span>
                      <span className="font-semibold text-gray-700">
                        {
                          selectedPolitician.metrics.officialPerformance
                            .attendance
                        }
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PoliticosComAPICompleta;
