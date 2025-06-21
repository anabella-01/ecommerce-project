import AddToCartSection from "../AddToCartSection";
import ProductImageGallery from "../ProductImageGallery";
import ProductInfo from "../ProductInfo";
import ProductOptions from "../ProductOptions";
import { useParams } from "react-router";
import useProductDetail from "../../hook/useProductDetail"


const ProductDetailView = () => {

    const { id } = useParams();

    const { product, loading, error } = useProductDetail(id);


    return (
        <section className="px-4 py-6 max-w-7xl mx-auto">
            
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

                <div className="w-full py-3">
                {product && <ProductImageGallery product={product} />}
                </div>

                <div className="w-full lg:w-1/1 flex flex-col gap-4">
                    {loading && <span>Loading product..</span>}
                    {error && <span>{error}</span>}
                    {product && <ProductInfo product={product} discountPercentage={30} />}
                    <ProductOptions />
                    <AddToCartSection />
                </div>

            </div>

        </section>
    )
}

export default ProductDetailView;