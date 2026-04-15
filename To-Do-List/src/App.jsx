import { useState,useEffect } from 'react'
import { Header }  from "../src/componentes/Header"
import { Lista }  from "../src/componentes/Lista"




function App() {
  const[nome,setNome]= useState("");
  const[lista,setLista]= useState([]);
  function add(){
    const novaTask = {
      id: Date.now(),
      nome: nome,
    }
    setLista([...lista,novaTask])

  }

  function remover(id){
    const novaLista = lista.filter((ele)=> id !== ele.id);

    setLista(novaLista)
  }

  return (
    <div className='bg-amber-950 flex flex-col items-center gap-4 w-screen h-screen'>
      <h1>To-Do-List</h1>
      <Header
        add={add}
        setNome={setNome}
      />
      <Lista 
      tarefas={lista}
      remover={remover}    
      />
   
 
    </div>
  )
}

export default App
