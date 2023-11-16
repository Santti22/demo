import React from "react";
import LanguageSelect from "./LanguageSelect";
import { useLanguage } from "./LanguageContext";

const Header = () => {

    const { language } = useLanguage();
    return (
        <div className="header">
            <div style={{'margin-right': '21px'}}>{language === 'en' ? 'News' : 'Uutiset'}</div>
            <div style={{'margin-right': '21px'}}>Intranet</div>
            <LanguageSelect />
        </div>
    );
};

export default Header;