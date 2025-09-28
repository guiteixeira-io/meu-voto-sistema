import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

// Configuração do banco de dados
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "meu_voto",
  multipleStatements: true,
};

// Dados dos políticos extraídos do frontend
const politiciansData = [
  {
    id: 1,
    name: "Luiz Inácio Lula da Silva",
    party: "",
    position: "Presidente da República",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    age: 78,
    location: "São Bernardo do Campo - SP",
    experience: "45 anos",
    tags: [
      "FocoEmSaúde",
      "FocoEmEducação",
      "IgualdadeRacial",
      "Sustentabilidade",
      "PolíticoExperiente",
    ],
    metrics: {
      efficiency: {
        score: 85,
        problemsAssigned: 127,
        resolutionRate: 72,
        publicRating: 4.1,
        resolvedProblems: 91,
      },
      officialPerformance: {
        score: 88,
        votingAttendance: 95,
        sessionAttendance: 92,
        transparency: 82,
        projectsApproved: 45,
      },
      publicReputation: {
        score: 75,
        judicialStatus: "Controversa",
        scandalInvolvement: 3,
        factCheckScore: 78,
        mediaRating: "Polarizada",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Marco Temporal Indígena",
        status: "aprovado",
        date: "2024-08-20",
      },
      {
        type: "votacao",
        title: "Orçamento Federal 2025",
        vote: "favorável",
        date: "2024-09-05",
      },
      {
        type: "problema",
        title: "Crise Climática Amazônia",
        status: "em-andamento",
        date: "2024-09-10",
      },
    ],
    proposals: [
      "Programa Bolsa Família ampliado",
      "Mais Médicos",
      "Programa Nacional de Acesso ao Ensino Técnico",
    ],
    bio: "Metalúrgico, sindicalista e político brasileiro. 35º presidente do Brasil (2003-2011) e atual 39º presidente (2023-presente). Liderou importantes programas sociais e criação de universidades federais.",
    achievements: [
      "Criação do ProUni",
      "Programa Bolsa Família",
      "12 universidades federais criadas",
      "Programa Mais Médicos",
    ],
  },
  {
    id: 2,
    name: "Tarcísio Gomes de Freitas",
    party: "",
    position: "Governador de São Paulo",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    age: 48,
    location: "São Paulo - SP",
    experience: "8 anos",
    tags: [
      "PerfilTécnico",
      "FocoEmSegurança",
      "RenovaçãoPolítica",
      "FocoEmInfraestrutura",
      "Modernização",
    ],
    metrics: {
      efficiency: {
        score: 91,
        problemsAssigned: 89,
        resolutionRate: 84,
        publicRating: 4.3,
        resolvedProblems: 75,
      },
      officialPerformance: {
        score: 94,
        votingAttendance: 97,
        sessionAttendance: 96,
        transparency: 89,
        projectsApproved: 38,
      },
      publicReputation: {
        score: 86,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 88,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Programa Conecta SP",
        status: "aprovado",
        date: "2024-08-15",
      },
      {
        type: "votacao",
        title: "Orçamento Estadual 2025",
        vote: "favorável",
        date: "2024-09-12",
      },
      {
        type: "problema",
        title: "Obras Rodoanel Norte",
        status: "resolvido",
        date: "2024-09-08",
      },
    ],
    proposals: [
      "Digitalização completa do estado",
      "Programa Novotec",
      "SP Acelera",
    ],
    bio: "Engenheiro civil e político brasileiro. Ex-ministro da Infraestrutura (2019-2022). Governador de São Paulo desde 2023, focado em modernização da gestão pública e infraestrutura.",
    achievements: [
      "Marco do Saneamento",
      "Programa Conecta SP",
      "SP Tech Week",
      "Modernização da Secretaria de Transportes",
    ],
  },
  {
    id: 3,
    name: "Gleisi Hoffmann",
    party: "",
    position: "Deputada Federal",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b1bc?w=400",
    age: 58,
    location: "Curitiba - PR",
    experience: "18 anos",
    tags: [
      "FocoEmEducação",
      "IgualdadeRacial",
      "FocoEmSaúde",
      "PolíticoExperiente",
      "DireitosDaMulher",
    ],
    metrics: {
      efficiency: {
        score: 82,
        problemsAssigned: 54,
        resolutionRate: 76,
        publicRating: 3.9,
        resolvedProblems: 41,
      },
      officialPerformance: {
        score: 89,
        votingAttendance: 94,
        sessionAttendance: 88,
        transparency: 85,
        projectsApproved: 29,
      },
      publicReputation: {
        score: 72,
        judicialStatus: "Controversa",
        scandalInvolvement: 2,
        factCheckScore: 81,
        mediaRating: "Polarizada",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Lei de Cotas Universitárias",
        status: "aprovado",
        date: "2024-07-30",
      },
      {
        type: "votacao",
        title: "Marco Temporal",
        vote: "contrário",
        date: "2024-08-25",
      },
      {
        type: "problema",
        title: "Violência contra Mulher",
        status: "em-andamento",
        date: "2024-09-01",
      },
    ],
    proposals: [
      "Ampliação do sistema de cotas",
      "Lei Maria da Penha 2.0",
      "Programa Nacional de Creches",
    ],
    bio: "Advogada e política brasileira. Ex-ministra da Casa Civil (2011-2016) e senadora (2011-2019). Defensora dos direitos das mulheres e políticas de inclusão social.",
    achievements: [
      "Lei de Cotas ampliada",
      "Criação da SPM",
      "Marco Legal da Primeira Infância",
      "Lei do Feminicídio",
    ],
  },
  {
    id: 4,
    name: "Arthur Lira",
    party: "",
    position: "Deputado Federal - Presidente da Câmara",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    age: 54,
    location: "Maceió - AL",
    experience: "16 anos",
    tags: [
      "PolíticoExperiente",
      "FocoEmSegurança",
      "GestãoPública",
      "Articulação",
      "FichaLimpa",
    ],
    metrics: {
      efficiency: {
        score: 87,
        problemsAssigned: 72,
        resolutionRate: 79,
        publicRating: 3.7,
        resolvedProblems: 57,
      },
      officialPerformance: {
        score: 92,
        votingAttendance: 96,
        sessionAttendance: 94,
        transparency: 78,
        projectsApproved: 52,
      },
      publicReputation: {
        score: 74,
        judicialStatus: "Limpa",
        scandalInvolvement: 1,
        factCheckScore: 82,
        mediaRating: "Neutra",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Marco Fiscal",
        status: "aprovado",
        date: "2024-08-10",
      },
      {
        type: "votacao",
        title: "Reforma Tributária",
        vote: "favorável",
        date: "2024-07-20",
      },
      {
        type: "problema",
        title: "Gestão da Câmara",
        status: "resolvido",
        date: "2024-09-05",
      },
    ],
    proposals: [
      "Modernização do Congresso",
      "Reforma Administrativa",
      "Lei de Responsabilidade Fiscal",
    ],
    bio: "Político e empresário brasileiro. Presidente da Câmara dos Deputados desde 2021. Conhecido por sua habilidade de articulação política e gestão do Congresso Nacional.",
    achievements: [
      "Aprovação da Reforma Tributária",
      "Marco Fiscal aprovado",
      "Modernização da Câmara",
      "PEC dos Precatórios",
    ],
  },
  {
    id: 5,
    name: "Simone Tebet",
    party: "",
    position: "Ministra do Planejamento",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    age: 54,
    location: "Campo Grande - MS",
    experience: "22 anos",
    tags: [
      "PerfilTécnico",
      "FocoEmEducação",
      "Sustentabilidade",
      "IgualdadeRacial",
      "GestãoPública",
    ],
    metrics: {
      efficiency: {
        score: 93,
        problemsAssigned: 38,
        resolutionRate: 87,
        publicRating: 4.4,
        resolvedProblems: 33,
      },
      officialPerformance: {
        score: 96,
        votingAttendance: 98,
        sessionAttendance: 97,
        transparency: 94,
        projectsApproved: 24,
      },
      publicReputation: {
        score: 91,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 92,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Plano Nacional de Educação",
        status: "aprovado",
        date: "2024-08-28",
      },
      {
        type: "votacao",
        title: "Orçamento da Educação",
        vote: "favorável",
        date: "2024-09-15",
      },
      {
        type: "problema",
        title: "Evasão Escolar",
        status: "em-andamento",
        date: "2024-09-01",
      },
    ],
    proposals: ["Escola Integral", "Programa Pé-de-Meia", "Marco da Educação"],
    bio: "Advogada e política brasileira. Ex-senadora (2015-2023) e candidata à presidência em 2022. Atual ministra do Planejamento e Orçamento. Especialista em educação e políticas públicas para a infância.",
    achievements: [
      "Marco Legal da Primeira Infância",
      "Lei de Diretrizes da Educação",
      "Programa Criança Feliz",
      "PNE aprovado",
    ],
  },
  {
    id: 6,
    name: "Eduardo Leite",
    party: "",
    position: "Governador do Rio Grande do Sul",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    age: 39,
    location: "Porto Alegre - RS",
    experience: "12 anos",
    tags: [
      "RenovaçãoPolítica",
      "FocoEmSaúde",
      "PerfilTécnico",
      "GestãoPública",
      "Modernização",
    ],
    metrics: {
      efficiency: {
        score: 89,
        problemsAssigned: 65,
        resolutionRate: 81,
        publicRating: 4.2,
        resolvedProblems: 53,
      },
      officialPerformance: {
        score: 91,
        votingAttendance: 95,
        sessionAttendance: 93,
        transparency: 88,
        projectsApproved: 31,
      },
      publicReputation: {
        score: 88,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 89,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Reconstrução RS",
        status: "em-andamento",
        date: "2024-09-10",
      },
      {
        type: "votacao",
        title: "Auxílio Enchentes",
        vote: "favorável",
        date: "2024-08-15",
      },
      {
        type: "problema",
        title: "Infraestrutura Pós-Enchente",
        status: "em-andamento",
        date: "2024-09-01",
      },
    ],
    proposals: [
      "Plano Marshall para o RS",
      "RS Sustentável",
      "Programa Jovem Empreendedor",
    ],
    bio: "Médico veterinário e político brasileiro. Governador do Rio Grande do Sul desde 2019. Conhecido por sua gestão durante a pandemia e as enchentes de 2024. Defensor de políticas de modernização do estado.",
    achievements: [
      "Gestão da Pandemia reconhecida",
      "Modernização tributária",
      "Programa RS Digital",
      "Plano de Reconstrução",
    ],
  },
  {
    id: 7,
    name: "Tabata Amaral",
    party: "",
    position: "Deputada Federal",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b1bc?w=400",
    age: 30,
    location: "São Paulo - SP",
    experience: "6 anos",
    tags: [
      "RenovaçãoPolítica",
      "FocoEmEducação",
      "PerfilTécnico",
      "IgualdadeRacial",
      "Inovação",
    ],
    metrics: {
      efficiency: {
        score: 95,
        problemsAssigned: 42,
        resolutionRate: 90,
        publicRating: 4.6,
        resolvedProblems: 38,
      },
      officialPerformance: {
        score: 97,
        votingAttendance: 99,
        sessionAttendance: 98,
        transparency: 96,
        projectsApproved: 18,
      },
      publicReputation: {
        score: 92,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 94,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Marco da Educação Básica",
        status: "aprovado",
        date: "2024-08-20",
      },
      {
        type: "votacao",
        title: "FUNDEB",
        vote: "favorável",
        date: "2024-07-15",
      },
      {
        type: "problema",
        title: "Evasão Escolar Periferia",
        status: "resolvido",
        date: "2024-09-12",
      },
    ],
    proposals: [
      "Programa de Mentoria Jovem",
      "Base Nacional Comum",
      "Educação Digital",
    ],
    bio: "Cientista política, ativista e política brasileira. Formada em Harvard. Deputada federal desde 2019. Especialista em educação e defensora de políticas baseadas em evidências científicas.",
    achievements: [
      "Lei do Novo Ensino Médio",
      "Marco da Educação aprovado",
      "Programa Meninas na Ciência",
      "Base Nacional Comum Curricular",
    ],
  },
  {
    id: 8,
    name: "Ciro Gomes",
    party: "",
    position: "Ex-Ministro e Deputado Federal",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    age: 67,
    location: "Fortaleza - CE",
    experience: "35 anos",
    tags: [
      "PolíticoExperiente",
      "FocoEmEducação",
      "Sustentabilidade",
      "DesenvolvimentoEconômico",
      "GestãoPública",
    ],
    metrics: {
      efficiency: {
        score: 84,
        problemsAssigned: 58,
        resolutionRate: 74,
        publicRating: 3.8,
        resolvedProblems: 43,
      },
      officialPerformance: {
        score: 86,
        votingAttendance: 89,
        sessionAttendance: 85,
        transparency: 87,
        projectsApproved: 35,
      },
      publicReputation: {
        score: 79,
        judicialStatus: "Limpa",
        scandalInvolvement: 1,
        factCheckScore: 83,
        mediaRating: "Neutra",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Programa Nacional de Desenvolvimento",
        status: "em-andamento",
        date: "2024-08-05",
      },
      {
        type: "votacao",
        title: "Política Industrial",
        vote: "favorável",
        date: "2024-07-28",
      },
      {
        type: "problema",
        title: "Desemprego Juventude",
        status: "em-andamento",
        date: "2024-09-03",
      },
    ],
    proposals: [
      "Projeto Nacional de Desenvolvimento",
      "Política Industrial",
      "Programa Primeiro Emprego",
    ],
    bio: "Economista e político brasileiro. Ex-governador do Ceará (1991-1994 e 2007-2010), ex-ministro da Integração Nacional e das Cidades. Candidato à presidência em 1998, 2002, 2018 e 2022.",
    achievements: [
      "Modernização do Ceará",
      "Programa de Irrigação",
      "Lei de Águas",
      "Complexo Industrial do Pecém",
    ],
  },
  {
    id: 9,
    name: "Rodrigo Pacheco",
    party: "",
    position: "Senador - Presidente do Senado",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    age: 48,
    location: "Belo Horizonte - MG",
    experience: "12 anos",
    tags: [
      "PolíticoExperiente",
      "GestãoPública",
      "Articulação",
      "FichaLimpa",
      "Modernização",
    ],
    metrics: {
      efficiency: {
        score: 88,
        problemsAssigned: 45,
        resolutionRate: 82,
        publicRating: 4.0,
        resolvedProblems: 37,
      },
      officialPerformance: {
        score: 93,
        votingAttendance: 96,
        sessionAttendance: 94,
        transparency: 87,
        projectsApproved: 28,
      },
      publicReputation: {
        score: 84,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 86,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Marco do Saneamento",
        status: "aprovado",
        date: "2024-08-12",
      },
      {
        type: "votacao",
        title: "PEC da Segurança",
        vote: "favorável",
        date: "2024-09-08",
      },
      {
        type: "problema",
        title: "Modernização do Senado",
        status: "resolvido",
        date: "2024-09-15",
      },
    ],
    proposals: ["Modernização legislativa", "Marco da Segurança", "Lei do Gás"],
    bio: "Advogado e político brasileiro. Senador por Minas Gerais desde 2019 e presidente do Senado Federal desde 2021. Conhecido pela condução equilibrada dos trabalhos legislativos.",
    achievements: [
      "Aprovação do Marco do Saneamento",
      "Lei do Gás Natural",
      "Modernização do processo legislativo",
      "PEC Emergencial",
    ],
  },
  {
    id: 10,
    name: "João Doria",
    party: "",
    position: "Ex-Governador de São Paulo",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    age: 66,
    location: "São Paulo - SP",
    experience: "8 anos",
    tags: [
      "PerfilTécnico",
      "Modernização",
      "FocoEmSaúde",
      "Inovação",
      "GestãoPública",
    ],
    metrics: {
      efficiency: {
        score: 86,
        problemsAssigned: 78,
        resolutionRate: 79,
        publicRating: 3.9,
        resolvedProblems: 62,
      },
      officialPerformance: {
        score: 89,
        votingAttendance: 94,
        sessionAttendance: 91,
        transparency: 88,
        projectsApproved: 34,
      },
      publicReputation: {
        score: 77,
        judicialStatus: "Limpa",
        scandalInvolvement: 1,
        factCheckScore: 84,
        mediaRating: "Neutra",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Vacina do Butantan",
        status: "aprovado",
        date: "2024-07-18",
      },
      {
        type: "votacao",
        title: "Programa SP Tech",
        vote: "favorável",
        date: "2024-08-22",
      },
      {
        type: "problema",
        title: "Pandemia COVID-19",
        status: "resolvido",
        date: "2024-06-30",
      },
    ],
    proposals: ["SP Digital", "Programa Acelera", "Instituto Butantan"],
    bio: "Empresário e político brasileiro. Ex-prefeito de São Paulo (2017-2018) e ex-governador (2019-2022). Focado em modernização e digitalização da gestão pública.",
    achievements: [
      "Criação da Vacina do Butantan",
      "SP Acelera",
      "Programa SP Digital",
      "Modernização do Poupatempo",
    ],
  },
  {
    id: 11,
    name: "Flávio Dino",
    party: "",
    position: "Ministro da Justiça",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    age: 56,
    location: "São Luís - MA",
    experience: "20 anos",
    tags: [
      "PolíticoExperiente",
      "FocoEmSegurança",
      "FichaLimpa",
      "GestãoPública",
      "IgualdadeRacial",
    ],
    metrics: {
      efficiency: {
        score: 90,
        problemsAssigned: 67,
        resolutionRate: 83,
        publicRating: 4.1,
        resolvedProblems: 56,
      },
      officialPerformance: {
        score: 92,
        votingAttendance: 96,
        sessionAttendance: 93,
        transparency: 89,
        projectsApproved: 31,
      },
      publicReputation: {
        score: 85,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 87,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Marco da Segurança",
        status: "aprovado",
        date: "2024-08-25",
      },
      {
        type: "votacao",
        title: "Lei Antiterrorismo",
        vote: "favorável",
        date: "2024-09-02",
      },
      {
        type: "problema",
        title: "Violência Urbana",
        status: "em-andamento",
        date: "2024-09-10",
      },
    ],
    proposals: [
      "Sistema Nacional de Segurança",
      "Programa Favela Segura",
      "Lei de Combate ao Crime Organizado",
    ],
    bio: "Juiz federal, advogado e político brasileiro. Ex-governador do Maranhão (2015-2023) e atual ministro da Justiça e Segurança Pública. Especialista em segurança pública e direitos humanos.",
    achievements: [
      "Redução da violência no MA",
      "Criação da Guarda Civil",
      "Marco da Segurança Pública",
      "Lei Anticrime",
    ],
  },
  {
    id: 12,
    name: "Romeu Zema",
    party: "",
    position: "Governador de Minas Gerais",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    age: 59,
    location: "Belo Horizonte - MG",
    experience: "6 anos",
    tags: [
      "PerfilTécnico",
      "Modernização",
      "FocoEmEducação",
      "GestãoPública",
      "RenovaçãoPolítica",
    ],
    metrics: {
      efficiency: {
        score: 88,
        problemsAssigned: 73,
        resolutionRate: 81,
        publicRating: 4.0,
        resolvedProblems: 59,
      },
      officialPerformance: {
        score: 91,
        votingAttendance: 95,
        sessionAttendance: 92,
        transparency: 90,
        projectsApproved: 36,
      },
      publicReputation: {
        score: 83,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 86,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "MG Digital",
        status: "aprovado",
        date: "2024-08-18",
      },
      {
        type: "votacao",
        title: "Orçamento MG 2025",
        vote: "favorável",
        date: "2024-09-07",
      },
      {
        type: "problema",
        title: "Saneamento Vale do Rio Doce",
        status: "em-andamento",
        date: "2024-09-12",
      },
    ],
    proposals: ["MG Acelera", "Programa Minas Digital", "Vale do Conhecimento"],
    bio: "Empresário e político brasileiro. Governador de Minas Gerais desde 2019. Focado em modernização da gestão pública e desenvolvimento tecnológico do estado.",
    achievements: [
      "Programa MG Digital",
      "Modernização tributária",
      "Vale do Conhecimento",
      "MG Acelera aprovado",
    ],
  },
  {
    id: 13,
    name: "Ratinho Junior",
    party: "",
    position: "Governador do Paraná",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    age: 48,
    location: "Curitiba - PR",
    experience: "12 anos",
    tags: [
      "PolíticoExperiente",
      "FocoEmEducação",
      "Modernização",
      "PerfilTécnico",
      "GestãoPública",
    ],
    metrics: {
      efficiency: {
        score: 89,
        problemsAssigned: 82,
        resolutionRate: 84,
        publicRating: 4.2,
        resolvedProblems: 69,
      },
      officialPerformance: {
        score: 93,
        votingAttendance: 97,
        sessionAttendance: 94,
        transparency: 88,
        projectsApproved: 42,
      },
      publicReputation: {
        score: 87,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 89,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Paraná Inteligente",
        status: "aprovado",
        date: "2024-08-20",
      },
      {
        type: "votacao",
        title: "Lei da Inovação",
        vote: "favorável",
        date: "2024-09-05",
      },
      {
        type: "problema",
        title: "Educação Técnica",
        status: "resolvido",
        date: "2024-09-15",
      },
    ],
    proposals: ["PR Tech", "Programa Paraná Mais Emprego", "Hub de Inovação"],
    bio: "Jornalista e político brasileiro. Governador do Paraná desde 2019. Filho do comunicador Carlos Massa (Ratinho). Focado em modernização e desenvolvimento tecnológico.",
    achievements: [
      "Paraná Inteligente",
      "Hub de Inovação",
      "Programa Mais Emprego",
      "Modernização educacional",
    ],
  },
  {
    id: 14,
    name: "Claudio Castro",
    party: "",
    position: "Governador do Rio de Janeiro",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    age: 45,
    location: "Rio de Janeiro - RJ",
    experience: "10 anos",
    tags: [
      "FocoEmSegurança",
      "PolíticoExperiente",
      "GestãoPública",
      "FocoEmSaúde",
      "Modernização",
    ],
    metrics: {
      efficiency: {
        score: 83,
        problemsAssigned: 95,
        resolutionRate: 75,
        publicRating: 3.8,
        resolvedProblems: 71,
      },
      officialPerformance: {
        score: 86,
        votingAttendance: 92,
        sessionAttendance: 89,
        transparency: 81,
        projectsApproved: 29,
      },
      publicReputation: {
        score: 76,
        judicialStatus: "Limpa",
        scandalInvolvement: 1,
        factCheckScore: 82,
        mediaRating: "Neutra",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Programa Segurança Presente",
        status: "aprovado",
        date: "2024-08-12",
      },
      {
        type: "votacao",
        title: "Orçamento RJ 2025",
        vote: "favorável",
        date: "2024-09-08",
      },
      {
        type: "problema",
        title: "Violência Urbana RJ",
        status: "em-andamento",
        date: "2024-09-14",
      },
    ],
    proposals: [
      "RJ Seguro",
      "Programa Família Carioca",
      "Modernização da Saúde",
    ],
    bio: "Político brasileiro. Governador do Rio de Janeiro desde 2021. Vice-governador que assumiu após afastamento do titular. Focado em segurança pública e recuperação econômica.",
    achievements: [
      "Programa Segurança Presente",
      "RJ Digital",
      "Modernização da saúde",
      "Controle da violência",
    ],
  },
  {
    id: 15,
    name: "Helder Barbalho",
    party: "",
    position: "Governador do Pará",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    age: 45,
    location: "Belém - PA",
    experience: "18 anos",
    tags: [
      "PolíticoExperiente",
      "Sustentabilidade",
      "FocoEmEducação",
      "DesenvolvimentoEconômico",
      "GestãoPública",
    ],
    metrics: {
      efficiency: {
        score: 87,
        problemsAssigned: 76,
        resolutionRate: 80,
        publicRating: 4.0,
        resolvedProblems: 61,
      },
      officialPerformance: {
        score: 90,
        votingAttendance: 94,
        sessionAttendance: 91,
        transparency: 85,
        projectsApproved: 38,
      },
      publicReputation: {
        score: 82,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 84,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Amazônia Sustentável",
        status: "aprovado",
        date: "2024-08-22",
      },
      {
        type: "votacao",
        title: "Fundo Amazônia",
        vote: "favorável",
        date: "2024-09-03",
      },
      {
        type: "problema",
        title: "Desmatamento Ilegal",
        status: "em-andamento",
        date: "2024-09-11",
      },
    ],
    proposals: [
      "PA Sustentável",
      "Programa Amazônia Conectada",
      "Bioeconomia Paraense",
    ],
    bio: "Político brasileiro. Governador do Pará desde 2019. Ex-ministro da Integração Nacional (2016-2018). Focado em desenvolvimento sustentável da Amazônia e bioeconomia.",
    achievements: [
      "Programa Amazônia Sustentável",
      "PA Digital",
      "Bioeconomia Paraense",
      "Fundo Verde",
    ],
  },
  {
    id: 16,
    name: "Fábio Faria",
    party: "",
    position: "Ex-Ministro das Comunicações",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    age: 42,
    location: "Natal - RN",
    experience: "8 anos",
    tags: [
      "PerfilTécnico",
      "Inovação",
      "Modernização",
      "RenovaçãoPolítica",
      "FocoEmEducação",
    ],
    metrics: {
      efficiency: {
        score: 91,
        problemsAssigned: 54,
        resolutionRate: 87,
        publicRating: 4.3,
        resolvedProblems: 47,
      },
      officialPerformance: {
        score: 94,
        votingAttendance: 98,
        sessionAttendance: 96,
        transparency: 92,
        projectsApproved: 25,
      },
      publicReputation: {
        score: 88,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 90,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "5G para Todos",
        status: "aprovado",
        date: "2024-08-16",
      },
      {
        type: "votacao",
        title: "Marco Civil da Internet",
        vote: "favorável",
        date: "2024-09-04",
      },
      {
        type: "problema",
        title: "Inclusão Digital",
        status: "resolvido",
        date: "2024-09-13",
      },
    ],
    proposals: ["Brasil Digital", "5G Popular", "Programa Conecta Escolas"],
    bio: "Comunicador e político brasileiro. Ex-ministro das Comunicações (2020-2022). Deputado federal por duas vezes. Especialista em tecnologia e comunicação digital.",
    achievements: [
      "Implementação do 5G",
      "Brasil Digital",
      "Marco da Internet",
      "Conecta Escolas",
    ],
  },
  {
    id: 17,
    name: "Marina Silva",
    party: "",
    position: "Ministra do Meio Ambiente",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b1bc?w=400",
    age: 66,
    location: "Rio Branco - AC",
    experience: "30 anos",
    tags: [
      "Sustentabilidade",
      "PolíticoExperiente",
      "FichaLimpa",
      "IgualdadeRacial",
      "FocoEmEducação",
    ],
    metrics: {
      efficiency: {
        score: 92,
        problemsAssigned: 89,
        resolutionRate: 86,
        publicRating: 4.5,
        resolvedProblems: 77,
      },
      officialPerformance: {
        score: 95,
        votingAttendance: 97,
        sessionAttendance: 95,
        transparency: 94,
        projectsApproved: 43,
      },
      publicReputation: {
        score: 90,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 93,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Lei da Biodiversidade",
        status: "aprovado",
        date: "2024-08-28",
      },
      {
        type: "votacao",
        title: "Código Florestal",
        vote: "favorável",
        date: "2024-09-06",
      },
      {
        type: "problema",
        title: "Desmatamento Amazônia",
        status: "em-andamento",
        date: "2024-09-15",
      },
    ],
    proposals: [
      "Amazônia Legal",
      "Programa Carbono Zero",
      "Bioeconomia Nacional",
    ],
    bio: "Historiadora, ambientalista e política brasileira. Ex-senadora e ex-ministra do Meio Ambiente. Candidata à presidência em 2010 e 2014. Referência mundial em questões ambientais.",
    achievements: [
      "Criação do SNUC",
      "Lei da Biodiversidade",
      "Programa Amazônia Legal",
      "Acordo de Paris",
    ],
  },
  {
    id: 18,
    name: "Alessandro Vieira",
    party: "",
    position: "Senador por Sergipe",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    age: 51,
    location: "Aracaju - SE",
    experience: "15 anos",
    tags: [
      "FichaLimpa",
      "FocoEmSegurança",
      "PerfilTécnico",
      "RenovaçãoPolítica",
      "GestãoPública",
    ],
    metrics: {
      efficiency: {
        score: 89,
        problemsAssigned: 43,
        resolutionRate: 84,
        publicRating: 4.1,
        resolvedProblems: 36,
      },
      officialPerformance: {
        score: 93,
        votingAttendance: 97,
        sessionAttendance: 94,
        transparency: 91,
        projectsApproved: 21,
      },
      publicReputation: {
        score: 87,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 89,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Lei de Combate à Corrupção",
        status: "aprovado",
        date: "2024-08-14",
      },
      {
        type: "votacao",
        title: "Marco da Segurança",
        vote: "favorável",
        date: "2024-09-01",
      },
      {
        type: "problema",
        title: "Violência Policial",
        status: "em-andamento",
        date: "2024-09-09",
      },
    ],
    proposals: [
      "Lei Anticorrupção",
      "Modernização da PM",
      "Programa Cidade Segura",
    ],
    bio: "Delegado da Polícia Federal e político brasileiro. Senador por Sergipe desde 2019. Especialista em segurança pública e combate à corrupção.",
    achievements: [
      "Lei Anticorrupção",
      "CPI das Fake News",
      "Marco da Segurança",
      "Modernização policial",
    ],
  },
  {
    id: 19,
    name: "Marcelo Freixo",
    party: "",
    position: "Deputado Federal - RJ",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    age: 57,
    location: "Rio de Janeiro - RJ",
    experience: "20 anos",
    tags: [
      "FichaLimpa",
      "FocoEmSegurança",
      "IgualdadeRacial",
      "PolíticoExperiente",
      "FocoEmEducação",
    ],
    metrics: {
      efficiency: {
        score: 91,
        problemsAssigned: 68,
        resolutionRate: 85,
        publicRating: 4.3,
        resolvedProblems: 58,
      },
      officialPerformance: {
        score: 94,
        votingAttendance: 98,
        sessionAttendance: 96,
        transparency: 93,
        projectsApproved: 34,
      },
      publicReputation: {
        score: 89,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 91,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Lei dos Direitos Humanos",
        status: "aprovado",
        date: "2024-08-26",
      },
      {
        type: "votacao",
        title: "PEC da Segurança",
        vote: "favorável",
        date: "2024-09-07",
      },
      {
        type: "problema",
        title: "Violência Policial",
        status: "em-andamento",
        date: "2024-09-16",
      },
    ],
    proposals: [
      "Programa Paz nas Escolas",
      "Lei da Igualdade Racial",
      "Modernização da Segurança",
    ],
    bio: "Professor, sociólogo e político brasileiro. Deputado federal pelo Rio de Janeiro. Ex-deputado estadual. Especialista em direitos humanos e segurança pública.",
    achievements: [
      "CPI das Milícias",
      "Lei dos Direitos Humanos",
      "Programa Paz nas Escolas",
      "Combate à violência policial",
    ],
  },
  {
    id: 20,
    name: "Camilo Santana",
    party: "",
    position: "Ministro da Educação",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    age: 55,
    location: "Fortaleza - CE",
    experience: "22 anos",
    tags: [
      "FocoEmEducação",
      "PolíticoExperiente",
      "GestãoPública",
      "PerfilTécnico",
      "FichaLimpa",
    ],
    metrics: {
      efficiency: {
        score: 93,
        problemsAssigned: 84,
        resolutionRate: 88,
        publicRating: 4.4,
        resolvedProblems: 74,
      },
      officialPerformance: {
        score: 95,
        votingAttendance: 97,
        sessionAttendance: 96,
        transparency: 91,
        projectsApproved: 47,
      },
      publicReputation: {
        score: 88,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 90,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Novo Ensino Médio",
        status: "aprovado",
        date: "2024-08-30",
      },
      {
        type: "votacao",
        title: "Marco da Educação",
        vote: "favorável",
        date: "2024-09-08",
      },
      {
        type: "problema",
        title: "Evasão Escolar",
        status: "em-andamento",
        date: "2024-09-17",
      },
    ],
    proposals: [
      "Brasil Alfabetizado",
      "Escola em Tempo Integral",
      "Programa Mais Professores",
    ],
    bio: "Advogado e político brasileiro. Ex-governador do Ceará (2015-2023) e atual ministro da Educação. Reconhecido pelos avanços educacionais implementados no Ceará.",
    achievements: [
      "Novo Ensino Médio",
      "ENEM Digital",
      "Ceará na educação",
      "Programa Mais Professores",
    ],
  },
  {
    id: 21,
    name: "Guilherme Boulos",
    party: "",
    position: "Deputado Federal - SP",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    age: 42,
    location: "São Paulo - SP",
    experience: "8 anos",
    tags: [
      "FocoEmHabitação",
      "IgualdadeRacial",
      "FocoEmSaúde",
      "RenovaçãoPolítica",
      "FichaLimpa",
    ],
    metrics: {
      efficiency: {
        score: 86,
        problemsAssigned: 79,
        resolutionRate: 78,
        publicRating: 3.9,
        resolvedProblems: 62,
      },
      officialPerformance: {
        score: 89,
        votingAttendance: 95,
        sessionAttendance: 92,
        transparency: 87,
        projectsApproved: 28,
      },
      publicReputation: {
        score: 81,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 85,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Lei da Moradia Popular",
        status: "em-tramitacao",
        date: "2024-08-24",
      },
      {
        type: "votacao",
        title: "PEC da Habitação",
        vote: "favorável",
        date: "2024-09-05",
      },
      {
        type: "problema",
        title: "Crise Habitacional SP",
        status: "em-andamento",
        date: "2024-09-14",
      },
    ],
    proposals: [
      "Programa Moradia Popular",
      "SUS Mental",
      "Renda Básica Universal",
    ],
    bio: "Psicólogo, escritor e político brasileiro. Deputado federal por São Paulo. Coordenador do MTST (Movimento dos Trabalhadores Sem Teto). Focado em questões habitacionais e sociais.",
    achievements: [
      "Lei da Moradia Popular",
      "MTST 20 anos",
      "Programa Casa Verde Amarela",
      "SUS Mental",
    ],
  },
  {
    id: 22,
    name: "Kim Kataguiri",
    party: "",
    position: "Deputado Federal - SP",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    age: 28,
    location: "São Paulo - SP",
    experience: "7 anos",
    tags: [
      "RenovaçãoPolítica",
      "PerfilTécnico",
      "Inovação",
      "FichaLimpa",
      "Modernização",
    ],
    metrics: {
      efficiency: {
        score: 87,
        problemsAssigned: 45,
        resolutionRate: 82,
        publicRating: 4.0,
        resolvedProblems: 37,
      },
      officialPerformance: {
        score: 91,
        votingAttendance: 96,
        sessionAttendance: 93,
        transparency: 90,
        projectsApproved: 19,
      },
      publicReputation: {
        score: 83,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 86,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Marco do Empreendedorismo",
        status: "aprovado",
        date: "2024-08-21",
      },
      {
        type: "votacao",
        title: "Lei de Startups",
        vote: "favorável",
        date: "2024-09-03",
      },
      {
        type: "problema",
        title: "Burocracia Empresarial",
        status: "resolvido",
        date: "2024-09-11",
      },
    ],
    proposals: [
      "Brasil Empreendedor",
      "Lei das Startups",
      "Desburocratização Digital",
    ],
    bio: "Youtuber, empresário e político brasileiro. Deputado federal por São Paulo. Co-fundador do MBL (Movimento Brasil Livre). Focado em empreendedorismo e inovação.",
    achievements: [
      "Marco do Empreendedorismo",
      "Lei das Startups",
      "MBL 10 anos",
      "Desburocratização",
    ],
  },
  {
    id: 23,
    name: "Soraya Thronicke",
    party: "",
    position: "Senadora por MS",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b1bc?w=400",
    age: 50,
    location: "Campo Grande - MS",
    experience: "16 anos",
    tags: [
      "FichaLimpa",
      "FocoEmSegurança",
      "PerfilTécnico",
      "GestãoPública",
      "IgualdadeRacial",
    ],
    metrics: {
      efficiency: {
        score: 88,
        problemsAssigned: 52,
        resolutionRate: 83,
        publicRating: 4.1,
        resolvedProblems: 43,
      },
      officialPerformance: {
        score: 92,
        votingAttendance: 97,
        sessionAttendance: 94,
        transparency: 89,
        projectsApproved: 24,
      },
      publicReputation: {
        score: 85,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 87,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Lei da Advocacia Criminal",
        status: "aprovado",
        date: "2024-08-19",
      },
      {
        type: "votacao",
        title: "Marco da Justiça",
        vote: "favorável",
        date: "2024-09-04",
      },
      {
        type: "problema",
        title: "Sistema Prisional MS",
        status: "em-andamento",
        date: "2024-09-12",
      },
    ],
    proposals: [
      "Modernização da Justiça",
      "Programa Mulher Segura",
      "Lei Anticrime MS",
    ],
    bio: "Advogada criminalista e política brasileira. Senadora por Mato Grosso do Sul desde 2019. Ex-delegada da Polícia Civil. Especialista em direito criminal e segurança pública.",
    achievements: [
      "Lei da Advocacia Criminal",
      "Marco da Justiça",
      "Mulher Segura",
      "Modernização prisional",
    ],
  },
  {
    id: 24,
    name: "Randolfe Rodrigues",
    party: "",
    position: "Senador por AP",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    age: 56,
    location: "Macapá - AP",
    experience: "24 anos",
    tags: [
      "PolíticoExperiente",
      "FichaLimpa",
      "FocoEmEducação",
      "GestãoPública",
      "IgualdadeRacial",
    ],
    metrics: {
      efficiency: {
        score: 90,
        problemsAssigned: 61,
        resolutionRate: 84,
        publicRating: 4.2,
        resolvedProblems: 51,
      },
      officialPerformance: {
        score: 93,
        votingAttendance: 98,
        sessionAttendance: 95,
        transparency: 91,
        projectsApproved: 33,
      },
      publicReputation: {
        score: 86,
        judicialStatus: "Limpa",
        scandalInvolvement: 0,
        factCheckScore: 88,
        mediaRating: "Positiva",
      },
    },
    recentActions: [
      {
        type: "projeto",
        title: "Lei da Transparência",
        status: "aprovado",
        date: "2024-08-27",
      },
      {
        type: "votacao",
        title: "Marco da Educação",
        vote: "favorável",
        date: "2024-09-06",
      },
      {
        type: "problema",
        title: "Acesso à Educação AP",
        status: "em-andamento",
        date: "2024-09-15",
      },
    ],
    proposals: [
      "Amapá Digital",
      "Programa Educação Amazônica",
      "Lei da Transparência Total",
    ],
    bio: "Advogado e político brasileiro. Senador pelo Amapá desde 2011. Ex-deputado federal. Líder da oposição no Senado (2019-2023). Focado em transparência e educação.",
    achievements: [
      "Lei da Transparência",
      "CPI da Covid",
      "Marco da Educação",
      "Amapá Digital",
    ],
  },
];

