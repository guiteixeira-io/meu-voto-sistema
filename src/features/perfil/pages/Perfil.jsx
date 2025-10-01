// Página Perfil: Conteúdo principal controlado pelo menu lateral do sistema
import { useAuth } from "../../auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Perfil = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("meus-dados");

  // Escuta mudanças vindas do menu lateral
  useEffect(() => {
    const handleSectionChange = (event) => {
      setActiveSection(event.detail);
    };

    // Carrega seção salva no localStorage
    const storedSection = localStorage.getItem("perfilActiveSection");
    if (storedSection) {
      setActiveSection(storedSection);
    }

    window.addEventListener("perfilSectionChange", handleSectionChange);

    return () => {
      window.removeEventListener("perfilSectionChange", handleSectionChange);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "meus-dados":
        return (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-gray-900">Meus Dados</h2>
              <p className="text-gray-600 mt-2">
                Dados básicos de cadastro. Fundamentalmente, saber para quais
                cargos e em qual localidade você vota.
              </p>
            </div>

            <form className="space-y-6">
              {/* Nome Completo */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Para personalização da experiência.
                </p>
              </div>

              {/* E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Para login e comunicações essenciais.
                </p>
              </div>

              {/* Senha */}
              <div>
                <label
                  htmlFor="senha"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Criar Senha *
                </label>
                <input
                  type="password"
                  id="senha"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="••••••••"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Requisitos mínimos de segurança.
                </p>
              </div>

              {/* Estado e Cidade */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="estado"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Estado (UF) *
                  </label>
                  <select
                    id="estado"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Selecione seu estado</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="PR">Paraná</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="BA">Bahia</option>
                    <option value="GO">Goiás</option>
                    <option value="PE">Pernambuco</option>
                    <option value="CE">Ceará</option>
                    {/* Adicionar outros estados conforme necessário */}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">
                    Filtra os políticos a nível estadual e federal.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="cidade"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Cidade *
                  </label>
                  <select
                    id="cidade"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Selecione sua cidade</option>
                    <option value="sao-paulo">São Paulo</option>
                    <option value="rio-de-janeiro">Rio de Janeiro</option>
                    <option value="belo-horizonte">Belo Horizonte</option>
                    <option value="porto-alegre">Porto Alegre</option>
                    <option value="curitiba">Curitiba</option>
                    <option value="florianopolis">Florianópolis</option>
                    <option value="salvador">Salvador</option>
                    <option value="goiania">Goiânia</option>
                    <option value="recife">Recife</option>
                    <option value="fortaleza">Fortaleza</option>
                    {/* Adicionar outras cidades conforme necessário */}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">
                    Filtra os políticos a nível municipal.
                  </p>
                </div>
              </div>

              {/* Botão Salvar */}
              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                >
                  Salvar Dados
                </button>
              </div>
            </form>
          </div>
        );
      case "meu-titulo":
        return (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-primary-800">
                Meu Título de Eleitor
              </h2>
              <p className="text-gray-600 mt-2">
                Informe os dados do seu título de eleitor para validação e
                localização eleitoral precisa.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <form className="space-y-6">
                {/* Número do Título */}
                <div>
                  <label
                    htmlFor="numero-titulo"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Número do Título de Eleitor *
                  </label>
                  <input
                    type="text"
                    id="numero-titulo"
                    maxLength="12"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="0000 0000 0000"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    12 dígitos do seu título de eleitor
                  </p>
                </div>

                {/* Zona e Seção */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="zona"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Zona Eleitoral *
                    </label>
                    <input
                      type="text"
                      id="zona"
                      maxLength="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="0001"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="secao"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Seção *
                    </label>
                    <input
                      type="text"
                      id="secao"
                      maxLength="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="0001"
                    />
                  </div>
                </div>

                {/* Data de Emissão */}
                <div>
                  <label
                    htmlFor="data-emissao"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Data de Emissão
                  </label>
                  <input
                    type="date"
                    id="data-emissao"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                {/* Situação do Título */}
                <div>
                  <label
                    htmlFor="situacao"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Situação do Título
                  </label>
                  <select
                    id="situacao"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Selecione a situação</option>
                    <option value="regular">Regular</option>
                    <option value="suspensao">Suspenso</option>
                    <option value="cancelado">Cancelado</option>
                    <option value="quitacao">Pendente de quitação</option>
                  </select>
                </div>

                {/* Município do Título */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="municipio-titulo"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Município do Título *
                    </label>
                    <input
                      type="text"
                      id="municipio-titulo"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="São Paulo"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="uf-titulo"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      UF *
                    </label>
                    <select
                      id="uf-titulo"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">UF</option>
                      <option value="SP">SP</option>
                      <option value="RJ">RJ</option>
                      <option value="MG">MG</option>
                      <option value="RS">RS</option>
                      <option value="PR">PR</option>
                      <option value="SC">SC</option>
                      <option value="BA">BA</option>
                      <option value="GO">GO</option>
                      <option value="PE">PE</option>
                      <option value="CE">CE</option>
                    </select>
                  </div>
                </div>

                {/* Local de Votação */}
                <div>
                  <label
                    htmlFor="local-votacao"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Local de Votação
                  </label>
                  <textarea
                    id="local-votacao"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Escola Estadual João Silva - Rua das Flores, 123 - Centro"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Nome da escola/local e endereço onde você vota
                  </p>
                </div>

                {/* Última Revisão */}
                <div>
                  <label
                    htmlFor="ultima-revisao"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Data da Última Revisão
                  </label>
                  <input
                    type="date"
                    id="ultima-revisao"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Última vez que você atualizou seus dados no cartório
                    eleitoral
                  </p>
                </div>

                <div className="flex justify-end pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                  >
                    Salvar Dados do Título
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      case "minhas-eleicoes":
        return (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-primary-800">
                Minhas Eleições
              </h2>
              <p className="text-gray-600 mt-2">
                Registre seus votos em todas as eleições desde que você começou
                a votar. Isso nos ajuda a entender seu histórico político.
              </p>
            </div>

            <div className="space-y-6">
              {/* Eleições Históricas */}
              {[
                {
                  ano: 2024,
                  tipo: "Municipal",
                  turno: "1º Turno",
                  data: "6 de outubro de 2024",
                  status: "realizada",
                },
                {
                  ano: 2022,
                  tipo: "Geral",
                  turno: "1º Turno",
                  data: "2 de outubro de 2022",
                  status: "realizada",
                },
                {
                  ano: 2022,
                  tipo: "Geral",
                  turno: "2º Turno",
                  data: "30 de outubro de 2022",
                  status: "realizada",
                },
                {
                  ano: 2020,
                  tipo: "Municipal",
                  turno: "1º Turno",
                  data: "15 de novembro de 2020",
                  status: "realizada",
                },
                {
                  ano: 2020,
                  tipo: "Municipal",
                  turno: "2º Turno",
                  data: "29 de novembro de 2020",
                  status: "realizada",
                },
                {
                  ano: 2018,
                  tipo: "Geral",
                  turno: "1º Turno",
                  data: "7 de outubro de 2018",
                  status: "realizada",
                },
                {
                  ano: 2018,
                  tipo: "Geral",
                  turno: "2º Turno",
                  data: "28 de outubro de 2018",
                  status: "realizada",
                },
                {
                  ano: 2016,
                  tipo: "Municipal",
                  turno: "1º Turno",
                  data: "2 de outubro de 2016",
                  status: "realizada",
                },
                {
                  ano: 2016,
                  tipo: "Municipal",
                  turno: "2º Turno",
                  data: "30 de outubro de 2016",
                  status: "realizada",
                },
                {
                  ano: 2014,
                  tipo: "Geral",
                  turno: "1º Turno",
                  data: "5 de outubro de 2014",
                  status: "realizada",
                },
                {
                  ano: 2014,
                  tipo: "Geral",
                  turno: "2º Turno",
                  data: "26 de outubro de 2014",
                  status: "realizada",
                },
              ].map((eleicao, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-primary-800">
                        Eleições {eleicao.tipo} {eleicao.ano} - {eleicao.turno}
                      </h3>
                      <p className="text-sm text-gray-500">{eleicao.data}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        {eleicao.status === "realizada"
                          ? "Realizada"
                          : "Futura"}
                      </span>
                    </div>
                  </div>

                  {eleicao.status === "realizada" && (
                    <div className="space-y-4">
                      {/* Cargos disponíveis baseados no tipo de eleição */}
                      {eleicao.tipo === "Geral"
                        ? [
                            "Presidente",
                            "Governador",
                            "Senador",
                            "Deputado Federal",
                            "Deputado Estadual",
                          ]
                        : ["Prefeito", "Vereador"].map((cargo) => (
                            <div
                              key={cargo}
                              className="border-l-4 border-primary-200 pl-4 py-2"
                            >
                              <h4 className="font-medium text-gray-900 mb-2">
                                {cargo}
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Candidato votado
                                  </label>
                                  <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                                    placeholder="Nome do candidato"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Número
                                  </label>
                                  <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                                    placeholder="Número"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Status do voto
                                  </label>
                                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm">
                                    <option value="">Selecionar</option>
                                    <option value="votou">
                                      Votei neste candidato
                                    </option>
                                    <option value="branco">
                                      Votei em branco
                                    </option>
                                    <option value="nulo">Votei nulo</option>
                                    <option value="nao-compareceu">
                                      Não compareci à votação
                                    </option>
                                    <option value="nao-lembro">
                                      Não me lembro
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                >
                  Salvar Histórico Eleitoral
                </button>
              </div>
            </div>
          </div>
        );
      case "conquistas":
        return (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-primary-800">
                Conquistas
              </h2>
              <p className="text-gray-600 mt-2">
                Acompanhe seu progresso e conquistas no Meu Voto. Complete
                desafios para desbloquear medalhas e badges exclusivos.
              </p>
            </div>

            {/* Estatísticas Gerais */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg border border-primary-100 p-6">
              <h3 className="text-lg font-semibold text-primary-800 mb-4">
                🏆 Resumo das Conquistas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">8</div>
                  <div className="text-sm text-gray-600">Conquistas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">42</div>
                  <div className="text-sm text-gray-600">Restantes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">320</div>
                  <div className="text-sm text-gray-600">XP Total</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">
                    Nível 3
                  </div>
                  <div className="text-sm text-gray-600">Cidadão Ativo</div>
                </div>
              </div>
            </div>

            {/* Conquistas por Categoria */}
            <div className="space-y-6">
              {/* Primeiros Passos */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  🚀 Primeiros Passos (4/10)
                  <div className="ml-auto bg-gray-200 rounded-full h-2 flex-1 ml-4 max-w-32">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-2xl mr-3">✅</div>
                    <div>
                      <div className="font-medium text-green-800">
                        Bem-vindo!
                      </div>
                      <div className="text-sm text-green-600">
                        Criou sua conta no Meu Voto
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-2xl mr-3">✅</div>
                    <div>
                      <div className="font-medium text-green-800">
                        Primeiro Login
                      </div>
                      <div className="text-sm text-green-600">
                        Fez seu primeiro acesso
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-2xl mr-3">✅</div>
                    <div>
                      <div className="font-medium text-green-800">
                        Perfil Básico
                      </div>
                      <div className="text-sm text-green-600">
                        Preencheu dados básicos
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-2xl mr-3">✅</div>
                    <div>
                      <div className="font-medium text-green-800">
                        Explorador
                      </div>
                      <div className="text-sm text-green-600">
                        Visitou 3 seções diferentes
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-60">
                    <div className="text-2xl mr-3">🔒</div>
                    <div>
                      <div className="font-medium text-gray-600">
                        Título Validado
                      </div>
                      <div className="text-sm text-gray-500">
                        Cadastre seu título de eleitor
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-60">
                    <div className="text-2xl mr-3">🔒</div>
                    <div>
                      <div className="font-medium text-gray-600">
                        Eleições Registradas
                      </div>
                      <div className="text-sm text-gray-500">
                        Registre 5 eleições passadas
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Participação Política */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  🗳️ Participação Política (2/10)
                  <div className="ml-auto bg-gray-200 rounded-full h-2 flex-1 ml-4 max-w-32">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-2xl mr-3">✅</div>
                    <div>
                      <div className="font-medium text-green-800">
                        Primeira Avaliação
                      </div>
                      <div className="text-sm text-green-600">
                        Avaliou um político
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-2xl mr-3">✅</div>
                    <div>
                      <div className="font-medium text-green-800">
                        Tinder Político
                      </div>
                      <div className="text-sm text-green-600">
                        Completou 10 avaliações no Tinder
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-60">
                    <div className="text-2xl mr-3">🔒</div>
                    <div>
                      <div className="font-medium text-gray-600">
                        Crítico Experiente
                      </div>
                      <div className="text-sm text-gray-500">
                        Avalie 50 políticos
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fiscalização */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  👁️ Fiscalização (1/10)
                  <div className="ml-auto bg-gray-200 rounded-full h-2 flex-1 ml-4 max-w-32">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-2xl mr-3">✅</div>
                    <div>
                      <div className="font-medium text-green-800">
                        Primeira Denúncia
                      </div>
                      <div className="text-sm text-green-600">
                        Fez sua primeira denúncia
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-60">
                    <div className="text-2xl mr-3">🔒</div>
                    <div>
                      <div className="font-medium text-gray-600">Vigilante</div>
                      <div className="text-sm text-gray-500">
                        Faça 5 denúncias verificadas
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-60">
                    <div className="text-2xl mr-3">🔒</div>
                    <div>
                      <div className="font-medium text-gray-600">
                        Detetive Político
                      </div>
                      <div className="text-sm text-gray-500">
                        Encontre 20 irregularidades
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engajamento */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  📈 Engajamento (1/10)
                  <div className="ml-auto bg-gray-200 rounded-full h-2 flex-1 ml-4 max-w-32">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-2xl mr-3">✅</div>
                    <div>
                      <div className="font-medium text-green-800">
                        Usuário Ativo
                      </div>
                      <div className="text-sm text-green-600">
                        7 dias consecutivos de uso
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-60">
                    <div className="text-2xl mr-3">🔒</div>
                    <div>
                      <div className="font-medium text-gray-600">Veterano</div>
                      <div className="text-sm text-gray-500">
                        30 dias consecutivos
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-60">
                    <div className="text-2xl mr-3">🔒</div>
                    <div>
                      <div className="font-medium text-gray-600">
                        Influenciador
                      </div>
                      <div className="text-sm text-gray-500">
                        Convide 10 amigos
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conquistas Especiais */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  🌟 Conquistas Especiais (0/10)
                  <div className="ml-auto bg-gray-200 rounded-full h-2 flex-1 ml-4 max-w-32">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-60">
                    <div className="text-2xl mr-3">🔒</div>
                    <div>
                      <div className="font-medium text-gray-600">
                        Cidadão Exemplar
                      </div>
                      <div className="text-sm text-gray-500">
                        Complete todas as seções do perfil
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-60">
                    <div className="text-2xl mr-3">🔒</div>
                    <div>
                      <div className="font-medium text-gray-600">
                        Conhecedor Político
                      </div>
                      <div className="text-sm text-gray-500">
                        Avalie 500 políticos
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-60">
                    <div className="text-2xl mr-3">🔒</div>
                    <div>
                      <div className="font-medium text-gray-600">
                        Guardião da Democracia
                      </div>
                      <div className="text-sm text-gray-500">
                        Faça 100 denúncias verificadas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "denuncias":
        return (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-primary-800">
                Minhas Denúncias
              </h2>
              <p className="text-gray-600 mt-2">
                Acompanhe o histórico e status de todas as denúncias que você
                fez contra políticos e irregularidades.
              </p>
            </div>

            {/* Resumo das Denúncias */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-100 p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">
                📊 Resumo das Denúncias
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">12</div>
                  <div className="text-sm text-gray-600">Total</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">3</div>
                  <div className="text-sm text-gray-600">Em análise</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">7</div>
                  <div className="text-sm text-gray-600">Validadas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600">2</div>
                  <div className="text-sm text-gray-600">Rejeitadas</div>
                </div>
              </div>
            </div>

            {/* Filtros */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex flex-wrap gap-4">
                <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Todas as denúncias</option>
                  <option>Em análise</option>
                  <option>Validadas</option>
                  <option>Rejeitadas</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Todos os tipos</option>
                  <option>Corrupção</option>
                  <option>Abuso de poder</option>
                  <option>Irregularidade eleitoral</option>
                  <option>Má conduta</option>
                  <option>Outros</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Todas as datas</option>
                  <option>Última semana</option>
                  <option>Último mês</option>
                  <option>Últimos 3 meses</option>
                  <option>Último ano</option>
                </select>
              </div>
            </div>

            {/* Lista de Denúncias */}
            <div className="space-y-4">
              {/* Denúncia 1 - Validada */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Corrupção - Desvio de Verbas Públicas
                      </h4>
                      <p className="text-sm text-gray-600">
                        Contra: Dep. João Silva (PT-SP)
                      </p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Validada
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Denúncia sobre uso indevido de verbas destinadas à educação
                  para benefício pessoal, com evidências de transferências
                  bancárias suspeitas...
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Denunciado em: 15/11/2024</span>
                  <span>Protocolo: #2024110015</span>
                </div>
              </div>

              {/* Denúncia 2 - Em análise */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 font-bold">⏳</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Abuso de Poder - Uso de Cargo
                      </h4>
                      <p className="text-sm text-gray-600">
                        Contra: Prefeito Carlos Oliveira (PSDB-RJ)
                      </p>
                    </div>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    Em análise
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Uso do cargo público para beneficiar empresa da família em
                  licitações municipais, com indícios de direcionamento nos
                  editais...
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Denunciado em: 02/12/2024</span>
                  <span>Protocolo: #2024120002</span>
                </div>
              </div>

              {/* Denúncia 3 - Em análise */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 font-bold">⏳</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Irregularidade Eleitoral - Compra de Votos
                      </h4>
                      <p className="text-sm text-gray-600">
                        Contra: Vereador Ana Santos (MDB-MG)
                      </p>
                    </div>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    Em análise
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Distribuição de cestas básicas em troca de votos durante
                  período eleitoral, com testemunhas e registros fotográficos...
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Denunciado em: 28/11/2024</span>
                  <span>Protocolo: #2024112801</span>
                </div>
              </div>

              {/* Denúncia 4 - Validada */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Má Conduta - Agressão Verbal
                      </h4>
                      <p className="text-sm text-gray-600">
                        Contra: Sen. Pedro Costa (PP-BA)
                      </p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Validada
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Agressão verbal contra jornalista durante entrevista ao vivo,
                  com vídeo comprobatório e repercussão na mídia...
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Denunciado em: 10/11/2024</span>
                  <span>Protocolo: #2024111001</span>
                </div>
              </div>

              {/* Denúncia 5 - Rejeitada */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow opacity-75">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-bold">✗</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Corrupção - Nepotismo
                      </h4>
                      <p className="text-sm text-gray-600">
                        Contra: Gov. Maria Lima (PSB-SP)
                      </p>
                    </div>
                  </div>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                    Rejeitada
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Alegação de nepotismo na contratação de familiares. Rejeitada
                  por falta de evidências concretas e comprovação de que as
                  contratações seguiram critérios técnicos...
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Denunciado em: 05/11/2024</span>
                  <span>Protocolo: #2024110005</span>
                </div>
              </div>
            </div>

            {/* Paginação */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                Anterior
              </button>
              <span className="text-sm text-gray-600">Página 1 de 3</span>
              <button className="px-4 py-2 text-sm text-primary-600 bg-primary-100 rounded-md hover:bg-primary-200 transition-colors">
                Próxima
              </button>
            </div>

            {/* Botão Nova Denúncia */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Fazer Nova Denúncia
              </h3>
              <p className="text-gray-600 mb-4">
                Encontrou alguma irregularidade? Denuncie e contribua para uma
                política mais transparente.
              </p>
              <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors">
                📢 Nova Denúncia
              </button>
            </div>
          </div>
        );
      case "realidade-interesses":
        return (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Realidade e Interesses
              </h2>
              <p className="text-gray-600 mt-2">
                Agora, queremos entender sua realidade. Suas respostas aqui nos
                permitirão conectar você diretamente aos políticos cujas ações e
                votos impactam seu dia a dia. Seja o mais preciso possível para
                um match de alta qualidade.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-8">
              {/* Eixo: Renda e Trabalho */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Eixo: Renda e Trabalho
                </h3>

                {/* Faixa de renda */}
                <div className="mb-6">
                  <label
                    htmlFor="renda"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Qual sua faixa de renda mensal individual?
                  </label>
                  <select
                    id="renda"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Selecione sua faixa de renda</option>
                    <option value="ate-1">Até 1 salário mínimo</option>
                    <option value="1-3">De 1 a 3 salários mínimos</option>
                    <option value="3-5">De 3 a 5 salários mínimos</option>
                    <option value="5-10">De 5 a 10 salários mínimos</option>
                    <option value="acima-10">
                      Acima de 10 salários mínimos
                    </option>
                  </select>
                </div>

                {/* Fonte de renda */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Qual sua principal fonte de renda?
                  </label>
                  <div className="space-y-3">
                    {[
                      { id: "clt", label: "CLT (Setor Privado)" },
                      { id: "publico", label: "Servidor(a) Público(a)" },
                      {
                        id: "autonomo",
                        label: "Autônomo(a) / MEI / Profissional Liberal",
                      },
                      { id: "empresario", label: "Empresário(a) (Empregador)" },
                      {
                        id: "aposentado",
                        label: "Aposentado(a) / Pensionista",
                      },
                      { id: "rural", label: "Trabalhador(a) Rural" },
                      { id: "sem-renda", label: "Não possuo renda atualmente" },
                    ].map((option) => (
                      <div key={option.id} className="flex items-center">
                        <input
                          type="radio"
                          id={option.id}
                          name="fonte-renda"
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                        />
                        <label
                          htmlFor={option.id}
                          className="ml-3 text-sm text-gray-700"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Eixo: Saúde */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Eixo: Saúde
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Como você acessa serviços de saúde?
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="sus-exclusivo"
                        name="saude"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label
                        htmlFor="sus-exclusivo"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Uso exclusivamente o SUS
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="plano-saude"
                        name="saude"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label
                        htmlFor="plano-saude"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Tenho plano de saúde particular/convênio
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="ambos-saude"
                        name="saude"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label
                        htmlFor="ambos-saude"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Utilizo ambos
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eixo: Educação */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Eixo: Educação
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Você ou seus filhos utilizam qual tipo de instituição de
                    ensino? (Marque todas que se aplicam)
                  </label>
                  <div className="space-y-3">
                    {[
                      {
                        id: "creche-publica",
                        label: "Filhos em creche/escola pública",
                      },
                      {
                        id: "escola-particular",
                        label: "Filhos em escola particular",
                      },
                      {
                        id: "universidade-publica",
                        label: "Sou estudante de universidade pública",
                      },
                      {
                        id: "universidade-fies",
                        label:
                          "Sou estudante de universidade particular (com FIES ou ProUni)",
                      },
                      {
                        id: "universidade-particular",
                        label:
                          "Sou estudante de universidade particular (sem bolsa/financiamento)",
                      },
                    ].map((option) => (
                      <div key={option.id} className="flex items-start">
                        <input
                          type="checkbox"
                          id={option.id}
                          className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor={option.id}
                          className="ml-3 text-sm text-gray-700"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Eixo: Moradia e Transporte */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Eixo: Moradia e Transporte
                </h3>

                {/* Transporte */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Qual seu principal meio de transporte diário?
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="transporte-publico"
                        name="transporte"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label
                        htmlFor="transporte-publico"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Transporte público (ônibus, metrô, trem)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="veiculo-particular"
                        name="transporte"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label
                        htmlFor="veiculo-particular"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Veículo particular (carro ou moto)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="aplicativo"
                        name="transporte"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label
                        htmlFor="aplicativo"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Transporte por aplicativo
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="bicicleta-pe"
                        name="transporte"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label
                        htmlFor="bicicleta-pe"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Bicicleta ou a pé
                      </label>
                    </div>
                  </div>
                </div>

                {/* Programas Sociais */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Você é beneficiário de algum programa social do governo?
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="programa-sim"
                        name="programa-social"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label
                        htmlFor="programa-sim"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Sim
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="programa-nao"
                        name="programa-social"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label
                        htmlFor="programa-nao"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Não
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="programa-ja-fui"
                        name="programa-social"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label
                        htmlFor="programa-ja-fui"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Já fui, mas não sou mais
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-6 border-t border-gray-200">
                <button
                  type="button"
                  className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                >
                  Salvar Informações
                </button>
              </div>
            </div>
          </div>
        );
      case "politico-ideal":
        return (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Político Ideal
              </h2>
              <p className="text-gray-600 mt-2">
                Marque as características que você considera mais importantes em
                um político, além das pautas que ele defende.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-8">
              {/* Experiência Política */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Experiência Política
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="experiente"
                      name="experiencia"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <label
                      htmlFor="experiente"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Prefiro políticos experientes, com vários mandatos.
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="renovacao"
                      name="experiencia"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <label
                      htmlFor="renovacao"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Prefiro novos nomes, que representem uma renovação.
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="indiferente-exp"
                      name="experiencia"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <label
                      htmlFor="indiferente-exp"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Indiferente.
                    </label>
                  </div>
                </div>
              </div>

              {/* Fidelidade Partidária */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Fidelidade Partidária
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="fidelidade-partido"
                      name="fidelidade"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <label
                      htmlFor="fidelidade-partido"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Considero importante que o político siga as orientações do
                      seu partido.
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="conviccoes-proprias"
                      name="fidelidade"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <label
                      htmlFor="conviccoes-proprias"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Prefiro que o político vote de acordo com as próprias
                      convicções, mesmo que contra o partido.
                    </label>
                  </div>
                </div>
              </div>

              {/* Transparência e Presença */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Transparência e Presença
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  (selecione todas que se aplicam)
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="frequencia-sessoes"
                      className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="frequencia-sessoes"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Alta frequência nas sessões legislativas.
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="transparencia-gastos"
                      className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="transparencia-gastos"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Transparência total com gastos de gabinete.
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="comunicacao-ativa"
                      className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="comunicacao-ativa"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Comunicação ativa com eleitores nas redes sociais.
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="sem-investigacoes"
                      className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="sem-investigacoes"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Não ter o nome envolvido em investigações.
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-6 border-t border-gray-200">
                <button
                  type="button"
                  className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                >
                  Salvar Preferências
                </button>
              </div>
            </div>
          </div>
        );
      case "bloqueados":
        return (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Critérios de Bloqueio
              </h2>
              <p className="text-gray-600 mt-2">
                Marque qualquer item que seja um fator eliminatório para você.
                Políticos com essas características não aparecerão como
                sugestão.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-red-400 mt-0.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="font-medium text-red-800">Deal-breakers</h3>
                  <p className="text-sm text-red-700 mt-1">
                    Esses são seus fatores eliminatórios. Seja criterioso na
                    seleção.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="condenados"
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="condenados"
                    className="ml-3 text-sm text-gray-700"
                  >
                    <span className="font-medium">
                      Políticos condenados pela justiça em segunda instância.
                    </span>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="corrupcao"
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="corrupcao"
                    className="ml-3 text-sm text-gray-700"
                  >
                    <span className="font-medium">
                      Envolvimento comprovado em escândalos de corrupção
                    </span>{" "}
                    (mesmo que sem condenação).
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="faltas"
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="faltas"
                    className="ml-3 text-sm text-gray-700"
                  >
                    <span className="font-medium">
                      Faltas excessivas e não justificadas nas votações.
                    </span>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="aumento-salario"
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="aumento-salario"
                    className="ml-3 text-sm text-gray-700"
                  >
                    <span className="font-medium">
                      Votou a favor de aumento do próprio salário
                    </span>{" "}
                    sem justificativa adequada.
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="contra-popular"
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="contra-popular"
                    className="ml-3 text-sm text-gray-700"
                  >
                    <span className="font-medium">
                      Votou contra leis de grande apelo popular
                    </span>{" "}
                    sem fundamentação técnica sólida.
                  </label>
                </div>
              </div>

              <div className="flex justify-end pt-6 mt-6 border-t border-gray-200">
                <button
                  type="button"
                  className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                >
                  Salvar Critérios
                </button>
              </div>
            </div>
          </div>
        );
      case "principios":
        return (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-gray-900">Princípios</h2>
              <p className="text-gray-600 mt-2">
                Tudo em política envolve escolhas. Ordene os princípios abaixo
                do mais importante (topo) para o menos importante (base) para
                você. Isso nos ajudará a entender sua visão de mundo.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-amber-400 mt-0.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="font-medium text-amber-800">Instrução</h3>
                  <p className="text-sm text-amber-700 mt-1">
                    Arraste e solte os itens para reorganizar por ordem de
                    prioridade. O mais importante deve ficar no topo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="space-y-3">
                {[
                  {
                    id: 1,
                    titulo: "Desenvolvimento Econômico",
                    descricao:
                      "Foco em crescimento, livre mercado, geração de emprego e redução de impostos.",
                  },
                  {
                    id: 2,
                    titulo: "Igualdade Social e Direitos Humanos",
                    descricao:
                      "Foco em políticas de inclusão, defesa de minorias e distribuição de renda.",
                  },
                  {
                    id: 3,
                    titulo: "Sustentabilidade e Meio Ambiente",
                    descricao:
                      "Foco na proteção ambiental, energias renováveis e combate às mudanças climáticas.",
                  },
                  {
                    id: 4,
                    titulo: "Segurança Pública",
                    descricao:
                      "Foco no combate à criminalidade, fortalecimento das polícias e endurecimento de leis.",
                  },
                  {
                    id: 5,
                    titulo: "Liberdades Individuais",
                    descricao:
                      "Foco na mínima intervenção do Estado na vida e nas escolhas do cidadão.",
                  },
                  {
                    id: 6,
                    titulo: "Transparência e Combate à Corrupção",
                    descricao:
                      "Foco na fiscalização do uso de dinheiro público e na integridade dos políticos.",
                  },
                ].map((principio, index) => (
                  <div
                    key={principio.id}
                    draggable
                    className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200 cursor-move hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="w-8 h-8 bg-blue-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {principio.titulo}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {principio.descricao}
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-3">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-6 mt-6 border-t border-gray-200">
                <button
                  type="button"
                  className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                >
                  Salvar Prioridades
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900">Perfil</h1>
        <p className="mt-2 text-gray-600">
          Selecione uma opção no menu lateral para gerenciar seu perfil
        </p>
      </div>

      {/* Conteúdo Principal baseado na seleção do menu lateral */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {renderContent()}
      </div>

      {/* Botão Sair */}
      <div className="flex justify-end">
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50 rounded-md transition-colors border border-red-200"
        >
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Sair da Conta
        </button>
      </div>
    </div>
  );
};

export default Perfil;
