import { createContext, useContext, useState } from "react";

/* This language switcher is used because in this demo we have only 2 languages, if there were 
more, I would probably use a different approach */

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {

    const [language, setLanguage] = useState('en')

    const switchLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{language, switchLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
}