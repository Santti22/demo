import React, {useEffect, useState} from "react";
import {Nav, NavLink, NavMenu, Bars} from "./NavElements";
import logo from "../img/logo.png"
import { useLanguage } from "./LanguageContext";

const NavBar = () => {

    const {language} = useLanguage();

    const [dropDown, setDropDown] = useState(false)

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= 768) {
            setDropDown(false)
        };
    };

    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
    }, [])

    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <NavMenu>
                    <NavLink to="/company" activeStyle>
                        {language === 'en' ? "Company" : "Yritys"}
                    </NavLink>
                    <NavLink to="/products" activeStyle>
                        {language === 'en' ? "Products" : "Tuotteet"}
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        {language === 'en' ? "Contact us" : "Ota yhteyttä"}
                    </NavLink>
                    <div className="search-container">
                        <input type="text" placeholder={language === 'en' ? 'Search' : 'Hae'} />
                        <button type="submit">{language === 'en' ? 'Search' : 'Haku'}</button>
                    </div>
                </NavMenu>
                <div>
                <Bars onClick={() => setDropDown(!dropDown)}></Bars>
                    {dropDown ? (
                    <div className="mobileMenu">
                        <NavLink to="/company" activeStyle>
                            {language === 'en' ? "Company" : "Yritys"}
                        </NavLink>
                        <NavLink to="/products" activeStyle>
                            {language === 'en' ? "Products" : "Tuotteet"}
                        </NavLink>
                        <NavLink to="/contact" activeStyle>
                            {language === 'en' ? "Contact us" : "Ota yhteyttä"}
                        </NavLink>
                        <div className="search-container">
                            <input type="text" placeholder={language === 'en' ? 'Search' : 'Hae'} />
                            <button type="submit">{language === 'en' ? 'Search' : 'Haku'}</button>
                        </div>
                </div>
                    ) : ""
                }
                </div>

            </Nav>
        </div>
    );
};

export default NavBar;