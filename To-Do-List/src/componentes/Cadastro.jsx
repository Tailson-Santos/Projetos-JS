import {Input} from "../componentes/Input"
import {Button} from "../componentes/Button"


export function Cadastro({setNome,value}){
    return(
        <form className="flex flex-col bg-cyan-800" action="">
            <label htmlFor="value">Nome:</label>
            <Input
                id="nome"
                value={value}
                onChange={(e) => setNome(e.target.value)}
            />
           <Button onClick={enviar} children={"Cadastrar"}/>
        </form>
    );
}