import { useState } from 'react';
import NavLogo from './NavLogo';
import SearchIcon from './SearchIcon';
import CartIcon from './CartIcon';
import MenuToggle from './MenuToggle';


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Estado para controlar si el menú mobile está abierto o cerrado

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Cambia el estado del menú al hacer clic

    return (
        <nav className='bg-white shadow-md'>
            <div className='flex justify-between items-center px-4 py-5'>
                <div className='relative'>
                    <div className='flex items-center gap-4 md:flex-row-reverse'>
                        
                        {/* Botón hamburguesa con función onClick*/}
                       <MenuToggle toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

                        <div>
                            <ul className={` ${isMenuOpen ? "block" : "hidden" } bg-white shadow-md absolute z-10 top-12 left-0 w-full p-4 space-y-3 transition-all duration-300 ease-in-out
                                        md:static md:flex md:items-center md:space-y-0 md:space-x-6 md:w-auto md:shadow-none md:p-0`}>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">On Sale</a></li>
                                <li><a href="#">New Arrivals</a></li>
                                <li><a href="#">Brands</a></li>
                            </ul>
                        </div>
                        <NavLogo />
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <SearchIcon />
                    <CartIcon />
                </div>

            </div>
        </nav>
    )
}

export default Navbar;