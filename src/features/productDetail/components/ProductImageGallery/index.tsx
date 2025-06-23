import { useState } from "react";
import { IProduct } from "../../../productList/types/IProduct";
import ImageThumbnail from "../ImageThumbnail";
import image1 from "../../images/1.png";
import image3 from "../../images/3.png";
import image4 from "../../images/4.png"; {/**Solo de prueba, falta implementar data real*/}

interface ProductImageGalleryProps{
    product: IProduct;
}

const ProductImageGallery = ({product}:ProductImageGalleryProps) => {

    const {image, title} = product;
    const images = [image1, image3, image4];
    const [selectedImage, setSelectedImage] = useState<string>(image);

    return (

            <div className="flex flex-col gap-4 mx-auto max-w-full md:max-w-[500px] md:flex-row-reverse lg:gap-6 ">     

                {/**Main image */}
                <div className="w-full max-w-[300px] lg:max-w-[500px] mx-auto">
                    <img className="w-full h-full object-contain rounded-[20px] transition-all duration-300 ease-in-out" 
                         src={selectedImage} 
                         alt={title} />
                </div>

                {/**Thumbnails */}
                <div className="flex justify-center items-center gap-2 pt-2 md:flex-col md:gap-0 md:justify-evenly"> 
                {

                    images.map((img,index)=>(

                             <ImageThumbnail
                             key={index}
                             image={img} 
                             title={title}
                             selected={selectedImage === img}
                             onClick={()=>{setSelectedImage(img)}} 
                             />
                    ))

                }
                    
                </div>

            </div>
    )

}

export default ProductImageGallery;