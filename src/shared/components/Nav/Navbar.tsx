import { useState } from 'react';
import NavLogo from './NavLogo';
import MenuToggle from './MenuToggle';
import {MagnifyingGlassIcon, ShoppingCartIcon} from "@heroicons/react/24/outline"



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Estado para controlar si el menú mobile está abierto o cerrado

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Cambia el estado del menú al hacer clic

    return (
        <nav className='bg-white shadow-md w-full'>
            <div className='mx-auto container flex justify-between items-center px-4 py-5 md:px-6'>
                <div className='relative'>
                    <div className='flex items-center gap-2 md:flex-row-reverse'>
                        
                        {/* Falta agregar ReactRouter*/}
                       <MenuToggle toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

                        <div className='md:px-4'>
                            <ul className={` ${isMenuOpen ? "block" : "hidden" } bg-white shadow-md absolute z-10 top-12 left-0 w-full p-4 space-y-3 transition-all duration-300 ease-in-out
                                        md:static md:flex md:items-center md:space-y-0 md:space-x-6 md:w-auto md:shadow-none md:p-0 font-secondary`}>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">On Sale</a></li>
                                <li><a href="#">New Arrivals</a></li>
                                <li><a href="#">Brands</a></li>
                            </ul>
                        </div>
                        <NavLogo />
                    </div>
                </div>

                <div className='flex items-center gap-2 md:gap-3'>
                <MagnifyingGlassIcon className='w-6 h-6'/>
                <ShoppingCartIcon className='w-6 h-6'/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;