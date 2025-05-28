import HamburguerIcon from "./HamburguerIcon";

interface IMenuToggle{
    toggleMenu: () => void; // Función para alternar el menú
    isMenuOpen: boolean; // Estado que indica si el menú está abierto o cerrado
}

const MenuToggle = ({toggleMenu, isMenuOpen}: IMenuToggle) => {
    return (

        <button
            onClick={toggleMenu} // Cambia el estado del menú al hacer clic
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen} // Indica si el menú está abierto o cerrado
            className='focus:outline-none md:hidden'
        >
            <HamburguerIcon/>
        </button>

    )
}

export default MenuToggle;