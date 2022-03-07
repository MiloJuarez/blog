import React from "react";
import menu from "@assets/menu.png";

const Header = () => {
    return (
        <div className='Header'>
            <div className='Header__title'>MILO'S CODE</div>
            <div className='Menu_icon'>
                <img src={menu} alt='Menu' />
            </div>
            <div className='Header__menu'>
                <ul className='Menu'>
                    <li className='Menu__item'>
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
