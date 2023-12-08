import React from "react";
import LanguageSelect from "./LanguageSelect";
import { useLanguage } from "./LanguageContext";

const Header = ({isInHeader}) => {

    const { language } = useLanguage();
    return (
        <div>
            {isInHeader && <div className="header">
                <a href="">{language === 'en' ? 'News' : 'Uutiset'}</a>
                <a href="">Intranet</a>
            <LanguageSelect /></div>}
            <a href="" style={{'margin-right': '10px'}}>{language === 'en' ? 'News' : 'Uutiset'}</a>
            <a href="" style={{'margin-right': '10px'}}>Intranet</a>
        </div>
    );
};

export default Header;