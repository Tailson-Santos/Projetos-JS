export function Header({add,setNome,nome}){
    return (
        <header>
          
            <input  value={nome} placeholder="Digite Algo..." className="bg-amber-50 p-2  rounded-l-sm" onChange={(e)=>setNome(e.target.value)} type="text"/>
            <button className="bg-cyan-700 rounded-r-sm p-2 hover:bg-cyan-600 transition hover:text-white hover:cursor-pointer" onClick={add}>+</button>
        </header>
        
    )
}