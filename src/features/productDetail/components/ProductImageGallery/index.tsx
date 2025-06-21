import { IProduct } from "../../../productList/types/IProduct";


interface ProductImageGalleryProps{
    product: IProduct;
}

const ProductImageGallery = ({product}:ProductImageGalleryProps) => {

    const {image, title} = product;
    const images = [image, image, image];
    

    return (

            <div className="flex flex-col gap-4 mx-auto max-w-full md:max-w-[500px] md:flex-row-reverse lg:gap-6 ">     

                {/**Main image */}
                <div className="w-full max-w-[300px] lg:max-w-[500px] mx-auto">
                    <img className="w-full h-full object-contain rounded-[20px]" src={image} alt={title} />
                </div>

                {/**Thumbnails */}
                <div className="flex justify-center items-center gap-2 pt-2 md:flex-col md:gap-0 md:justify-evenly"> 
                {

                    images.map((img,index)=>(

                             <img 
                             key={index}
                             src={img} 
                             alt={title} 
                             className="size-16 object-contain rounded-[20px] cursor-pointer aspect-square " />
                    ))

                }
                    
                </div>

            </div>
    )

}

export default ProductImageGallery;