interface PropsQuantitySelector {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;

}
const QuantitySelector = ({ count, onIncrease, onDecrease }: PropsQuantitySelector) => {

    return (
      
            <div className="flex">

                <button
                    onClick={(onIncrease)}
                    className="rounded-l-2xl bg-tartiary h-10 w-10 flex justify-center items-center"
                    aria-label="Increase quantity"
                >
                    +
                </button>
                <span className="rounded  bg-tartiary h-10 w-10 flex justify-center items-center">{count}</span>
                <button
                    onClick={(onDecrease)}
                    className="rounded-r-2xl p-5 bg-tartiary h-10 w-10 flex justify-center items-center"
                    aria-label="Decrease quantity"
                >
                    -
                </button>

            </div>


      

    )
}

export default QuantitySelector 
