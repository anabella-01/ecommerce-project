import { useParams } from "react-router";
import useProductDetail from "../features/productDetail/hook/useProductDetail";
import ProductDetailView from "../features/productDetail/components/ProductDetailView";

const ProductDetail = () => {

    const { id } = useParams();
    const { product, loading } = useProductDetail(id);

    if (loading) return <p>Loading....</p>
    if (!product) return <p> Product don't found</p>

    return  <ProductDetailView /> ;
        
}

export default ProductDetail;