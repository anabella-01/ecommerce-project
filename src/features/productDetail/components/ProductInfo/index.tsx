import Rating from "../Rating";
import { ProductInfoProps } from "../../types/ProductInfoProps";
import PriceDisplay from "../PriceDisplay";


const ProductInfo = ({ product }: ProductInfoProps) => {

    const { title, description, rating } = product;




    return (

        <div className="w-full space-y-3 pt-3">
            <h1 className="font-primary font-bold text-[24px] leading-7 md:leading-10 lg:text-[40px]">{title}</h1>
            <Rating ratingValue={rating.rate} reviewCount={rating.count} />
            <PriceDisplay discountPercentage={5} price={100}></PriceDisplay>
            <p className="font-secondary font-medium text-sm lg:text-[16px] leading-5 opacity-60">{description}</p>
        </div>

    )
}

export default ProductInfo;