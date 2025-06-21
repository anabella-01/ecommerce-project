import ProductCard from "../ProductCard";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import {IProductListSection} from "../../types/IProductListSection"

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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 px-2 lg:gap-5 lg:gap-y-5">

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