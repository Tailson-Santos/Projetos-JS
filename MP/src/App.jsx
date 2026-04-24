import { useState } from 'react'
import {Header} from "./componentes/Header"
import {Filtro} from "./componentes/Filtro"
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet"></link>


function App() {
const [cidade,setCidade] = useState("");

  return (
    <div className='flex flex-col min-w-screen min-h-screen bg-[var(--color-background)]'>
      <Header/>
      <Filtro/>
      
    </div>
  )
}

export default App
