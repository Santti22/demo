import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLinks = ( {language} ) => {

    return (
        <div>
         <NavLink to="/company" activeStyle>
            {language === 'en' ? 'Company' : 'Yritys'}
        </NavLink>
        <NavLink to="/products" activeStyle>
            {language === 'en' ? 'Products' : 'Tuotteet'}
        </NavLink>
        <NavLink to="/contact" activeStyle>
            {language === 'en' ? 'Contact us' : 'Ota yhteyttä'}
        </NavLink>
    </div>
  );
};

export default NavigationLinks;