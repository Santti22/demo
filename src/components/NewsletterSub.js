import React, {useState} from "react";
import { useLanguage } from './LanguageContext';


const NewsletterSub = () => {

    const {language} = useLanguage();
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleInputChange = (e) => {
        setEmail(e.target.value);
        setIsValidEmail(true)
    }

    const isValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValid(email)) {
            setIsValidEmail(false);
            return;
          }

        try {
            const response = await fetch("http://localhost:3001/api/subscribe", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({email}),
            });
      
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
      
            const result = await response.json();
            alert(result.message); // Log the response from the server
          } catch (error) {
            alert("Error:", error);
          }
    }

    return (
        <div className="centered">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder={language === 'en' ? 'Your email address' : 'Sähköpostiosoitteesi'}
                    required
                />
                {!isValidEmail && (
                    <div style={{ color: 'red' }}>
                        Invalid email format. Please enter a valid email address.
                    </div>
                )}
                <button type="submit">{language === 'en' ? 'Subscribe' : 'Tilaa'}</button>
            </form>
        </div>
    )
}

export default NewsletterSub;