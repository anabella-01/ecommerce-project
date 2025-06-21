interface PriceDisplayProps{
    discountPercentage?: number;
    price: number;

}

const PriceDisplay = ({price, discountPercentage = 0}:PriceDisplayProps) =>{
        
    
    const hasDiscount = discountPercentage > 0;
    const discountedPrice = hasDiscount
        ?
        price - (price * discountPercentage / 100)
        : price;


    return(
        <div className="flex flex-wrap gap-2 items-center">
            {hasDiscount ? (
                    <>
                        {/* Precio con descuento */}
                        <span className=" font-secondary font-bold text-[20px] text-red-500">$ {discountedPrice.toFixed(2)}</span>
                        
                        {/* Precio original tachado */}
                        <span className="line-through text-black opacity-30 text-[20px] font-secondary">
                            ${price.toFixed(2)}
                        </span>

                          {/* Badge de descuento */}
                        <span className="text-[10px] text-red-500 rounded-[62px] p-2 bg-red-100">-{discountPercentage}%</span>
                    </>
                ) : (

                    <p className="font-secondary font-bold text-2xl">$ {price}</p>

                )}
        </div>
    )
}

export default PriceDisplay;