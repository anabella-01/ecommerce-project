interface IButton{

    children:React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    width?: string;
   

}

const Button = ({children, className="",onClick,type="button", width = "w-full max-w-[320px]"}:IButton) =>{
    return(
        <button
        className={`p-3 w-full rounded-full cursor-pointer ${width} ${className ||  "bg-black text-white" } `}
        onClick={onClick}
        type={type}
        >
            {children}
        </button>
    )
}

export default Button;  