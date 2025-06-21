import { ILinks } from "../../types/ILinks";

const FooterGridLinks = ({title,links}:ILinks) =>{
    return (
        <div>
            <span className="font-secondary text-[16px] font-medium">{title}</span>
            <ul className="space-y-3">  
                {links.map((linkText,index)=>(

                <li key={index}>
                    <a href="#" className="font-secondary text-[16px] opacity-60 hover:opacity-100 transition">
                        {linkText}
                    </a>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterGridLinks;