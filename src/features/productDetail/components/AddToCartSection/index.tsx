import { useState } from "react"
import Button from "../../../../shared/components/Button";
import QuantitySelector from "../QuantitySelector";

const AddToCartSection = () => {

    const [count, setCount] = useState<number>(1);

    const onIncrease = () => {setCount(count + 1)}

    const onDecrease = () => { if (count > 1) { setCount(count - 1) }}

    return (
        <div className="w-full">
            <div className="flex items-center gap-2 pt-3">
                <QuantitySelector onIncrease={onIncrease} onDecrease={onDecrease} count={count}/>

                <Button onClick={()=>console.log(`Selected quantity: ${count}`)} >Add to Cart</Button>
            </div>
        </div>
    )
}

export default AddToCartSection