
interface ISocialIcon{
    children: React.ReactNode;
    bgColor?: string;
    href?:string;
    title:string;
    
}


const SocialIcon = ({children,
    bgColor = "bg-white",
    href="#",
    title}:ISocialIcon) =>{
    return(

        <a href={href}
        title={title}
        target="_blank"
        rel="noopener noreferrer"
         className={`inline-flex items-center justify-center size-8 rounded-full border border-gray-300 ${bgColor}`}
         >
            {children}
        </a>
    )
}

export default SocialIcon;