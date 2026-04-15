import { useState,useEffect } from 'react'
import { Header }  from "../src/componentes/Header"
import { Lista }  from "../src/componentes/Lista"




function App() {
  const[nome,setNome]= useState("");
  const[lista,setLista]= useState([]);
  function add(){
    if (!nome.trim()) return
    const novaTask = {
      id: Date.now(),
      nome: nome,
      done: false,
    }
    


    setLista([...lista,novaTask])
    setNome("")

  }

  function remover(id){
    const novaLista = lista.filter((ele)=> id !== ele.id);

    setLista(novaLista)
  }
  function done(id){
    const novaLista = lista.map((ele)=>{
      if(ele.id === id){
        return {
          ...ele,
          done: !ele.done
        }
      }
      return ele
    })
    setLista(novaLista)
  }

  return (
    <div className='bg-amber-950 flex flex-col items-center gap-4 w-full min-h-screen'>
      <h1 className='text-7xl text-amber-50'>To-Do-List</h1>
      <Header
        value={nome}
        nome={nome}
        add={add}
        setNome={setNome}
      />
      <hr />
      <Lista 
      tarefas={lista}
      remover={remover}
      done={done}
          
      />
   
 
    </div>
  )
}

export default App
