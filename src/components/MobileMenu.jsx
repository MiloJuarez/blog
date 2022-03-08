import React from "react";
import "@styles/MobileMenu.scss";

const MobileMenu = ({ handleToggleMenu }) => {
    return (
        <div className='MobileMenu' id='MobileMenu'>
            <span className='MobileMenu__close' onClick={handleToggleMenu}>
                <i>&times;</i>
            </span>
            <ul className='MobileMenu__items'>
                <li className='Menu__item Menu__item--active'>
                    <a href=''>Contacto</a>
                </li>
                <li className='Menu__item'>
                    <a href=''>Acerca de</a>
                </li>
                <li className='Menu__item'>
                    <a href=''>Iniciar sesión</a>
                </li>
            </ul>
        </div>
    );
};

export default MobileMenu;
