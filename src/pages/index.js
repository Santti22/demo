import React from 'react';
import "./pages.css";
import { useLanguage } from '../components/LanguageContext';
import { FaSuitcase, FaUser, FaGlobe } from 'react-icons/fa';

const Home = () => {

    const {language} = useLanguage();

    return (
        <div>
            <div className='banner'>
                <div className='shade'></div>
                <div className='bannerItems'>
                    <h1>{language === "en" ? "Software fueling digital marketing" : "Ohjelmistolla tehostettua digimarkkinointia"}</h1>
                    <a href='https://www.lianatech.fi/' target='_blank' rel='noopener noreferrer'>
                        <button>{language === 'en' ? "Learn more" : "Lue lisää"}</button>
                    </a>
                </div>
            </div>
            <div className='row'>
                <div className='img1 imgs'>{language === 'en' ? "Company" : "Yritys"}</div>
                <div className='img2 imgs'>{language === 'en' ? "Products" : "Tuotteet"}</div>
                <div className='img3 imgs'>{language === 'en' ? "Contact us" : "Ota yhteyttä"}</div>
            </div>
            <div className='row numbers'>
                <div><FaSuitcase /> 3000 {language === 'en' ? 'Clients' : 'Asiakasta'}</div>
                <div><FaUser /> 180 {language === 'en' ? 'Employees' : 'Työntekijää'}</div>
                <div><FaGlobe /> 10000 {language === 'en' ? 'Daily users' : 'Päivittäistä käyttäjää'}</div>
            </div>
            <div>newsfeed</div>
            <div>References</div>
            <div>Reference images</div>
            <div>newsletter subscription</div>
        </div>
    );
};
 
export default Home;