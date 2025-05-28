import { IProduct } from "../../interfaces/IProduct";

const ProductCard = ({ id, image, title, price }: IProduct) => {
    return (
        <div key={id} className="max-h-96 w-full bg-secondary shadow-2xs rounded-[20px] overflow-hidden">
            
            <div className=" w-full h-[200px] p-2 overflow-hidden">
                 <img className="bg-white rounded-[20px] object-contain object-center w-full h-[190px]  " src={image} alt={title} />
            </div>
           
            <div className=" space-y-2 m-2">
                <h3 className="font-secondary font-bold text-[16px] ">{title}</h3>
                <span className="font-secondary font-bold text-[20px]">$ {price}</span>
            </div>

        </div>
       
    )
}
export default ProductCard;