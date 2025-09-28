import { useState, useEffect, useCallback } from "react";
import { HeartIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";
import Toast from "../../shared/components/Toast";

const PoliticoCard = ({ politico, onLike, onDislike }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm mx-auto">
      {/* Imagem do político */}
      <div className="relative h-96">
        <img
          src={politico.foto || "/api/placeholder/400/600"}
          alt={politico.nome}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Info básica sobre a imagem */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{politico.nome}</h3>
          <p className="text-lg opacity-90">
            {politico.partido} • {politico.cargo}
          </p>
          <p className="text-sm opacity-75">
            {politico.cidade}, {politico.estado}
          </p>
        </div>
      </div>

      {/* Informações detalhadas */}
      <div className="p-6">
        <div className="space-y-4">
          {politico.bio && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Sobre</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {politico.bio}
              </p>
            </div>
          )}

          {politico.propostas && politico.propostas.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Principais Propostas
              </h4>
              <div className="flex flex-wrap gap-2">
                {politico.propostas.slice(0, 3).map((proposta, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {proposta}
                  </span>
                ))}
              </div>
            </div>
          )}

          {politico.experiencia && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Experiência</h4>
              <p className="text-gray-600 text-sm">{politico.experiencia}</p>
            </div>
          )}
        </div>
      </div>

      {/* Botões de ação */}
      <div className="flex justify-center space-x-6 p-6 bg-gray-50">
        <button
          onClick={onDislike}
          className="flex items-center justify-center w-14 h-14 bg-white border-2 border-gray-300 rounded-full hover:border-red-400 hover:bg-red-50 transition-colors group"
        >
          <XMarkIcon className="w-6 h-6 text-gray-400 group-hover:text-red-500" />
        </button>

        <button
          onClick={onLike}
          className="flex items-center justify-center w-14 h-14 bg-white border-2 border-gray-300 rounded-full hover:border-green-400 hover:bg-green-50 transition-colors group"
        >
          <HeartIcon className="w-6 h-6 text-gray-400 group-hover:text-green-500" />
        </button>
      </div>
    </div>
  );
};

