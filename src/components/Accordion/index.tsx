import { useState } from "react";
import {ChevronDownIcon} from "@heroicons/react/24/outline"
import { ILinks } from "../../interfaces/ILinks";

const Accordion = ({title, links}:ILinks) => {

    const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

    const toggleAccordion = () => setIsToggleOpen(!isToggleOpen);

    return (
        <>
 
            <button 
            onClick={toggleAccordion}
            className="flex items-center gap-2 font-secondary text-[16px] font-medium border-t w-full h-11"
            >{title}
            <ChevronDownIcon className={`h-5 w-5  ml-auto transition-transform duration-300 
            ${ isToggleOpen ? "rotate-180" : ""}`} />
            </button>
            <ul className={` space-y-1 transition-all duration-300 ease-in-out overflow-hidden ${isToggleOpen ? "block" : "hidden"}`}>
                {links.map((linkText, index) => (
                    <li key={index}>
                        <a href="#" className="font-secondary text-[16px] opacity-60 hover:opacity-100 transition">{linkText}</a>
                    </li>
                ))}
            </ul>
        </>
    )

}

export default Accordion;