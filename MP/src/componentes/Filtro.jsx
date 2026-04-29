export function Filtro(){
    return(
        <div className="flex flex-col gap-3">
           <div>
           <label htmlFor="">Filtro: </label>
           <input type="text" placeholder="Digite a cidade" className="bg-[var(--color-gray)] p-1 w-1/2 items-center justify-center "/>
           </div>
           
            
       
                <span className="bg-amber-300 w-full text-left p-1 font-bold">
            Lista de cidades atendidas
                 </span>
            
        </div>
    );
}