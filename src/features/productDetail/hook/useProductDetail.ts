import { useEffect, useState } from "react"
import { IProduct } from "../../productList/types/IProduct"

 const useProductDetail = (id: string | undefined) => {

    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    
    useEffect(() => {

        if (!id) return;

        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await res.json();
                setProduct(data)
            } catch (err) {
                setError("No se pudo obtener el producto")
            } finally {
                setLoading(false)
            }
        }

        fetchProduct();

    }, [id]);

    return { product, loading, error }
};

export default useProductDetail