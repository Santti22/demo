import React from 'react';
import { useLanguage } from './LanguageContext';


const LanguageSelect = () => {
    const { language, switchLanguage } = useLanguage();

    const handleLanguageChange = (newLanguage) => {
        switchLanguage(newLanguage);
    }

    return (
        <div className=''>
            <select value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
                <option value="en">In English</option>
                <option value="fi">In Finnish</option>
            </select>
        </div>
    )
};

export default LanguageSelect;