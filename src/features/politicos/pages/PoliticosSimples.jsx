const PoliticosSimples = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Políticos</h1>
      <p className="text-gray-600">Lista de políticos carregando...</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Deodoro da Fonseca</h3>
          <p className="text-sm text-gray-500">1º Presidente da República</p>
          <p className="text-xs text-gray-400 mt-2">1889-1891</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Floriano Peixoto</h3>
          <p className="text-sm text-gray-500">2º Presidente da República</p>
          <p className="text-xs text-gray-400 mt-2">1891-1894</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Getúlio Vargas</h3>
          <p className="text-sm text-gray-500">Presidente</p>
          <p className="text-xs text-gray-400 mt-2">1930-1945, 1951-1954</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Juscelino Kubitschek</h3>
          <p className="text-sm text-gray-500">20º Presidente da República</p>
          <p className="text-xs text-gray-400 mt-2">1956-1961</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Luiz Inácio Lula da Silva</h3>
          <p className="text-sm text-gray-500">33º e 39º Presidente</p>
          <p className="text-xs text-gray-400 mt-2">2003-2011, 2023-</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Jair Bolsonaro</h3>
          <p className="text-sm text-gray-500">36º Presidente da República</p>
          <p className="text-xs text-gray-400 mt-2">2019-2022</p>
        </div>
      </div>
    </div>
  );
};

export default PoliticosSimples;
