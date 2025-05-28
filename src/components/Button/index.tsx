interface IButton{

    children:React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";

}

const Button = ({children, className="",onClick,type="button"}:IButton) =>{
    return(
        <button
        className={`p-3 w-full max-w-[320px] rounded-full ${className ||  "bg-black text-white" } `}
        onClick={onClick}
        type={type}
        >
            {children}
        </button>
    )
}

export default Button;  