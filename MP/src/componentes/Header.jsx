import logo from "../assets/logo.png";
export function Header(){
    return(
        <header className="flex justify-center">
            <div>
            <img src={logo} alt="Logo da empresa" className="w-[25%] mx-auto p-2"/>
                <span className="bg-amber-300">Lista de cidades atendidas</span>
            </div>      
        </header>
    );
}