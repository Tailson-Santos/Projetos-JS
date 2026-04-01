export function Button({children,onClick}){
    return(
        <button
        onClick={(onClick)}
        className="p-1 bg-blue-400"
        
        >   
            {children}
        </button>
    );
}