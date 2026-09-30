import { Link, useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-hot-toast";
import type { ProductProps } from "../home";
import { api } from "../../services/api";
import { CartContext } from "../../contexts/cartContext";

export function Details() {
    const { id } = useParams();
    const { addItemCart } = useContext(CartContext);
    const [product, setProduct] = useState<ProductProps | null>(null);

    useEffect( () => {
        async function getProduct(){
            if(!id) return;
            const response = await api.get(`/products/${id}`)
            setProduct(response.data);
        }

        getProduct();
    }, [id]) 

    if(!product) return <div className="w-full max-w-7xl px-4 mx-auto">Carregando...</div>

    return (
        <div className="w-full max-w-7xl px-4 mx-auto">
            <Link to="/" className="text-sm text-sky-600">
                Voltar aos produtos
            </Link>
            <main className="grid gap-6 md:grid-cols-2 mt-6">
                <img src={product?.cover} alt={product?.title} className="w-full rounded max-h-96 object-contain"/>

                <div>
                    <h1 className="text-2xl font-bold">{product?.title}</h1>
                    <p className="text-zinc-700 mt-3">{product?.description}</p>

                    <strong className="block mt-4 text-xl text-zinc-800">
                        {product?.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </strong>

                    <button onClick={ () => {
                        toast.success("Produto adicionado no carrinho!", {
                            style:{
                                borderRadius: 10,
                                backgroundColor: "#121212",
                                color: "#FFF"
                            }
                        })
                        addItemCart(product);
                    }}
                    className="mt-4 bg-zinc-900 text-white px-4 py-2 rounded cursor-pointer">
                        Adicionar ao Carrinho
                    </button>
                </div>
            </main>
        </div>
    )
}