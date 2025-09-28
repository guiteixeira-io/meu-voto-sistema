import { useState } from "react";
import { Tag, X, Search } from "lucide-react";

const TagSystem = ({ selectedTags = [], onTagsChange, availableTags = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const defaultTags = [
    // Espectro e Ideologia
    {
      id: "esquerda",
      name: "Esquerda",
      category: "Ideologia",
      color: "bg-red-100 text-red-800",
    },
    {
      id: "centro",
      name: "Centro",
      category: "Ideologia",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "direita",
      name: "Direita",
      category: "Ideologia",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "liberal",
      name: "Liberal",
      category: "Ideologia",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: "progressista",
      name: "Progressista",
      category: "Ideologia",
      color: "bg-green-100 text-green-800",
    },
    {
      id: "conservador",
      name: "Conservador",
      category: "Ideologia",
      color: "bg-gray-100 text-gray-800",
    },

    // Pautas Econômicas
    {
      id: "livre-mercado",
      name: "Livre Mercado",
      category: "Economia",
      color: "bg-amber-100 text-amber-800",
    },
    {
      id: "menos-impostos",
      name: "Menos Impostos",
      category: "Economia",
      color: "bg-lime-100 text-lime-800",
    },
    {
      id: "defesa-estatais",
      name: "Defesa das Estatais",
      category: "Economia",
      color: "bg-rose-100 text-rose-800",
    },
    {
      id: "pro-privatizacao",
      name: "Pró-Privatização",
      category: "Economia",
      color: "bg-teal-100 text-teal-800",
    },

    // Pautas Sociais
    {
      id: "direitos-lgbtqia",
      name: "Direitos LGBTQIA+",
      category: "Social",
      color: "bg-rainbow-100 text-rainbow-800",
    },
    {
      id: "pro-vida",
      name: "Pró-Vida",
      category: "Social",
      color: "bg-pink-100 text-pink-800",
    },
    {
      id: "legalizacao-armas",
      name: "Legalização de Armas",
      category: "Social",
      color: "bg-orange-100 text-orange-800",
    },
    {
      id: "igualdade-racial",
      name: "Igualdade Racial",
      category: "Social",
      color: "bg-purple-100 text-purple-800",
    },

    // Perfil e Estilo
    {
      id: "renovacao-politica",
      name: "Renovação Política",
      category: "Perfil",
      color: "bg-cyan-100 text-cyan-800",
    },
    {
      id: "politico-experiente",
      name: "Político Experiente",
      category: "Perfil",
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      id: "perfil-tecnico",
      name: "Perfil Técnico",
      category: "Perfil",
      color: "bg-violet-100 text-violet-800",
    },
    {
      id: "ficha-limpa",
      name: "Ficha Limpa",
      category: "Perfil",
      color: "bg-green-100 text-green-800",
    },

    // Áreas Prioritárias
    {
      id: "foco-educacao",
      name: "Foco em Educação",
      category: "Prioridades",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "foco-saude",
      name: "Foco em Saúde",
      category: "Prioridades",
      color: "bg-red-100 text-red-800",
    },
    {
      id: "foco-seguranca",
      name: "Foco em Segurança",
      category: "Prioridades",
      color: "bg-orange-100 text-orange-800",
    },
    {
      id: "sustentabilidade",
      name: "Sustentabilidade",
      category: "Prioridades",
      color: "bg-green-100 text-green-800",
    },
  ];

  const tags = availableTags.length > 0 ? availableTags : defaultTags;

  const categories = [...new Set(tags.map((tag) => tag.category))];

  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTagClick = (tag) => {
    const isSelected = selectedTags.some(
      (selectedTag) => selectedTag.id === tag.id
    );

    if (isSelected) {
      const newTags = selectedTags.filter(
        (selectedTag) => selectedTag.id !== tag.id
      );
      onTagsChange && onTagsChange(newTags);
    } else {
      const newTags = [...selectedTags, tag];
      onTagsChange && onTagsChange(newTags);
    }
  };

  const removeTag = (tagToRemove) => {
    const newTags = selectedTags.filter((tag) => tag.id !== tagToRemove.id);
    onTagsChange && onTagsChange(newTags);
  };

  return (
    <div className="space-y-6">
      {/* Selected Tags */}
      {selectedTags.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Tags Selecionadas
          </h3>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <span
                key={tag.id}
                className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${tag.color} border`}
              >
                <span>{tag.name}</span>
                <button
                  onClick={() => removeTag(tag)}
                  className="hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Search */}
      <div>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Available Tags by Category */}
      <div className="space-y-6">
        {categories.map((category) => {
          const categoryTags = filteredTags.filter(
            (tag) => tag.category === category
          );

          if (categoryTags.length === 0) return null;

          return (
            <div key={category}>
              <h4 className="text-md font-medium text-gray-700 mb-3 flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {categoryTags.map((tag) => {
                  const isSelected = selectedTags.some(
                    (selectedTag) => selectedTag.id === tag.id
                  );

                  return (
                    <button
                      key={tag.id}
                      onClick={() => handleTagClick(tag)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                        isSelected
                          ? `${tag.color} border-2 border-current scale-105`
                          : `${tag.color} border border-transparent hover:border-current hover:scale-105`
                      }`}
                    >
                      {tag.name}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tag Count Info */}
      <div className="text-sm text-gray-500 text-center pt-4 border-t border-gray-200">
        {selectedTags.length} de {tags.length} tags selecionadas
      </div>
    </div>
  );
};

export default TagSystem;
