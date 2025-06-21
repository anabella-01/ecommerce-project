interface SizeOptionProps{
    size: string;
    selected: boolean;
    onClick: () => void;
}

const SizeOption = ({size,selected, onClick}:SizeOptionProps) =>{
    return(
        <button 
        onClick={onClick}
        className={`rounded-3xl font-secondary h-10 w-full flex justify-center items-center cursor-pointer transition-colors duration-200 ${
            selected ? "bg-black text-white" : "bg-tartiary"
        }`}
       
        >
            {size}
        </button>
    )
}

export default SizeOption