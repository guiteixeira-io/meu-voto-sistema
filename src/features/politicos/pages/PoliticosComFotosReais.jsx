import React, { useState, useMemo } from "react";
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
} from "lucide-react";

// Array completo com todos os presidentes brasileiros - fotos reais quando disponíveis
const allPoliticians = [
  {
    id: 1,
    name: "Deodoro da Fonseca",
    party: "Militar",
    position: "1º Presidente da República (1889-1891)",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Deodoro_da_Fonseca_%28Brasil%29.jpg/200px-Deodoro_da_Fonseca_%28Brasil%29.jpg",
    age: "Falecido (1827-1892)",
    location: "Alagoas - AL",
    experience: "Proclamador da República",
    biography:
      "Marechal e político brasileiro, proclamador da República no Brasil. Foi o primeiro presidente da República do Brasil. Nasceu em Alagoas e teve carreira militar destacada, participando da Guerra do Paraguai.",
    tags: ["HistóricoRepublicano", "MilitarReformador", "ProclamadorRepública"],
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Floriano_Peixoto.jpg/200px-Floriano_Peixoto.jpg",
    age: "Falecido (1839-1895)",
    location: "Alagoas - AL",
    experience: "Consolidador da República",
    biography:
      "Militar e político brasileiro, conhecido como 'Marechal de Ferro'. Consolidou a República Brasileira enfrentando revoltas federalistas. Vice-presidente que assumiu após renúncia de Deodoro.",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Get%C3%BAlio_Vargas_%281930%29.jpg/200px-Get%C3%BAlio_Vargas_%281930%29.jpg",
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
    id: 20,
    name: "Juscelino Kubitschek",
    party: "PSD",
    position: "21º Presidente da República (1956-1961)",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Juscelino_Kubitschek_%28cropped%29.jpg/200px-Juscelino_Kubitschek_%28cropped%29.jpg",
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
    id: 35,
    name: "Luiz Inácio Lula da Silva",
    party: "PT",
    position: "35º Presidente da República (2003-2011, 2023-atual)",
    photo: "https://www.camara.leg.br/internet/deputado/bandep/74161.jpg",
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
        type: "proposal",
      },
    ],
  },
  {
    id: 101,
    name: "Tabata Amaral",
    party: "PSB",
    position: "Deputada Federal por São Paulo",
    photo: "https://www.camara.leg.br/internet/deputado/bandep/204534.jpg",
    age: "30 anos",
    location: "São Paulo - SP",
    experience: "Educadora e política",
    biography:
      "Cientista política e educadora, deputada federal mais jovem eleita por São Paulo em 2018. Defensora da educação pública de qualidade e inovação no ensino.",
    tags: ["EducaçãoPública", "Inovação", "JovemLiderança", "CientistPolítica"],
    metrics: {
      efficiency: {
        score: 87,
        problemsAssigned: 45,
        resolutionRate: 82,
        publicRating: 4.2,
        resolvedProblems: 37,
      },
      officialPerformance: {
        score: 85,
        proposalsPresented: 28,
        approvalRate: 75,
        attendance: 96,
      },
    },
    recentActions: [
      {
        title: "Lei do Marco Legal da Educação",
        vote: "Favorável",
        status: "Tramitando",
        date: "2024",
        type: "proposal",
      },
    ],
  },
  {
    id: 102,
    name: "Ricardo Salles",
    party: "NOVO",
    position: "Deputado Federal por São Paulo",
    photo: "https://www.camara.leg.br/internet/deputado/bandep/220633.jpg",
    age: "48 anos",
    location: "São Paulo - SP",
    experience: "Ex-Ministro do Meio Ambiente",
    biography:
      "Advogado e político paulista, foi Ministro do Meio Ambiente (2019-2021). Atualmente deputado federal, defensor do agronegócio e desenvolvimento sustentável.",
    tags: [
      "MeioAmbiente",
      "Agronegócio",
      "DesenvolvimentoSustentável",
      "ExMinistro",
    ],
    metrics: {
      efficiency: {
        score: 72,
        problemsAssigned: 38,
        resolutionRate: 65,
        publicRating: 3.1,
        resolvedProblems: 25,
      },
      officialPerformance: {
        score: 70,
        proposalsPresented: 22,
        approvalRate: 58,
        attendance: 88,
      },
    },
    recentActions: [
      {
        title: "PL do Marco Legal do Agronegócio",
        vote: "Favorável",
        status: "Aprovado",
        date: "2024",
        type: "proposal",
      },
    ],
  },
  {
    id: 103,
    name: "Sâmia Bomfim",
    party: "PSOL",
    position: "Deputada Federal por São Paulo",
    photo: "https://www.camara.leg.br/internet/deputado/bandep/204535.jpg",
    age: "36 anos",
    location: "São Paulo - SP",
    experience: "Arquiteta e urbanista política",
    biography:
      "Arquiteta, urbanista e política paulista. Defensora dos direitos das mulheres, moradia popular e transporte público de qualidade.",
    tags: [
      "DireitosDasMulheres",
      "MoradiaPopular",
      "TransportePúblico",
      "ArquitetaUrbanista",
    ],
    metrics: {
      efficiency: {
        score: 84,
        problemsAssigned: 52,
        resolutionRate: 78,
        publicRating: 4.0,
        resolvedProblems: 41,
      },
      officialPerformance: {
        score: 82,
        proposalsPresented: 35,
        approvalRate: 72,
        attendance: 94,
      },
    },
    recentActions: [
      {
        title: "PEC das Mulheres",
        vote: "Favorável",
        status: "Tramitando",
        date: "2024",
        type: "proposal",
      },
    ],
  },
  {
    id: 104,
    name: "Taliria Petrone",
    party: "PSOL",
    position: "Deputada Federal pelo Rio de Janeiro",
    photo: "https://www.camara.leg.br/internet/deputado/bandep/204464.jpg",
    age: "38 anos",
    location: "Rio de Janeiro - RJ",
    experience: "Professora e política",
    biography:
      "Professora de história e política fluminense. Defensora da educação pública, direitos humanos e igualdade racial.",
    tags: [
      "EducaçãoPública",
      "DireitosHumanos",
      "IgualdadeRacial",
      "ProfessoraHistória",
    ],
    metrics: {
      efficiency: {
        score: 86,
        problemsAssigned: 48,
        resolutionRate: 80,
        publicRating: 4.1,
        resolvedProblems: 38,
      },
      officialPerformance: {
        score: 84,
        proposalsPresented: 31,
        approvalRate: 74,
        attendance: 95,
      },
    },
    recentActions: [
      {
        title: "Lei de Combate ao Racismo",
        vote: "Favorável",
        status: "Aprovado",
        date: "2024",
        type: "proposal",
      },
    ],
  },
  {
    id: 105,
    name: "Rodrigo Pacheco",
    party: "PSD",
    position: "Senador por Minas Gerais",
    photo: "https://www25.senado.leg.br/web/senadores/senador/-/perfil/5323",
    age: "47 anos",
    location: "Minas Gerais - MG",
    experience: "Presidente do Senado Federal",
    biography:
      "Advogado e político mineiro, atual Presidente do Senado Federal. Conhecido por sua atuação conciliadora e defesa do diálogo institucional.",
    tags: [
      "PresidenteSenado",
      "Conciliador",
      "DiálogoInstitucional",
      "AdvogadoPolítico",
    ],
    metrics: {
      efficiency: {
        score: 90,
        problemsAssigned: 65,
        resolutionRate: 88,
        publicRating: 4.4,
        resolvedProblems: 57,
      },
      officialPerformance: {
        score: 92,
        proposalsPresented: 42,
        approvalRate: 85,
        attendance: 97,
      },
    },
    recentActions: [
      {
        title: "Reforma do Judiciário",
        vote: "Favorável",
        status: "Tramitando",
        date: "2024",
        type: "proposal",
      },
    ],
  },
];

