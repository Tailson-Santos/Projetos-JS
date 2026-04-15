export function Lista({tarefas,remover}){
    return (
        <ul className='bg-white/30 backdrop-blur w-1/2'>
            {tarefas.map((ele)=>(
                <li className=' flex justify-between bg-blue-500 m-2 p-1 text-lg ' key={ele.id}>{ele.nome}
                <div className="flex gap-1">
                    <button onClick={()=> remover(ele.id)} className="bg-red-500 p-1">X</button>
                    <button className="bg-green-500 p-1">V</button>
                </div>
                </li>
            ))}
        </ul>
    )
}