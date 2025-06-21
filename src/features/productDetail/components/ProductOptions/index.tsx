import { useState } from "react";
import ColorOption from "../ColorOption";
import SizeOption from "../SizeOption";

const ProductOptions = () => {

    const [selectedColor, setSelectedColor] = useState<string|null>(null);
    const [selectedSize,setselectedSize] = useState<string|null>(null) ;

    const colors = ["#31344F", "#314F4A", "#4F4631"];
    const sizes = ["Small","Medium","Large","X-Large"];

    return (
        <div className="w-full pt-2">
            <div className="flex-col space-y-3">
                <h3 className="font-secondary opacity-60">Select Colors</h3>
                <div className="flex gap-4">
                    {

                        colors.map((color, index) => (
                            <ColorOption
                                key={index}
                                color={color}
                                selected={selectedColor === color}
                                onClick={() => setSelectedColor(selectedColor===color? null: color)} />
                        ))

                    }

                </div>

                <div className="border-t opacity-10"></div>

                <div className="flex-col space-y-3 mb-4">
                    <h3 className="font-secondary opacity-60">Choose Size</h3>
                    <div className="flex gap-4">
                    {
                      sizes.map((size, index)=>(

                         <SizeOption
                         key={index} 
                         size={size}
                         selected={selectedSize === size}
                         onClick={()=>setselectedSize(selectedSize===size? null: size)}      
                        />
                        ))
                    }

                    </div>
                </div>
                <div className="border-t opacity-10"></div>
            </div>

        </div>

    )
}

export default ProductOptions;