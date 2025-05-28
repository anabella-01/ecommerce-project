import { IProduct } from "../interfaces/IProduct";
import { useEffect, useState } from "react";
import {IUseFetchParams} from "../interfaces/IUseFetchParams"



export const useFetchProducts = ({category,limit}:IUseFetchParams) => {

    const [products, setProduct] = useState<IProduct[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    let baseUrl = `${import.meta.env.VITE_API_URL}/products`;

    if(category){
        baseUrl +=`/category/${category}`
    }

    if(limit){
        baseUrl += `?limit=${limit}`
    }

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(baseUrl);
                if (!response.ok) {
                    throw new Error(`Http error! Status: ${response.status}`);
                }

                const data = await response.json();
                setProduct(data);
                console.log(data);

            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }

        }
        fetchData();

    }, [category, limit]); // Si cambian, tiene que volver a hacer la petición

    return { products, error, loading }

}