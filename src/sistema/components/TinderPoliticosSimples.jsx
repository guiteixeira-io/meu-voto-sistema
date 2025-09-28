import { useState } from "react";
import { HeartIcon, XMarkIcon } from "@heroicons/react/24/solid";

const TinderPoliticosSimples = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState([]);

  const politicos = [
    {
      id: 1,
      nome: "Maria Silva",
      partido: "PSDB",
      cargo: "Candidata a Prefeita",
    },
    {
      id: 2,
      nome: "João Santos",
      partido: "PT",
      cargo: "Candidato a Deputado",
    },
  ];

  const currentPolitico = politicos[currentIndex];

  const handleLike = () => {
    if (currentPolitico) {
      setMatches((prev) => [...prev, currentPolitico]);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleDislike = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  if (currentIndex >= politicos.length) {
    return (
      <div className="text-center p-4">
        <h3 className="text-lg font-semibold">Parabéns!</h3>
        <p className="text-gray-600">Você avaliou todos os políticos.</p>
        <p className="text-sm text-gray-500 mt-2">Matches: {matches.length}</p>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto">
      {currentPolitico && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold">{currentPolitico.nome}</h3>
            <p className="text-gray-600">{currentPolitico.partido}</p>
            <p className="text-sm text-gray-500">{currentPolitico.cargo}</p>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={handleDislike}
              className="flex items-center justify-center w-12 h-12 bg-red-100 hover:bg-red-200 rounded-full"
            >
              <XMarkIcon className="w-6 h-6 text-red-600" />
            </button>

            <button
              onClick={handleLike}
              className="flex items-center justify-center w-12 h-12 bg-green-100 hover:bg-green-200 rounded-full"
            >
              <HeartIcon className="w-6 h-6 text-green-600" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TinderPoliticosSimples;
