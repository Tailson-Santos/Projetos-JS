
export function Lista({ cidades = [], toggleFavorito }) {

    if (!cidades.length) {
      return <p>Nenhuma cidade encontrada</p>
    }
  
    const metade = Math.floor(cidades.length / 2) + 1
    const primeira = cidades.slice(0, metade)
    const segunda = cidades.slice(metade)
  
    function Coluna({ lista }) {
      return (
        <div>
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-200 p-2 font-bold sticky top-0 z-10">
            <span>Cidade</span>
            <span className="text-center">Dias</span>
            <span className="text-right">Fav</span>
          </div>
  
          {/* Itens */}
          {lista.map((cidade) => (
            <div
              key={cidade.id}
              className="grid grid-cols-3 p-2 border-b bg-white hover:bg-gray-100 font-light"
            >
              <span className="font-bold">{cidade.nome}</span>
              <span className="text-center">{cidade.dias}</span>
  
              <span
                onClick={() => toggleFavorito(cidade.id)}
                className={`text-right material-symbols-outlined cursor-pointer ${
                  cidade.favorito ? "text-yellow-400" : "text-gray-400"
                }`}
              >
                star
              </span>
            </div>
          ))}
        </div>
      )
    }
  
    return (
      <>
        {/* 📱 MOBILE → lista única */}
        <div className="block lg:hidden">
          <Coluna lista={cidades} />
        </div>
  
        {/* 💻 DESKTOP → duas colunas */}
        <div className="hidden lg:grid grid-cols-2 gap-4">
          <Coluna lista={primeira} />
          <Coluna lista={segunda} />
        </div>
      </>
    )
  }