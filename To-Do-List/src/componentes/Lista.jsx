export function Lista({tarefas,done,remover}){
    return (
        <ul className='bg-white/30 backdrop-blur w-1/2'>
            {tarefas.map((ele)=>(
                <li
                className={`flex justify-between m-2 p-1 text-lg ${
                  ele.done ? "bg-green-200" : "bg-blue-500"
                }`}
                key={ele.id}
              >
                <span className="text-2xl">{ele.nome}</span>
                <div className="flex gap-1">
                    <button onClick={()=> remover(ele.id)} className="bg-red-500 hover:cursor-pointer hover:bg-red-400 transition p-1">X</button>
                    <button  onClick={()=> done(ele.id)} className="bg-green-500 hover:cursor-pointer hover:bg-green-400 transition p-1">V</button>
                </div>
                </li>
            ))}
        </ul>
    )
}