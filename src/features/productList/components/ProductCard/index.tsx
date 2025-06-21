import { Link } from "react-router";
import { IProduct } from "../../types/IProduct";
import Rating from "../../../productDetail/components/Rating";
import PriceDisplay from "../../../productDetail/components/PriceDisplay";


const ProductCard = ({ id, image, title, rating }: IProduct) => {
    const { count, rate } = rating;

    return (

        <Link to={`/products/${id}`}>
            <div key={id}
                className=" flex flex-col justify-between
                     min-h-[420px] w-full mx-auto
                     bg-secondary shadow-2xs 
                     rounded-[20px] overflow-hidden 
                     transition-transform hover:scale-105 duration-300 cursor-pointer">

                <div className=" max-w-[300px] p-2 overflow-hidden mx-auto">
                    <img className="bg-white rounded-[20px] object-contain object-center size-60 " src={image} alt={title} />
                </div>

                <div className="flex flex-col gap-3 mx-1 py-2 flex-grow">
                    <h3 className="font-secondary font-bold text-[16px] leading-5 line-clamp-1 ">{title}</h3>
                    <Rating ratingValue={rate} reviewCount={count} />
                    <PriceDisplay discountPercentage={10} price={120}></PriceDisplay>
                </div>
            </div>
        </Link>
    )
}
export default ProductCard;