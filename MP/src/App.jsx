import { useState, useEffect } from "react"
import { Header } from "./componentes/Header"
import { Filtro } from "./componentes/Filtro"
import { Cidades } from "./Cidades"

function App() {
  const [cidades, setCidades] = useState(Cidades)
  const [busca, setBusca] = useState("")
  const [ordem, setOrdem] = useState("az")
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false)

  // 💾 carregar do localStorage
  useEffect(() => {
    const dadosSalvos = localStorage.getItem("cidades")
  
    if (dadosSalvos) {
      setCidades(JSON.parse(dadosSalvos))
    } else {
      setCidades(Cidades)
    }
  }, [])

  // 💾 salvar no localStorage
  useEffect(() => {
    localStorage.setItem("cidades", JSON.stringify(cidades))
  }, [cidades])

  // ⭐ favoritar
  function toggleFavorito(id) {
    const novaLista = cidades.map((cidade) =>
      cidade.id === id
        ? { ...cidade, favorito: !cidade.favorito }
        : cidade
    )

    setCidades(novaLista)
  }

  // 🔍 filtro + ordenação
  const cidadesFiltradas = cidades
    .filter((cidade) => {
      const matchBusca = cidade.nome
        .toLowerCase()
        .includes(busca.toLowerCase())

      const matchFavorito = mostrarFavoritos
        ? cidade.favorito
        : true

      return matchBusca && matchFavorito
    })
    .sort((a, b) => {
      if (ordem === "az") return a.nome.localeCompare(b.nome)
      if (ordem === "za") return b.nome.localeCompare(a.nome)
      if (ordem === "dias-crescente") return a.dias - b.dias
      if (ordem === "dias-decrescente") return b.dias - a.dias
      return 0
    })

    const metade = Math.ceil(cidadesFiltradas.length / 2)

  const primeiraColuna = cidadesFiltradas.slice(0, metade)
  const segundaColuna = cidadesFiltradas.slice(metade)
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <Header />

      {/* 🔍 Filtros */}
      <div className="p-4 flex flex-wrap gap-2 ">

        <input
          type="text"
          placeholder="Buscar cidade..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="border p-2 rounded"
        />

        <select
          value={ordem}
          onChange={(e) => setOrdem(e.target.value)}
          className="border p-2 rounded "
        >
          <option value="az" >A → Z</option>
          <option value="za">Z → A</option>
          <option value="dias-crescente">Dias ↑</option>
          <option value="dias-decrescente">Dias ↓</option>
        </select>

        <button
          onClick={() => setMostrarFavoritos(!mostrarFavoritos)}
          className="border p-2 rounded"
        >
          {mostrarFavoritos ? "Todos" : "Só Favoritos"}
        </button>

      </div>

      <div className="p-4 text-black">

  {/* 📱 MOBILE (1 lista) */}
  <div className="block lg:hidden">

    {/* Header */}
    <div className="grid grid-cols-3 bg-gray-200 p-2 font-bold sticky top-0 z-10">
      <span>Cidade</span>
      <span className="text-center">Dias úteis</span>
      <span className="text-right">Fav</span>
    </div>

    {cidadesFiltradas.map((cidade) => (
      <div
        key={cidade.id}
        className="grid grid-cols-3 p-2 border-b bg-white hover:bg-gray-100"
      >
        <span>{cidade.nome}</span>
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

  {/* 💻 DESKTOP (2 colunas) */}
  <div className="hidden lg:grid grid-cols-2 gap-4">

    {/* COLUNA 1 */}
    <div>
      <div className="grid grid-cols-3 bg-gray-200 p-2 font-bold sticky top-0 z-10">
        <span>Cidade</span>
        <span className="text-center">Dias</span>
        <span className="text-right">Fav</span>
      </div>

      {primeiraColuna.map((cidade) => (
        <div key={cidade.id} className="grid grid-cols-3 p-2 border-b bg-white">
          <span>{cidade.nome}</span>
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

    {/* COLUNA 2 */}
    <div>
      <div className="grid grid-cols-3 bg-gray-200 p-2 font-bold sticky top-0 z-10">
        <span>Cidade</span>
        <span className="text-center">Dias</span>
        <span className="text-right">Fav</span>
      </div>

      {segundaColuna.map((cidade) => (
        <div key={cidade.id} className="grid grid-cols-3 p-2 border-b bg-white">
          <span>{cidade.nome}</span>
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

  </div>
</div>

    
      

      
    </div>
  )
}

export default App