import React, { useEffect, useRef} from 'react';
import "./pages.css";
import { useLanguage } from '../components/LanguageContext';
import { FaSuitcase, FaUser, FaGlobe } from 'react-icons/fa';
import FeedItems from '../components/FeedItems';

const Home = () => {

    const {language} = useLanguage();
    const rowRef = useRef();

    useEffect(() => {
        let animationFinished = false;
        let extractedNums = [];

        const scrollHandler = () => {
            const numberElement = rowRef.current;
            const posFromTop = numberElement.getBoundingClientRect().top
            const posFromBot = numberElement.getBoundingClientRect().bottom;

            if (posFromTop - window.innerHeight < 0 && posFromBot > 0 && !animationFinished) {
                let animatedElements = numberElement.children;

                for (let i = 0; i < animatedElements.length; i++) {

                    const showElement = animatedElements[i];
                    showElement.style.opacity = 1;
                    showElement.style.transition = `opacity 1s ease ${i * 0.5}s`;

                    extractedNums.push(parseInt(showElement.getAttribute('value')))
                    const numPrint = showElement.querySelector('.printNum');
                    animateNums(numPrint, extractedNums[i], 2000)
                }
                animationFinished = true;
                extractedNums = [];
            }
        };

        const animateNums = (e, value, duration) => {
            const start = performance.now();

            const updateNum = () =>  {
                const now = performance.now();
                const progress = (now - start) / duration;

                if (progress < 1) {
                    const currentValue = Math.round(progress * value);
                    e.textContent = currentValue;

                    requestAnimationFrame(updateNum);
                } else {
                    e.textContent = value;
                }
            }
            requestAnimationFrame(updateNum);
        }

        scrollHandler();
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

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
            <div className='row' ref={rowRef}>
                <div className='numbers' value={3000}>
                    <div className='icon'><FaSuitcase size={60}/></div>
                    <div className='printNum'></div>
                    <div className='rowText'>{language === 'en' ? 'Clients' : 'Asiakasta'}</div>
                </div>
                <div className='numbers' value={180}>
                    <div className='icon'><FaUser size={60}/></div>
                    <div className='printNum'></div>
                    <div className='rowText'>{language === 'en' ? 'Employees' : 'Työntekijää'}</div>
                </div>
                <div className='numbers' value={10000}>
                    <div className='icon'><FaGlobe size={60}/></div>
                    <div className='printNum'></div>
                    <div className='rowText'>{language === 'en' ? 'Daily users' : 'Päivittäistä käyttäjää'}</div>
                </div>
            </div>
            <div className='newsContainer'>
                <div className='title'>Latest news</div>
                <div className='row'>
                    <FeedItems indexed={0} />
                    <FeedItems indexed={1} />
                    <FeedItems indexed={2} />
                </div>
            </div>
            <div>References</div>
            <div>Reference images</div>
            <div>newsletter subscription</div>
        </div>
    );
};
 
export default Home;