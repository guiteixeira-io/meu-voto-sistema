import { useState } from "react";
import {
  MapPin,
  Camera,
  Upload,
  Send,
  AlertTriangle,
  Construction,
  Lightbulb,
  Trash2,
  Car,
  Droplets,
  TreePine,
  Building,
  Filter,
  Search,
} from "lucide-react";

const Fiscalizacao = () => {
  const [activeTab, setActiveTab] = useState("reportar");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    photos: [],
  });

  const categories = [
    {
      id: "infraestrutura",
      name: "Infraestrutura",
      icon: Construction,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      id: "iluminacao",
      name: "Iluminação",
      icon: Lightbulb,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      id: "limpeza",
      name: "Limpeza",
      icon: Trash2,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: "transito",
      name: "Trânsito",
      icon: Car,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: "saneamento",
      name: "Saneamento",
      icon: Droplets,
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
    },
    {
      id: "meio-ambiente",
      name: "Meio Ambiente",
      icon: TreePine,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      id: "equipamentos",
      name: "Equipamentos Públicos",
      icon: Building,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      id: "seguranca",
      name: "Segurança",
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const recentReports = [
    {
      id: 1,
      title: "Buraco na Rua das Flores",
      category: "infraestrutura",
      location: "Rua das Flores, 123 - Centro",
      status: "em-andamento",
      date: "2024-09-15",
      votes: 24,
      comments: 8,
    },
    {
      id: 2,
      title: "Lixo acumulado na praça",
      category: "limpeza",
      location: "Praça Central - Centro",
      status: "resolvido",
      date: "2024-09-14",
      votes: 18,
      comments: 5,
    },
    {
      id: 3,
      title: "Semáforo quebrado",
      category: "transito",
      location: "Av. Principal x Rua B",
      status: "reportado",
      date: "2024-09-13",
      votes: 31,
      comments: 12,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reportando problema:", formData);
    // Aqui seria enviado para a API
    alert("Problema reportado com sucesso!");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "resolvido":
        return "bg-green-100 text-green-800";
      case "em-andamento":
        return "bg-yellow-100 text-yellow-800";
      case "reportado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "resolvido":
        return "Resolvido";
      case "em-andamento":
        return "Em Andamento";
      case "reportado":
        return "Reportado";
      default:
        return "Desconhecido";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Modo Fiscalização
          </h1>
          <p className="text-xl text-gray-600">
            Reporte problemas da sua comunidade e acompanhe as soluções em tempo
            real
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg mb-8 w-fit">
          <button
            onClick={() => setActiveTab("reportar")}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === "reportar"
                ? "bg-white text-primary-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Reportar Problema
          </button>
          <button
            onClick={() => setActiveTab("acompanhar")}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === "acompanhar"
                ? "bg-white text-primary-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Acompanhar Reports
          </button>
        </div>

        {/* Reportar Problema Tab */}
        {activeTab === "reportar" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulário */}
            <div className="card">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Reportar Novo Problema
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Título do Problema
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Ex: Buraco na rua principal"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categoria
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(category.id);
                            setFormData((prev) => ({
                              ...prev,
                              category: category.id,
                            }));
                          }}
                          className={`p-3 rounded-lg border-2 transition-colors flex items-center space-x-2 ${
                            selectedCategory === category.id
                              ? "border-primary-500 bg-primary-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div
                            className={`${category.bgColor} ${category.color} p-1 rounded`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-medium">
                            {category.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição Detalhada
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Descreva o problema com detalhes..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Localização
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Endereço ou referência"
                      required
                    />
                    <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fotos (opcional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <Camera className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-sm text-gray-600 mb-2">
                      Adicione fotos para ilustrar o problema
                    </p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      id="photos"
                    />
                    <label
                      htmlFor="photos"
                      className="btn-secondary inline-flex items-center space-x-2 cursor-pointer"
                    >
                      <Upload className="h-4 w-4" />
                      <span>Escolher Fotos</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Relato</span>
                </button>
              </form>
            </div>

            {/* Info/Estatísticas */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Como Funciona
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-100 text-primary-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Reporte o Problema
                      </h4>
                      <p className="text-sm text-gray-600">
                        Descreva o problema com fotos e localização
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-100 text-primary-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Atribuição Automática
                      </h4>
                      <p className="text-sm text-gray-600">
                        Sistema identifica o responsável pela área
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-100 text-primary-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Acompanhamento
                      </h4>
                      <p className="text-sm text-gray-600">
                        Receba atualizações sobre o progresso
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Estatísticas da Comunidade
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">
                      247
                    </div>
                    <div className="text-sm text-gray-600">
                      Problemas Reportados
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-600">
                      189
                    </div>
                    <div className="text-sm text-gray-600">
                      Problemas Resolvidos
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">58</div>
                    <div className="text-sm text-gray-600">Em Andamento</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">76%</div>
                    <div className="text-sm text-gray-600">
                      Taxa de Resolução
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Acompanhar Reports Tab */}
        {activeTab === "acompanhar" && (
          <div>
            {/* Filtros */}
            <div className="card mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Buscar reports..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <button className="btn-secondary flex items-center space-x-2">
                    <Filter className="h-4 w-4" />
                    <span>Filtros</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Lista de Reports */}
            <div className="space-y-4">
              {recentReports.map((report) => {
                const category = categories.find(
                  (cat) => cat.id === report.category
                );
                const Icon = category?.icon || AlertTriangle;

                return (
                  <div
                    key={report.id}
                    className="card hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div
                          className={`${category?.bgColor} ${category?.color} p-3 rounded-lg`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {report.title}
                          </h3>
                          <p className="text-gray-600 mb-2 flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {report.location}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{report.date}</span>
                            <span>{report.votes} apoios</span>
                            <span>{report.comments} comentários</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            report.status
                          )}`}
                        >
                          {getStatusLabel(report.status)}
                        </span>
                        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                          Ver Detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fiscalizacao;
