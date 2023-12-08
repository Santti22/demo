import React from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import  Header  from '../components/Header'
import NavigationLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import { useLanguage } from "./LanguageContext";


const Footer = () => {
    const location = useLocation();
    const {language} = useLanguage()

    return (
        <div className="footer">
            <div className="footerLT">
                <h2>Liana Technologies</h2>
            </div>
            <div className="footerRT">
                <NavigationLinks language={language} currentPath={location.pathname} />
                <Header isInHeader={false} />
            </div>
            <div className="footerLB">
                <h3>Sales and inquiries:</h3>
                <p>Email: sales@lianatech.com</p>
                <p>Phone: +358 10 387 7053</p>
                <div>
                    <button type="link">Contact us</button>
                </div>
            </div>
            <div className="footerRB">
                <a href="https://www.linkedin.com/company/liana-technologies/" target='_blank' rel='noopener noreferrer' className="circle"><FaLinkedinIn style={{color: 'white'}}/></a>
                <a href="https://twitter.com/LianaTech" target='_blank' rel='noopener noreferrer' className="circle"><FaTwitter style={{color: 'white'}}/></a>
                <a href="https://www.facebook.com/LianaTechFI/" target='_blank' rel='noopener noreferrer' className="circle"><FaFacebook style={{color: 'white'}}/></a>
            </div>
        </div>
    );
};

export default Footer;