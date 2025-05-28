import ProductCard from "../ProductCard";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import {IProductListSection} from "../../interfaces/IProductListSection"

const ProductListSection = ({title,category,limit}:IProductListSection) => {

const {products,error,loading} = useFetchProducts({category, limit})

if(loading){
    return <span>Loading products...</span>
}else if(error){
   return  <span>{error}</span>
}

    return (
        <section className=" max-w-7xl mx-auto py-8 ">
            <h2 className="font-primary text-3xl text-center mb-10">{title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 m-2">

                {
                    products.map((product) => {
                        return (
                            <ProductCard 
                               key={product.id} {...product}
                            />
                        )
                    })
                }
            </div>

        </section>


    )
}

export default ProductListSection   