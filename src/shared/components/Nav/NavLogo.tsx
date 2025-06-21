import { Link } from "react-router";
import logo from "/assets/images/logo/logo.svg"

const NavLogo = () =>{
    return(
        <Link to={`/`}><img className="w-full h-auto cursor-pointer" src={logo} alt="Shop Cop Logo" /></Link>
    )
}

export default NavLogo;