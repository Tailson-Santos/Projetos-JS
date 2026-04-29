export function Filtro({
  busca,
  setBusca,
  ordem,
  setOrdem,
  mostrarFavoritos,
  setMostrarFavoritos
}) {
  return (
    <div className="p-4 flex flex-wrap gap-2">

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
        className="border p-2 rounded"
      >
        <option value="az">A → Z</option>
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
  )
}