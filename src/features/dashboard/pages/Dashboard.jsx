import TinderPoliticosSimples from "../../tinder/components/TinderPoliticosSimples";
import {
  ChartBarIcon,
  UserGroupIcon,
  EyeIcon,
  HeartIcon,
  TrophyIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

const Dashboard = () => {
  const stats = [
    {
      name: "Políticos Avaliados",
      value: "12",
      icon: UserGroupIcon,
      change: "+3",
      changeType: "increase",
    },
    {
      name: "Matches Realizados",
      value: "8",
      icon: HeartIcon,
      change: "+2",
      changeType: "increase",
    },
    {
      name: "Eleições Acompanhadas",
      value: "4",
      icon: ChartBarIcon,
      change: "+1",
      changeType: "increase",
    },
    {
      name: "Denúncias Feitas",
      value: "2",
      icon: EyeIcon,
      change: "0",
      changeType: "neutral",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "match",
      message: "Você deu match com Maria Silva (PSDB)",
      time: "2 horas atrás",
      icon: HeartIcon,
      color: "text-pink-600",
    },
    {
      id: 2,
      type: "election",
      message: "Nova eleição adicionada: Prefeito de São Paulo 2024",
      time: "5 horas atrás",
      icon: ChartBarIcon,
      color: "text-blue-600",
    },
    {
      id: 3,
      type: "achievement",
      message: "Conquista desbloqueada: Eleitor Ativo",
      time: "1 dia atrás",
      icon: TrophyIcon,
      color: "text-yellow-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Bem-vindo ao seu painel de controle eleitoral
        </p>
      </div>

      {/* Layout Responsivo */}
      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6">
        {/* Coluna Principal - Stats e Atividades */}
        <div className="2xl:col-span-2 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.name}
                  className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Icon className="h-6 w-6 lg:h-8 lg:w-8 text-gray-400" />
                    </div>
                    <div className="text-right">
                      <p className="text-xl lg:text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-xs lg:text-sm text-gray-500">
                        {stat.name}
                      </p>
                    </div>
                  </div>
                  {stat.change !== "0" && (
                    <div className="mt-2">
                      <span
                        className={`text-xs lg:text-sm font-medium ${
                          stat.changeType === "increase"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {stat.change} esta semana
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Atividade Recente */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Atividade Recente
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-4"
                    >
                      <div className={`flex-shrink-0 ${activity.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                          {activity.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Próximas Eleições */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Próximas Eleições
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-blue-900">
                      Eleições Municipais 2024
                    </h4>
                    <p className="text-sm text-blue-700">São Paulo - SP</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-blue-900">
                      6 de outubro
                    </p>
                    <p className="text-xs text-blue-600">Em 45 dias</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Eleições Estaduais 2026
                    </h4>
                    <p className="text-sm text-gray-700">São Paulo - SP</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">2026</p>
                    <p className="text-xs text-gray-600">Em 2 anos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Lateral - Tinder de Políticos */}
        <div className="2xl:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
            <div className="flex items-center space-x-2 mb-4 lg:mb-6">
              <FireIcon className="h-5 w-5 lg:h-6 lg:w-6 text-orange-500" />
              <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                Descubra Políticos
              </h3>
            </div>
            <div className="hidden 2xl:block">
              <TinderPoliticosSimples />
            </div>
            <div className="2xl:hidden text-center py-8">
              <FireIcon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">
                Descubra Políticos
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Encontre candidatos que compartilham suas ideias
              </p>
              <button
                onClick={() => (window.location.href = "/sistema/tinder")}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Começar a explorar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
