
interface ISocialIcon{
    children: React.ReactNode;
    bgColor?: string;
    href?:string;
}


const SocialIcon = ({children,
    bgColor = "bg-white",
    href="#",}:ISocialIcon) =>{
    return(

        <a href={href}
        target="_blank"
        rel="noopener noreferrer"
         className={`inline-flex items-center justify-center size-7 rounded-full border border-gray-300 ${bgColor}`}
         >
            {children}
        </a>
    )
}

export default SocialIcon;