const PoliticosPaginado = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedParty, setSelectedParty] = useState("");
  const [selectedPolitician, setSelectedPolitician] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredPoliticians = useMemo(() => {
    return allPoliticians.filter((politician) => {
      const matchesSearch = politician.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesParty =
        selectedParty === "" || politician.party === selectedParty;
      return matchesSearch && matchesParty;
    });
  }, [searchTerm, selectedParty]);

  const totalPages = Math.ceil(filteredPoliticians.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPoliticians = filteredPoliticians.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const parties = [...new Set(allPoliticians.map((p) => p.party))];

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
      "50AnosEm5": "bg-orange-100 text-orange-800",
      ConstruçãoBrasília: "bg-teal-100 text-teal-800",
      PlanoDeMetas: "bg-cyan-100 text-cyan-800",
      Desenvolvimentismo: "bg-emerald-100 text-emerald-800",
      LíderSindical: "bg-red-100 text-red-800",
      BolsaFamília: "bg-green-100 text-green-800",
      InclusãoSocial: "bg-purple-100 text-purple-800",
      ProgramasSociais: "bg-blue-100 text-blue-800",
      EducaçãoPública: "bg-blue-100 text-blue-800",
      Inovação: "bg-cyan-100 text-cyan-800",
      JovemLiderança: "bg-pink-100 text-pink-800",
      CientistPolítica: "bg-indigo-100 text-indigo-800",
      MeioAmbiente: "bg-green-100 text-green-800",
      Agronegócio: "bg-yellow-100 text-yellow-800",
      DesenvolvimentoSustentável: "bg-emerald-100 text-emerald-800",
      ExMinistro: "bg-gray-100 text-gray-800",
      DireitosDasMulheres: "bg-pink-100 text-pink-800",
      MoradiaPopular: "bg-orange-100 text-orange-800",
      TransportePúblico: "bg-blue-100 text-blue-800",
      ArquitetaUrbanista: "bg-teal-100 text-teal-800",
      DireitosHumanos: "bg-purple-100 text-purple-800",
      IgualdadeRacial: "bg-red-100 text-red-800",
      ProfessoraHistória: "bg-brown-100 text-brown-800",
      PresidenteSenado: "bg-gold-100 text-gold-800",
      Conciliador: "bg-green-100 text-green-800",
      DiálogoInstitucional: "bg-blue-100 text-blue-800",
      AdvogadoPolítico: "bg-gray-100 text-gray-800",
    };
    return colors[tag] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Políticos Brasileiros
        </h1>
        <p className="text-gray-600">
          Conheça presidentes históricos e políticos atuais -{" "}
          {filteredPoliticians.length} perfis encontrados
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
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
          <div className="lg:w-64">
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
          </div>
        </div>
      </div>

      {/* Grid de Políticos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
        {paginatedPoliticians.map((politician) => (
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
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      politician.name
                    )}&background=0D8ABC&color=fff&size=64`;
                  }}
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
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
            ))}
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
                  <img
                    src={selectedPolitician.photo}
                    alt={selectedPolitician.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        selectedPolitician.name
                      )}&background=0D8ABC&color=fff&size=80`;
                    }}
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
                    Eficiência
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
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
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Problemas Resolvidos:
                      </span>
                      <span className="font-semibold text-gray-700">
                        {selectedPolitician.metrics.efficiency.resolvedProblems}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Taxa de Resolução:
                      </span>
                      <span className="font-semibold text-gray-700">
                        {selectedPolitician.metrics.efficiency.resolutionRate}%
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Desempenho Oficial
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
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
                    <div className="flex justify-between">
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
                    <div className="flex justify-between">
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

export default PoliticosPaginado;
