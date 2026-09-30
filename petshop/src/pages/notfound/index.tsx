import { Link } from "react-router";

export function NotFound() {
    return(
        <div className="w-full max-w-7xl px-4 mx-auto text-center mt-20"> 
            <h1 className="text-3-xl font-bold mb-4">Página não encontrada</h1>
            <p className="mb-6">Ops! A página que você está procurando não existe.</p>
            <Link to="/" className="bg-slate-600 p-2 px-4 text-white rounded">Voltar para a loja</Link>
        </div>
    )
}

export default NotFound;