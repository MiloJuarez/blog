import React from "react";
import menu from "@assets/menu.png";
import "@styles/Header.scss";

const Header = () => {
    return (
        <div className='Header'>
            <div className='Header__title'>
                <a href='/'>MILO'S CODE</a>
            </div>
            <div className='Menu__icon'>
                <img src={menu} alt='Menu' />
            </div>
            <div className='Header__menu'>
                <ul className='Menu'>
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
        </div>
    );
};

export default Header;
