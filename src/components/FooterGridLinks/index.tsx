import { ILinks } from "../../interfaces/ILinks";

const FooterGridLinks = ({title,links}:ILinks) =>{
    return (
        <div>
            <span className="font-secondary text-[16px] font-medium">{title}</span>
            <ul>  
                {links.map((linkText,index)=>(

                <li key={index}>
                    <a href="#" className="font-secondary text-[16px] opacity-60">
                        {linkText}
                    </a>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterGridLinks;