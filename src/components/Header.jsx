import React, { useState } from "react";
import menu from "@assets/menu.png";
import "@styles/Header.scss";
import MobileMenu from "@components/MobileMenu";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        if (toggleMenu) {
            document.getElementById("MobileMenu").style.animationName =
                "hideMenu";
            setTimeout(() => {
                setToggleMenu(!toggleMenu);
            }, 1000);
        } else {
            setToggleMenu(!toggleMenu);
        }
    };
    return (
        <div className='Header'>
            <div className='Header__title'>
                <a href='/'>MILO'S CODE</a>
            </div>
            <div className='Menu__icon' onClick={handleToggleMenu}>
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
            {toggleMenu && <MobileMenu handleToggleMenu={handleToggleMenu} />}
        </div>
    );
};

export default Header;