const TinderPoliticos = () => {
  const [politicos] = useState([
    {
      id: 1,
      nome: "Maria Silva",
      partido: "PSDB",
      cargo: "Candidata a Prefeita",
      cidade: "São Paulo",
      estado: "SP",
      foto: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=600&fit=crop&crop=face",
      bio: "Advogada com 15 anos de experiência em direito público, focada em políticas de habitação e mobilidade urbana.",
      propostas: ["Habitação Popular", "Transporte Público", "Meio Ambiente"],
      experiencia: "Vereadora por 2 mandatos, Secretária de Habitação",
    },
    {
      id: 2,
      nome: "João Santos",
      partido: "PT",
      cargo: "Candidato a Deputado",
      cidade: "Rio de Janeiro",
      estado: "RJ",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
      bio: "Professor universitário e sindicalista, lutando por educação de qualidade e direitos trabalhistas.",
      propostas: ["Educação", "Saúde Pública", "Direitos Trabalhistas"],
      experiencia: "Professor há 20 anos, Líder sindical",
    },
    {
      id: 3,
      nome: "Ana Costa",
      partido: "PSOL",
      cargo: "Candidata a Vereadora",
      cidade: "Belo Horizonte",
      estado: "MG",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
      bio: "Ativista social e empreendedora, defendendo políticas de inclusão e economia criativa.",
      propostas: ["Cultura", "Economia Criativa", "Inclusão Social"],
      experiencia: "Fundadora de ONG, Consultora em projetos sociais",
    },
    {
      id: 4,
      nome: "Carlos Oliveira",
      partido: "MDB",
      cargo: "Candidato a Governador",
      cidade: "Brasília",
      estado: "DF",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face",
      bio: "Empresário e ex-secretário de desenvolvimento econômico, focado em inovação e geração de empregos.",
      propostas: [
        "Inovação Tecnológica",
        "Empreendedorismo",
        "Desenvolvimento Econômico",
      ],
      experiencia: "CEO de startups, Ex-secretário de desenvolvimento",
    },
    {
      id: 5,
      nome: "Fernanda Lima",
      partido: "REDE",
      cargo: "Candidata a Senadora",
      cidade: "Recife",
      estado: "PE",
      foto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop&crop=face",
      bio: "Ambientalista e bióloga, dedicada à preservação do meio ambiente e sustentabilidade.",
      propostas: [
        "Sustentabilidade",
        "Energia Renovável",
        "Preservação Ambiental",
      ],
      experiencia: "Pesquisadora há 12 anos, Ativista ambiental",
    },
    {
      id: 6,
      nome: "Roberto Mendes",
      partido: "PDT",
      cargo: "Candidato a Prefeito",
      cidade: "Salvador",
      estado: "BA",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
      bio: "Médico e gestor público, trabalhando para melhorar o sistema de saúde e qualidade de vida urbana.",
      propostas: ["Saúde Pública", "Infraestrutura Urbana", "Segurança"],
      experiencia: "Médico há 18 anos, Ex-secretário de saúde",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState([]);
  const [toast, setToast] = useState(null);

  const currentPolitico = politicos[currentIndex];

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  const nextPolitico = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handleLike = useCallback(() => {
    if (currentPolitico) {
      setMatches((prev) => [...prev, currentPolitico]);
      showToast(`Você curtiu ${currentPolitico.nome}! 💚`, "like");
      nextPolitico();
    }
  }, [currentPolitico, nextPolitico]);

  const handleDislike = useCallback(() => {
    if (currentPolitico) {
      showToast(`${currentPolitico.nome} foi rejeitado`, "dislike");
    }
    nextPolitico();
  }, [currentPolitico, nextPolitico]);

  // Suporte a teclado
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowRight" || event.key === "l") {
        event.preventDefault();
        handleLike();
      } else if (event.key === "ArrowLeft" || event.key === "d") {
        event.preventDefault();
        handleDislike();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleLike, handleDislike]);

  if (currentIndex >= politicos.length) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center">
        <div className="mb-6">
          <HeartIcon className="w-16 h-16 text-pink-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Parabéns!</h3>
          <p className="text-gray-600">
            Você avaliou todos os políticos disponíveis.
          </p>
        </div>

        {matches.length > 0 && (
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md">
            <h4 className="font-semibold text-gray-900 mb-3">
              Seus Matches ({matches.length})
            </h4>
            <div className="space-y-2">
              {matches.map((match) => (
                <div key={match.id} className="flex items-center space-x-3">
                  <img
                    src={match.foto}
                    alt={match.nome}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm">{match.nome}</p>
                    <p className="text-xs text-gray-500">
                      {match.partido} • {match.cargo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Toast Notifications */}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}

      {/* Instruções de teclado */}
      <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Controles</h3>
        <div className="flex flex-wrap gap-4 text-sm text-blue-700">
          <span className="flex items-center">
            <kbd className="bg-white px-2 py-1 rounded text-xs mr-2">←</kbd> ou
            <kbd className="bg-white px-2 py-1 rounded text-xs mx-2">
              D
            </kbd>{" "}
            para rejeitar
          </span>
          <span className="flex items-center">
            <kbd className="bg-white px-2 py-1 rounded text-xs mr-2">→</kbd> ou
            <kbd className="bg-white px-2 py-1 rounded text-xs mx-2">
              L
            </kbd>{" "}
            para curtir
          </span>
        </div>
      </div>

      {/* Contador */}
      <div className="text-center mb-4">
        <span className="text-sm text-gray-500">
          {currentIndex + 1} de {politicos.length}
        </span>
      </div>

      {/* Card do político */}
      {currentPolitico && (
        <PoliticoCard
          politico={currentPolitico}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      )}

      {/* Estatísticas */}
      <div className="mt-6 flex justify-center space-x-8 text-center">
        <div>
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-2 mx-auto">
            <HandThumbUpIcon className="w-6 h-6 text-green-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">
            {matches.length}
          </span>
          <p className="text-xs text-gray-500">Matches</p>
        </div>
        <div>
          <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-2 mx-auto">
            <HandThumbDownIcon className="w-6 h-6 text-red-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">
            {currentIndex - matches.length}
          </span>
          <p className="text-xs text-gray-500">Rejeitados</p>
        </div>
      </div>
    </div>
  );
};

export default TinderPoliticos;
