import { CheckIcon } from "@heroicons/react/24/solid";

interface ColorOptionProps{
    color:string,
    selected: boolean,
    onClick: ()=> void;
    
}
const ColorOption = ({color, onClick, selected}:ColorOptionProps) => {
    return (

        <button
        onClick={onClick}
        className={`size-8 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 `}
        style={{backgroundColor:color}}    
        >
            
        {selected && <CheckIcon className="size-6 text-white"/>}  

       </button>
        
    )
}

export default ColorOption