import { useState } from "react";
import {
  MapPin,
  Search,
  Filter,
  Award,
  BarChart3,
  CheckCircle,
  XCircle,
  Eye,
  Users,
  Heart,
  AlertTriangle,
  ExternalLink,
  Star,
} from "lucide-react";

const Politicos = () => {
  const [selectedPolitician, setSelectedPolitician] = useState(null);
  const [activeTab, setActiveTab] = useState("eficiencia");
  const [searchTerm, setSearchTerm] = useState("");

  const politicians = [
    {
      id: 1,
      name: "Deodoro da Fonseca",
      party: "Militar",
      position: "1º Presidente da República (1889-1891)",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      age: "Falecido (1827-1892)",
      location: "Alagoas - AL",
      experience: "Proclamador da República",
      biography:
        "Marechal e político brasileiro, proclamador da República no Brasil. Foi o primeiro presidente da República do Brasil. Nasceu em Alagoas e teve carreira militar destacada, participando da Guerra do Paraguai.",
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
    },
    {
      id: 3,
      name: "Prudente de Morais",
      party: "PRP",
      position: "3º Presidente da República (1894-1898)",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      age: "Falecido (1841-1902)",
      location: "São Paulo - SP",
      experience: "Primeiro presidente civil",
      biography:
        "Advogado e político paulista, foi o primeiro presidente civil do Brasil. Consolidou as instituições republicanas e enfrentou a Guerra de Canudos. Conhecido por sua postura conciliadora.",
      tags: ["PrimeiroCivil", "ConsolidadorInstitucional", "Conciliador"],
      metrics: {
        efficiency: {
          score: 82,
          problemsAssigned: 65,
          resolutionRate: 75,
          publicRating: 4.0,
          resolvedProblems: 49,
        },
        officialPerformance: {
          score: 78,
          proposalsPresented: 25,
          approvalRate: 65,
          attendance: 92,
        },
      },
    },
    {
      id: 4,
      name: "Campos Sales",
      party: "PRP",
      position: "4º Presidente da República (1898-1902)",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      age: "Falecido (1841-1913)",
      location: "São Paulo - SP",
      experience: "Saneador das finanças",
      biography:
        "Advogado e político paulista, conhecido por sanear as finanças públicas através do funding loan. Criou a 'política dos governadores' que marcou a Primeira República.",
      tags: ["SaneadorFinanceiro", "PolíticaDosGovernadores", "Economista"],
      metrics: {
        efficiency: {
          score: 85,
          problemsAssigned: 70,
          resolutionRate: 80,
          publicRating: 4.2,
          resolvedProblems: 56,
        },
        officialPerformance: {
          score: 83,
          proposalsPresented: 30,
          approvalRate: 70,
          attendance: 95,
        },
      },
    },
    {
      id: 5,
      name: "Rodrigues Alves",
      party: "PRP",
      position: "5º Presidente da República (1902-1906)",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      age: "Falecido (1848-1919)",
      location: "São Paulo - SP",
      experience: "Modernizador urbano",
      biography:
        "Advogado e político paulista, promoveu grandes reformas urbanas no Rio de Janeiro. Seu governo foi marcado pela modernização da capital federal e campanhas sanitárias de Oswaldo Cruz.",
      tags: ["ModernizadorUrbano", "ReformasUrbanas", "SaúdePública"],
      metrics: {
        efficiency: {
          score: 88,
          problemsAssigned: 75,
          resolutionRate: 85,
          publicRating: 4.5,
          resolvedProblems: 64,
        },
        officialPerformance: {
          score: 85,
          proposalsPresented: 35,
          approvalRate: 75,
          attendance: 96,
        },
      },
    },
    {
      id: 6,
      name: "Afonso Pena",
      party: "PRM",
      position: "6º Presidente da República (1906-1909)",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      age: "Falecido (1847-1909)",
      location: "Minas Gerais - MG",
      experience: "Desenvolvimentista mineiro",
      biography:
        "Advogado e político mineiro, promoveu o desenvolvimento econômico do país. Fundou cidades e incentivou a imigração. Morreu antes de completar o mandato.",
      tags: ["Desenvolvimentista", "FundadorCidades", "IncentivadorImigração"],
      metrics: {
        efficiency: {
          score: 83,
          problemsAssigned: 65,
          resolutionRate: 78,
          publicRating: 4.1,
          resolvedProblems: 51,
        },
        officialPerformance: {
          score: 80,
          proposalsPresented: 28,
          approvalRate: 68,
          attendance: 93,
        },
      },
    },
    {
      id: 7,
      name: "Nilo Peçanha",
      party: "PRM",
      position: "7º Presidente da República (1909-1910)",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      age: "Falecido (1867-1924)",
      location: "Rio de Janeiro - RJ",
      experience: "Educador e político",
      biography:
        "Advogado e político fluminense, assumiu após morte de Afonso Pena. Criou o ensino profissionalizante no Brasil e foi defensor da educação técnica.",
      tags: ["EducadorTécnico", "EnsinoProfissionalizante", "PolíticoEducador"],
      metrics: {
        efficiency: {
          score: 81,
          problemsAssigned: 40,
          resolutionRate: 75,
          publicRating: 4.0,
          resolvedProblems: 30,
        },
        officialPerformance: {
          score: 78,
          proposalsPresented: 20,
          approvalRate: 65,
          attendance: 90,
        },
      },
    },
    {
      id: 8,
      name: "Hermes da Fonseca",
      party: "Militar",
      position: "8º Presidente da República (1910-1914)",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      age: "Falecido (1855-1923)",
      location: "Rio Grande do Sul - RS",
      experience: "Militar modernizador",
      biography:
        "Militar e político gaúcho, sobrinho de Deodoro da Fonseca. Seu governo foi marcado por conflitos internos e pela modernização do exército brasileiro.",
      tags: ["MilitarModernizador", "ModernizaçãoExército", "SobrinhoDeodoro"],
      metrics: {
        efficiency: {
          score: 76,
          problemsAssigned: 55,
          resolutionRate: 65,
          publicRating: 3.6,
          resolvedProblems: 36,
        },
        officialPerformance: {
          score: 72,
          proposalsPresented: 22,
          approvalRate: 55,
          attendance: 88,
        },
      },
    },
    {
      id: 9,
      name: "Venceslau Brás",
      party: "PRM",
      position: "9º Presidente da República (1914-1918)",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      age: "Falecido (1868-1966)",
      location: "Minas Gerais - MG",
      experience: "Presidente da 1ª Guerra Mundial",
      biography:
        "Advogado e político mineiro, governou durante a Primeira Guerra Mundial. Declarou guerra às Potências Centrais e promoveu o desenvolvimento industrial nacional.",
      tags: [
        "PrimeiraGuerraMundial",
        "DesenvolvimentoIndustrial",
        "PolíticoMineiro",
      ],
      metrics: {
        efficiency: {
          score: 84,
          problemsAssigned: 70,
          resolutionRate: 80,
          publicRating: 4.2,
          resolvedProblems: 56,
        },
        officialPerformance: {
          score: 82,
          proposalsPresented: 32,
          approvalRate: 72,
          attendance: 94,
        },
      },
    },
    {
      id: 10,
      name: "Delfim Moreira",
      party: "PRM",
      position: "10º Presidente da República (1918-1919)",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      age: "Falecido (1868-1920)",
      location: "Minas Gerais - MG",
      experience: "Presidente interino",
      biography:
        "Advogado e político mineiro, assumiu interinamente após morte do presidente eleito Rodrigues Alves. Governou durante a pandemia de gripe espanhola.",
      tags: ["PresidenteInterino", "GripeEspanhola", "PolíticoMineiro"],
      metrics: {
        efficiency: {
          score: 78,
          problemsAssigned: 35,
          resolutionRate: 70,
          publicRating: 3.8,
          resolvedProblems: 25,
        },
        officialPerformance: {
          score: 75,
          proposalsPresented: 15,
          approvalRate: 60,
          attendance: 85,
        },
      },
    },
    {
      id: 11,
      name: "Epitácio Pessoa",
      party: "PRP",
      position: "11º Presidente da República (1919-1922)",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      age: "Falecido (1865-1942)",
      location: "Paraíba - PB",
      experience: "Jurista e diplomata",
      biography:
        "Jurista e político paraibano, foi presidente da delegação brasileira na Conferência de Paz de Versalhes. Promoveu obras contra as secas no Nordeste.",
      tags: ["JuristaInternacional", "DiplomataVersalhes", "ObrasAntiSeca"],
      metrics: {
        efficiency: {
          score: 86,
          problemsAssigned: 65,
          resolutionRate: 82,
          publicRating: 4.3,
          resolvedProblems: 53,
        },
        officialPerformance: {
          score: 84,
          proposalsPresented: 30,
          approvalRate: 74,
          attendance: 95,
        },
      },
    },
    {
      id: 12,
      name: "Artur Bernardes",
      party: "PRM",
      position: "12º Presidente da República (1922-1926)",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      age: "Falecido (1875-1955)",
      location: "Minas Gerais - MG",
      experience: "Presidente do estado de sítio",
      biography:
        "Advogado e político mineiro, governou sob estado de sítio quase permanente. Enfrentou revoltas tenentistas e a Revolução Paulista de 1924.",
      tags: ["EstadoDeSítio", "RevoluçõesTenentistas", "PolíticoMineiro"],
      metrics: {
        efficiency: {
          score: 79,
          problemsAssigned: 60,
          resolutionRate: 68,
          publicRating: 3.5,
          resolvedProblems: 41,
        },
        officialPerformance: {
          score: 76,
          proposalsPresented: 25,
          approvalRate: 58,
          attendance: 90,
        },
      },
    },
    {
      id: 13,
      name: "Washington Luís",
      party: "PRP",
      position: "13º Presidente da República (1926-1930)",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      age: "Falecido (1869-1957)",
      location: "São Paulo - SP",
      experience: "Último da República Velha",
      biography:
        "Advogado e político paulista, foi o último presidente da República Velha. Deposto pela Revolução de 1930 liderada por Getúlio Vargas.",
      tags: ["ÚltimoRepúblicaVelha", "Revolução1930", "PolíticoPaulista"],
      metrics: {
        efficiency: {
          score: 77,
          problemsAssigned: 55,
          resolutionRate: 65,
          publicRating: 3.4,
          resolvedProblems: 36,
        },
        officialPerformance: {
          score: 74,
          proposalsPresented: 23,
          approvalRate: 55,
          attendance: 87,
        },
      },
    },
    {
      id: 14,
      name: "Júlio Prestes",
      party: "PRP",
      position: "Eleito em 1930 (não tomou posse)",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      age: "Falecido (1882-1946)",
      location: "São Paulo - SP",
      experience: "Presidente eleito impedido",
      biography:
        "Advogado e político paulista, foi eleito presidente em 1930 mas impedido de tomar posse pela Revolução de 1930. Exilou-se na Europa após o golpe.",
      tags: ["PresidenteImpedido", "Revolução1930", "ExilioEuropa"],
      metrics: {
        efficiency: {
          score: 0,
          problemsAssigned: 0,
          resolutionRate: 0,
          publicRating: 0,
          resolvedProblems: 0,
        },
        officialPerformance: {
          score: 0,
          proposalsPresented: 0,
          approvalRate: 0,
          attendance: 0,
        },
      },
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
    },
    {
      id: 16,
      name: "Eurico Gaspar Dutra",
      party: "PSD",
      position: "16º Presidente da República (1946-1951)",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      age: "Falecido (1883-1974)",
      location: "Mato Grosso - MT",
      experience: "Redemocratizador",
      biography:
        "Militar e político, promoveu a redemocratização do país após o Estado Novo. Promulgou a Constituição de 1946 e desenvolveu políticas desenvolvimentistas.",
      tags: [
        "Redemocratização",
        "Constituição1946",
        "PolíticasDesenvolvimentistas",
      ],
      metrics: {
        efficiency: {
          score: 85,
          problemsAssigned: 90,
          resolutionRate: 78,
          publicRating: 4.1,
          resolvedProblems: 70,
        },
        officialPerformance: {
          score: 83,
          proposalsPresented: 45,
          approvalRate: 70,
          attendance: 93,
        },
      },
    },
    {
      id: 17,
      name: "Café Filho",
      party: "PSP",
      position: "17º Presidente da República (1954-1955)",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      age: "Falecido (1899-1970)",
      location: "Rio Grande do Norte - RN",
      experience: "Sucessor de Vargas",
      biography:
        "Jornalista e político potiguar, assumiu após suicídio de Getúlio Vargas. Tentou dar continuidade às políticas varguistas mas enfrentou instabilidade política.",
      tags: ["SucessorVargas", "JornalistaPolítico", "InstabilidadePolítica"],
      metrics: {
        efficiency: {
          score: 73,
          problemsAssigned: 40,
          resolutionRate: 60,
          publicRating: 3.5,
          resolvedProblems: 24,
        },
        officialPerformance: {
          score: 71,
          proposalsPresented: 18,
          approvalRate: 55,
          attendance: 85,
        },
      },
    },
    {
      id: 18,
      name: "Carlos Luz",
      party: "PSD",
      position: "Presidente interino (3 dias em 1955)",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      age: "Falecido (1894-1961)",
      location: "Minas Gerais - MG",
      experience: "Presidente por 3 dias",
      biography:
        "Advogado e político mineiro, foi presidente da Câmara e assumiu interinamente por apenas 3 dias, sendo deposto por um golpe preventivo militar.",
      tags: ["PresidenteTrêsDias", "GolpePreventivo", "PolíticoMineiro"],
      metrics: {
        efficiency: {
          score: 0,
          problemsAssigned: 1,
          resolutionRate: 0,
          publicRating: 2.0,
          resolvedProblems: 0,
        },
        officialPerformance: {
          score: 0,
          proposalsPresented: 0,
          approvalRate: 0,
          attendance: 100,
        },
      },
    },
    {
      id: 19,
      name: "Nereu Ramos",
      party: "PSD",
      position: "Presidente interino (1955-1956)",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      age: "Falecido (1888-1958)",
      location: "Santa Catarina - SC",
      experience: "Presidente interino",
      biography:
        "Advogado e político catarinense, assumiu interinamente após deposição de Carlos Luz. Garantiu a posse de Juscelino Kubitschek.",
      tags: ["PresidenteInterino", "GarantiuPosseJK", "PolíticoCatarinense"],
      metrics: {
        efficiency: {
          score: 75,
          problemsAssigned: 25,
          resolutionRate: 68,
          publicRating: 3.8,
          resolvedProblems: 17,
        },
        officialPerformance: {
          score: 73,
          proposalsPresented: 10,
          approvalRate: 60,
          attendance: 90,
        },
      },
    },
    {
      id: 20,
      name: "Juscelino Kubitschek",
      party: "PSD",
      position: "20º Presidente da República (1956-1961)",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      age: "Falecido (1902-1976)",
      location: "Minas Gerais - MG",
      experience: "Construtor de Brasília",
      biography:
        "Médico e político mineiro, famoso pelo Plano de Metas '50 anos em 5'. Construiu Brasília e promoveu grande desenvolvimento econômico do país.",
      tags: [
        "ConstruirBrasília",
        "PlanoMetas",
        "50AnosEm5",
        "DesenvolvimentoEconômico",
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
          proposalsPresented: 70,
          approvalRate: 85,
          attendance: 98,
        },
      },
    },
    {
      id: 21,
      name: "Jânio Quadros",
      party: "UDN",
      position: "21º Presidente da República (1961)",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      age: "Falecido (1917-1992)",
      location: "São Paulo - SP",
      experience: "Presidente por 7 meses",
      biography:
        "Professor e político paulista, governou por apenas 7 meses. Conhecido pelo estilo excêntrico e pela renúncia inesperada que gerou grave crise política.",
      tags: ["RenúnciaInesperada", "EstiloExcêntrico", "CrisePolítica"],
      metrics: {
        efficiency: {
          score: 65,
          problemsAssigned: 30,
          resolutionRate: 45,
          publicRating: 2.8,
          resolvedProblems: 14,
        },
        officialPerformance: {
          score: 60,
          proposalsPresented: 12,
          approvalRate: 40,
          attendance: 70,
        },
      },
    },
    {
      id: 22,
      name: "Ranieri Mazzilli",
      party: "PSD",
      position: "Presidente interino (1961, 1964)",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      age: "Falecido (1910-1975)",
      location: "São Paulo - SP",
      experience: "Presidente em duas crises",
      biography:
        "Advogado e político paulista, assumiu interinamente em duas ocasiões: após renúncia de Jânio Quadros e deposição de João Goulart.",
      tags: ["PresidenteDuasCrises", "InterinoPaulista", "CrisesPolíticas"],
      metrics: {
        efficiency: {
          score: 70,
          problemsAssigned: 20,
          resolutionRate: 60,
          publicRating: 3.2,
          resolvedProblems: 12,
        },
        officialPerformance: {
          score: 68,
          proposalsPresented: 8,
          approvalRate: 50,
          attendance: 88,
        },
      },
    },
    {
      id: 23,
      name: "João Goulart",
      party: "PTB",
      position: "23º Presidente da República (1961-1964)",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      age: "Falecido (1919-1976)",
      location: "Rio Grande do Sul - RS",
      experience: "Último presidente antes da ditadura",
      biography:
        "Advogado e político gaúcho, último presidente antes da ditadura militar. Promoveu reformas de base e foi deposto pelo golpe militar de 1964.",
      tags: ["ReformasDeBase", "ÚltimoAntesDitadura", "Golpe1964"],
      metrics: {
        efficiency: {
          score: 78,
          problemsAssigned: 55,
          resolutionRate: 65,
          publicRating: 3.9,
          resolvedProblems: 36,
        },
        officialPerformance: {
          score: 75,
          proposalsPresented: 35,
          approvalRate: 60,
          attendance: 85,
        },
      },
    },
    {
      id: 24,
      name: "Humberto de Alencar Castelo Branco",
      party: "Militar",
      position: "24º Presidente da República (1964-1967)",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      age: "Falecido (1897-1967)",
      location: "Ceará - CE",
      experience: "Primeiro presidente militar",
      biography:
        "Militar cearense, primeiro presidente da ditadura militar. Implementou os primeiros Atos Institucionais e iniciou o regime autoritário no Brasil.",
      tags: ["PrimeiroMilitar", "AtosInstitucionais", "DitaduraMilitar"],
      metrics: {
        efficiency: {
          score: 72,
          problemsAssigned: 45,
          resolutionRate: 60,
          publicRating: 2.5,
          resolvedProblems: 27,
        },
        officialPerformance: {
          score: 70,
          proposalsPresented: 20,
          approvalRate: 80,
          attendance: 95,
        },
      },
    },
    {
      id: 25,
      name: "Artur da Costa e Silva",
      party: "Militar",
      position: "25º Presidente da República (1967-1969)",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      age: "Falecido (1899-1969)",
      location: "Rio Grande do Sul - RS",
      experience: "Presidente da linha dura",
      biography:
        "Militar gaúcho, endureceu o regime militar com o AI-5. Seu governo foi marcado pelo aumento da repressão e pelo 'milagre econômico'.",
      tags: ["AI5", "LinhaDura", "MilagreEconômico"],
      metrics: {
        efficiency: {
          score: 75,
          problemsAssigned: 50,
          resolutionRate: 70,
          publicRating: 2.2,
          resolvedProblems: 35,
        },
        officialPerformance: {
          score: 78,
          proposalsPresented: 25,
          approvalRate: 85,
          attendance: 96,
        },
      },
    },
    {
      id: 26,
      name: "Emílio Garrastazu Médici",
      party: "Militar",
      position: "26º Presidente da República (1969-1974)",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      age: "Falecido (1905-1985)",
      location: "Rio Grande do Sul - RS",
      experience: "Anos de chumbo",
      biography:
        "Militar gaúcho, presidiu durante os 'anos de chumbo'. Período de maior repressão política, mas também de grande crescimento econômico.",
      tags: ["AnosDeChumbo", "RepressãoPolítica", "CrescimentoEconômico"],
      metrics: {
        efficiency: {
          score: 80,
          problemsAssigned: 60,
          resolutionRate: 75,
          publicRating: 2.0,
          resolvedProblems: 45,
        },
        officialPerformance: {
          score: 82,
          proposalsPresented: 30,
          approvalRate: 88,
          attendance: 98,
        },
      },
    },
    {
      id: 27,
      name: "Ernesto Geisel",
      party: "Militar",
      position: "27º Presidente da República (1974-1979)",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      age: "Falecido (1907-1996)",
      location: "Rio Grande do Sul - RS",
      experience: "Abertura lenta e gradual",
      biography:
        "Militar gaúcho, iniciou o processo de abertura política 'lenta, gradual e segura'. Enfrentou a crise do petróleo e o fim do milagre econômico.",
      tags: ["AberturaPolítica", "LentaGradualSegura", "CrisePetróleo"],
      metrics: {
        efficiency: {
          score: 83,
          problemsAssigned: 65,
          resolutionRate: 78,
          publicRating: 3.2,
          resolvedProblems: 51,
        },
        officialPerformance: {
          score: 80,
          proposalsPresented: 35,
          approvalRate: 75,
          attendance: 92,
        },
      },
    },
    {
      id: 28,
      name: "João Figueiredo",
      party: "Militar",
      position: "28º Presidente da República (1979-1985)",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      age: "Falecido (1918-1999)",
      location: "Rio de Janeiro - RJ",
      experience: "Último presidente militar",
      biography:
        "Militar carioca, último presidente da ditadura militar. Promoveu a Lei da Anistia e a transição para a democracia. Enfrentou grave crise econômica.",
      tags: ["ÚltimoMilitar", "LeiAnistia", "TransiçãoDemocrática"],
      metrics: {
        efficiency: {
          score: 78,
          problemsAssigned: 70,
          resolutionRate: 70,
          publicRating: 3.5,
          resolvedProblems: 49,
        },
        officialPerformance: {
          score: 76,
          proposalsPresented: 40,
          approvalRate: 65,
          attendance: 88,
        },
      },
    },
    {
      id: 29,
      name: "José Sarney",
      party: "PMDB",
      position: "29º Presidente da República (1985-1990)",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      age: "Falecido (1930-2024)",
      location: "Maranhão - MA",
      experience: "Primeiro da Nova República",
      biography:
        "Escritor e político maranhense, primeiro presidente civil após a ditadura militar. Promulgou a Constituição de 1988, mas enfrentou grave hiperinflação.",
      tags: ["NovaRepública", "Constituição1988", "Hiperinflação"],
      metrics: {
        efficiency: {
          score: 75,
          problemsAssigned: 80,
          resolutionRate: 60,
          publicRating: 3.0,
          resolvedProblems: 48,
        },
        officialPerformance: {
          score: 73,
          proposalsPresented: 50,
          approvalRate: 55,
          attendance: 85,
        },
      },
    },
    {
      id: 30,
      name: "Fernando Collor de Mello",
      party: "PRN",
      position: "30º Presidente da República (1990-1992)",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      age: "Vivo (1949-)",
      location: "Alagoas - AL",
      experience: "Caçador de marajás",
      biography:
        "Jornalista e político alagoano, primeiro presidente eleito por voto direto após a ditadura. Implementou planos econômicos polêmicos e sofreu impeachment em 1992.",
      tags: ["CaçadorMarajás", "PrimeiroEleitoVotoDireto", "Impeachment1992"],
      metrics: {
        efficiency: {
          score: 65,
          problemsAssigned: 60,
          resolutionRate: 45,
          publicRating: 2.5,
          resolvedProblems: 27,
        },
        officialPerformance: {
          score: 62,
          proposalsPresented: 35,
          approvalRate: 40,
          attendance: 75,
        },
      },
    },
    {
      id: 31,
      name: "Itamar Franco",
      party: "PMDB",
      position: "31º Presidente da República (1992-1995)",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      age: "Falecido (1930-2011)",
      location: "Minas Gerais - MG",
      experience: "Estabilizador da moeda",
      biography:
        "Engenheiro e político mineiro, assumiu após impeachment de Collor. Criou o Plano Real que estabilizou a moeda brasileira e controlou a hiperinflação.",
      tags: ["PlanoReal", "EstabilizaçãoMonetária", "ControleInflação"],
      metrics: {
        efficiency: {
          score: 88,
          problemsAssigned: 70,
          resolutionRate: 85,
          publicRating: 4.5,
          resolvedProblems: 60,
        },
        officialPerformance: {
          score: 86,
          proposalsPresented: 45,
          approvalRate: 80,
          attendance: 95,
        },
      },
    },
    {
      id: 32,
      name: "Fernando Henrique Cardoso",
      party: "PSDB",
      position: "32º Presidente da República (1995-2003)",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      age: "Vivo (1931-)",
      location: "São Paulo - SP",
      experience: "Sociólogo presidente",
      biography:
        "Sociólogo e político paulista, governou por dois mandatos. Consolidou o Plano Real, promoveu reformas estruturais e programas sociais como Auxílio Gás e Bolsa Escola.",
      tags: ["SociológoPresidente", "ConsolidaçãoReal", "ReformasEstruturais"],
      metrics: {
        efficiency: {
          score: 87,
          problemsAssigned: 100,
          resolutionRate: 80,
          publicRating: 4.2,
          resolvedProblems: 80,
        },
        officialPerformance: {
          score: 85,
          proposalsPresented: 65,
          approvalRate: 75,
          attendance: 92,
        },
      },
    },
    {
      id: 33,
      name: "Luiz Inácio Lula da Silva",
      party: "PT",
      position: "33º e 39º Presidente da República (2003-2011, 2023-)",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      age: "Vivo (1945-)",
      location: "São Bernardo do Campo - SP",
      experience: "Líder sindical presidente",
      biography:
        "Metalúrgico e político pernambucano/paulista, líder sindical que se tornou presidente. Criou programas sociais como Bolsa Família e promoveu inclusão social e crescimento econômico.",
      tags: [
        "LíderSindical",
        "BolsaFamília",
        "InclusãoSocial",
        "CrescimentoEconômico",
      ],
      metrics: {
        efficiency: {
          score: 92,
          problemsAssigned: 130,
          resolutionRate: 85,
          publicRating: 4.6,
          resolvedProblems: 111,
        },
        officialPerformance: {
          score: 90,
          proposalsPresented: 80,
          approvalRate: 82,
          attendance: 95,
        },
      },
    },
    {
      id: 34,
      name: "Dilma Rousseff",
      party: "PT",
      position: "34º Presidente da República (2011-2016)",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400",
      age: "Viva (1947-)",
      location: "Rio Grande do Sul - RS",
      experience: "Primeira mulher presidente",
      biography:
        "Economista e política gaúcha, primeira mulher eleita presidente do Brasil. Ex-guerrilheira na ditadura militar, criou programas como Mais Médicos. Sofreu impeachment em 2016.",
      tags: [
        "PrimeiraMulherPresidente",
        "MaisMédicos",
        "ExGuerrilheira",
        "Impeachment2016",
      ],
      metrics: {
        efficiency: {
          score: 76,
          problemsAssigned: 90,
          resolutionRate: 65,
          publicRating: 3.8,
          resolvedProblems: 59,
        },
        officialPerformance: {
          score: 74,
          proposalsPresented: 55,
          approvalRate: 60,
          attendance: 88,
        },
      },
    },
    {
      id: 35,
      name: "Michel Temer",
      party: "MDB",
      position: "35º Presidente da República (2016-2018)",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      age: "Vivo (1940-)",
      location: "São Paulo - SP",
      experience: "Vice que assumiu",
      biography:
        "Advogado e político paulista, assumiu após impeachment de Dilma Rousseff. Implementou reformas econômicas como a PEC do Teto de Gastos Públicos.",
      tags: ["ViceQueAssumiu", "PECTetoGastos", "ReformasEconômicas"],
      metrics: {
        efficiency: {
          score: 72,
          problemsAssigned: 60,
          resolutionRate: 58,
          publicRating: 3.2,
          resolvedProblems: 35,
        },
        officialPerformance: {
          score: 70,
          proposalsPresented: 35,
          approvalRate: 55,
          attendance: 82,
        },
      },
    },
    {
      id: 36,
      name: "Jair Bolsonaro",
      party: "PL",
      position: "36º Presidente da República (2019-2022)",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      age: "Vivo (1955-)",
      location: "Rio de Janeiro - RJ",
      experience: "Capitão presidente",
      biography:
        "Militar e político carioca, ex-deputado federal por décadas. Governou durante a pandemia de COVID-19, implementou o Auxílio Emergencial e promoveu políticas conservadoras.",
      tags: [
        "CapitãoPresidente",
        "PandemiaCOVID",
        "AuxílioEmergencial",
        "PolíticasConservadoras",
      ],
      metrics: {
        efficiency: {
          score: 68,
          problemsAssigned: 85,
          resolutionRate: 55,
          publicRating: 3.0,
          resolvedProblems: 47,
        },
        officialPerformance: {
          score: 66,
          proposalsPresented: 40,
          approvalRate: 50,
          attendance: 78,
        },
      },
    },
  ];

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
    };
    return tagColors[tag] || "bg-gray-100 text-gray-800";
  };

  const getMetricColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getActionIcon = (type, status) => {
    if (type === "projeto") return <Award className="h-4 w-4" />;
    if (type === "votacao") return <BarChart3 className="h-4 w-4" />;
    if (type === "problema") {
      if (status === "resolvido")
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      if (status === "em-andamento")
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      return <XCircle className="h-4 w-4 text-red-500" />;
    }
    return <Star className="h-4 w-4" />;
  };

  const filteredPoliticians = politicians.filter((politician) => {
    const matchesSearch =
      politician.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      politician.party.toLowerCase().includes(searchTerm.toLowerCase()) ||
      politician.position.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Biografias Dinâmicas dos Políticos
          </h1>
          <p className="text-xl text-gray-600">
            Análise completa baseada em dados reais de desempenho
          </p>
        </div>

        {/* Search */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar políticos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Politicians Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredPoliticians.map((politician) => (
            <div
              key={politician.id}
              className="card hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedPolitician(politician)}
            >
              {/* Photo and Basic Info */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={politician.photo}
                  alt={politician.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {politician.name}
                  </h3>
                  <p className="text-gray-600">
                    {politician.position} • {politician.party}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    {politician.location}
                  </p>
                </div>
              </div>

              {/* Metrics Overview */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div
                    className={`text-xl font-bold ${getMetricColor(
                      politician.metrics.efficiency.score
                    )}`}
                  >
                    {politician.metrics.efficiency.score}%
                  </div>
                  <div className="text-xs text-gray-500">Eficiência</div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-xl font-bold ${getMetricColor(
                      politician.metrics.officialPerformance.score
                    )}`}
                  >
                    {politician.metrics.officialPerformance.score}%
                  </div>
                  <div className="text-xs text-gray-500">Atuação</div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-xl font-bold ${getMetricColor(
                      politician.metrics.publicReputation.score
                    )}`}
                  >
                    {politician.metrics.publicReputation.score}%
                  </div>
                  <div className="text-xs text-gray-500">Reputação</div>
                </div>
              </div>

              {/* Tags Preview */}
              <div className="flex flex-wrap gap-2 mb-4">
                {politician.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(
                      tag
                    )}`}
                  >
                    {tag}
                  </span>
                ))}
                {politician.tags.length > 3 && (
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                    +{politician.tags.length - 3}
                  </span>
                )}
              </div>

              {/* View Details Button */}
              <button className="w-full btn-primary text-sm">
                Ver Biografia Completa
              </button>
            </div>
          ))}
        </div>

        {/* Detailed Modal/View */}
        {selectedPolitician && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedPolitician(null)}
          >
            <div
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-6">
                  <img
                    src={selectedPolitician.photo}
                    alt={selectedPolitician.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedPolitician.name}
                    </h2>
                    <p className="text-gray-600">
                      {selectedPolitician.position} • {selectedPolitician.party}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {selectedPolitician.location} •{" "}
                      {selectedPolitician.experience} de experiência
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedPolitician(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircle className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                {[
                  { id: "eficiencia", name: "Eficiência", icon: Eye },
                  { id: "atuacao", name: "Atuação Oficial", icon: Users },
                  { id: "reputacao", name: "Reputação", icon: Heart },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                        activeTab === tab.id
                          ? "border-b-2 border-primary-500 text-primary-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "eficiencia" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-primary-600">
                          {
                            selectedPolitician.metrics.efficiency
                              .problemsAssigned
                          }
                        </div>
                        <div className="text-sm text-gray-600">
                          Problemas Atribuídos
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {selectedPolitician.metrics.efficiency.resolutionRate}
                          %
                        </div>
                        <div className="text-sm text-gray-600">
                          Taxa de Resolução
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">
                          {selectedPolitician.metrics.efficiency.publicRating}
                        </div>
                        <div className="text-sm text-gray-600">
                          Avaliação Popular
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-accent-600">
                          {
                            selectedPolitician.metrics.efficiency
                              .resolvedProblems
                          }
                        </div>
                        <div className="text-sm text-gray-600">
                          Problemas Resolvidos
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "atuacao" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {
                            selectedPolitician.metrics.officialPerformance
                              .votingAttendance
                          }
                          %
                        </div>
                        <div className="text-sm text-gray-600">
                          Presença em Votações
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {
                            selectedPolitician.metrics.officialPerformance
                              .sessionAttendance
                          }
                          %
                        </div>
                        <div className="text-sm text-gray-600">
                          Presença em Sessões
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">
                          {
                            selectedPolitician.metrics.officialPerformance
                              .transparency
                          }
                          %
                        </div>
                        <div className="text-sm text-gray-600">
                          Transparência
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-accent-600">
                          {
                            selectedPolitician.metrics.officialPerformance
                              .projectsApproved
                          }
                        </div>
                        <div className="text-sm text-gray-600">
                          Projetos Aprovados
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "reputacao" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div
                          className={`text-lg font-bold ${
                            selectedPolitician.metrics.publicReputation
                              .judicialStatus === "Limpa"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {
                            selectedPolitician.metrics.publicReputation
                              .judicialStatus
                          }
                        </div>
                        <div className="text-sm text-gray-600">
                          Status Judicial
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {
                            selectedPolitician.metrics.publicReputation
                              .scandalInvolvement
                          }
                        </div>
                        <div className="text-sm text-gray-600">Escândalos</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">
                          {
                            selectedPolitician.metrics.publicReputation
                              .factCheckScore
                          }
                          %
                        </div>
                        <div className="text-sm text-gray-600">Fact-Check</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div
                          className={`text-lg font-bold ${
                            selectedPolitician.metrics.publicReputation
                              .mediaRating === "Positiva"
                              ? "text-green-600"
                              : selectedPolitician.metrics.publicReputation
                                  .mediaRating === "Neutra"
                              ? "text-yellow-600"
                              : "text-red-600"
                          }`}
                        >
                          {
                            selectedPolitician.metrics.publicReputation
                              .mediaRating
                          }
                        </div>
                        <div className="text-sm text-gray-600">
                          Cobertura da Mídia
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Recent Actions */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Ações Recentes
                  </h3>
                  <div className="space-y-3">
                    {selectedPolitician.recentActions.map((action, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-shrink-0">
                          {getActionIcon(action.type, action.status)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">
                            {action.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {action.vote && `Voto: ${action.vote} • `}
                            {action.status && `Status: ${action.status} • `}
                            {action.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
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
    </div>
  );
};

export default Politicos;
