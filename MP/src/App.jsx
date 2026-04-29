import { useState, useEffect } from "react"
import { Header } from "./componentes/Header"
import { Filtro } from "./componentes/Filtro"
import { Cidades } from "./Cidades"
import { Lista } from "./componentes/Lista"

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

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <Header />

      <Filtro
        busca={busca}
        setBusca={setBusca}
        ordem={ordem}
        setOrdem={setOrdem}
        mostrarFavoritos={mostrarFavoritos}
        setMostrarFavoritos={setMostrarFavoritos}
      />

      <div className="p-4 text-black">

        {/* 📱 MOBILE */}
        <div className="block lg:hidden">
          <Lista
            cidades={cidadesFiltradas}
            toggleFavorito={toggleFavorito}
            colunas={1}
          />
        </div>

        {/* 💻 DESKTOP */}
        <div className="hidden lg:block">
          <Lista
            cidades={cidadesFiltradas}
            toggleFavorito={toggleFavorito}
            colunas={2}
          />
        </div>

      </div>
    </div>
  )
}

export default App