async function migrate() {
  let connection;

  try {
    console.log("🔄 Iniciando migração do banco de dados...");

    // Conectar ao MySQL
    connection = await mysql.createConnection(dbConfig);
    console.log("✅ Conectado ao MySQL");

    // Executar schema
    console.log("📋 Executando schema do banco...");
    const schemaSQL = readFileSync(
      join(__dirname, "../database/schema.sql"),
      "utf8"
    );
    await connection.execute(schemaSQL);
    console.log("✅ Schema criado com sucesso");

    // Limpar dados existentes
    await connection.execute("SET FOREIGN_KEY_CHECKS = 0");
    await connection.execute("TRUNCATE TABLE politician_achievements");
    await connection.execute("TRUNCATE TABLE politician_proposals");
    await connection.execute("TRUNCATE TABLE recent_actions");
    await connection.execute("TRUNCATE TABLE politician_tags");
    await connection.execute("TRUNCATE TABLE politicians");
    await connection.execute("SET FOREIGN_KEY_CHECKS = 1");
    console.log("🧹 Tabelas limpas");

    // Inserir dados dos políticos
    console.log("👥 Inserindo dados dos políticos...");

    for (const politician of politiciansData) {
      // Inserir político principal
      const [result] = await connection.execute(
        `
        INSERT INTO politicians (
          id, name, party, position, photo, age, location, experience, bio,
          efficiency_score, problems_assigned, resolution_rate, public_rating, resolved_problems,
          official_score, voting_attendance, session_attendance, transparency, projects_approved,
          reputation_score, judicial_status, scandal_involvement, fact_check_score, media_rating
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
        [
          politician.id,
          politician.name,
          politician.party,
          politician.position,
          politician.photo,
          politician.age,
          politician.location,
          politician.experience,
          politician.bio,
          politician.metrics.efficiency.score,
          politician.metrics.efficiency.problemsAssigned,
          politician.metrics.efficiency.resolutionRate,
          politician.metrics.efficiency.publicRating,
          politician.metrics.efficiency.resolvedProblems,
          politician.metrics.officialPerformance.score,
          politician.metrics.officialPerformance.votingAttendance,
          politician.metrics.officialPerformance.sessionAttendance,
          politician.metrics.officialPerformance.transparency,
          politician.metrics.officialPerformance.projectsApproved,
          politician.metrics.publicReputation.score,
          politician.metrics.publicReputation.judicialStatus,
          politician.metrics.publicReputation.scandalInvolvement,
          politician.metrics.publicReputation.factCheckScore,
          politician.metrics.publicReputation.mediaRating,
        ]
      );

      // Inserir tags
      for (const tag of politician.tags) {
        await connection.execute(
          `
          INSERT INTO politician_tags (politician_id, tag_name) VALUES (?, ?)
        `,
          [politician.id, tag]
        );
      }

      // Inserir ações recentes
      for (const action of politician.recentActions) {
        await connection.execute(
          `
          INSERT INTO recent_actions (politician_id, type, title, status, vote, date) 
          VALUES (?, ?, ?, ?, ?, ?)
        `,
          [
            politician.id,
            action.type,
            action.title,
            action.status,
            action.vote || null,
            action.date,
          ]
        );
      }

      // Inserir propostas
      for (const proposal of politician.proposals) {
        await connection.execute(
          `
          INSERT INTO politician_proposals (politician_id, proposal) VALUES (?, ?)
        `,
          [politician.id, proposal]
        );
      }

      // Inserir conquistas
      for (const achievement of politician.achievements) {
        await connection.execute(
          `
          INSERT INTO politician_achievements (politician_id, achievement) VALUES (?, ?)
        `,
          [politician.id, achievement]
        );
      }

      console.log(`✅ ${politician.name} inserido com sucesso`);
    }

    console.log("🎉 Migração concluída com sucesso!");
    console.log(`📊 Total de políticos inseridos: ${politiciansData.length}`);
  } catch (error) {
    console.error("❌ Erro na migração:", error);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// Executar migração
migrate();
