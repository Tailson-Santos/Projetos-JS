import { useState } from 'react'
import { Cadastro } from "./componentes/Cadastro"



function App() {
  const[nome,setNome] = useState("");
  return (
    <div className="flex w-screen h-screen">

            <div className="w-1/4 bg-amber-100">
                <Cadastro 
                setNome={setNome}
                value={nome}
                />
            </div>

            <div className="flex-1/2 bg-blue-700">
               
            </div>
            
        </div>
  )
}

export default App
