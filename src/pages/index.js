import React, { useEffect, useRef} from 'react';
import "./pages.css";
import { useLanguage } from '../components/LanguageContext';
import { FaSuitcase, FaUser, FaGlobe } from 'react-icons/fa';
import FeedItems from '../components/FeedItems';
import NewsletterSub from '../components/NewsletterSub';
import bosch from './img/bosch.png'
import bodyShop from './img/thebodyshop.png'
import laplandHotels from './img/laplandhotels.png'
import ikea from './img/ikea.png'
import { NavLink } from 'react-router-dom';

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
                <div className='img1 imgs'><NavLink to="/company">{language === 'en' ? "Company" : "Yritys"}</NavLink></div>
                <div className='img2 imgs'><NavLink to="/products" activeStyle>{language === 'en' ? 'Products' : 'Tuotteet'} </NavLink></div>
                <div className='img3 imgs'><NavLink to="/contact" activeStyle>{language === 'en' ? 'Contact us' : 'Ota yhteyttä'}</NavLink></div>
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
                <div className='title'>{language === 'en' ? 'Latest news' : 'Tuoreimmat uutiset'}</div>
                <div className='row'>
                    <FeedItems indexed={0} />
                    <FeedItems indexed={1} />
                    <FeedItems indexed={2} />
                </div>
            </div>
            <div>
                <div className='title'>{language === 'en' ? 'References' : 'Viitteet'}</div>
                <div className='row'>
                    <div className='refWrapper'>
                        <div className='refTop'>
                            <img className='refImg' src={bosch} alt='bosch' />
                        </div>
                        <div className='refBot'>
                            <h1 className='refTitle'>Robert Bosch</h1>
                            <p className='refText'>{language === 'en' ? 'Bosch is a multinational engineering and electronics company.' :
                             'Bosch on monikansallinen teknillisen ja elektroniikan yritys.'}</p>
                        </div>
                    </div>
                    <div className='refWrapper'>
                        <div className='refTop'>
                            <img className='refImg' src={bodyShop} alt='The Body Shop'/>
                        </div>
                        <div className='refBot'>
                            <h1 className='refTitle'>The Body Shop</h1>
                            <p className='refText'>{language === 'en' ? 'The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries.' :
                             'The Body Shop on kansainvälinen muotiyhtiö, jolla on yli 3000 kauppaa yli 60 maassa.'}</p>
                        </div>
                    </div>
                    <div className='refWrapper'>
                        <div className='refTop'>
                            <img className='refImg' src={laplandHotels} alt='Lapland Hotels'/>
                        </div>
                        <div className='refBot'>
                            <h1 className='refTitle'>Lapland Hotels</h1>
                            <p className='refText'>{language === 'en' ? 'Lapland Hotels is the largest and the most diverse hotel chain Lapland.' : 
                            'Lapland Hotels on suurin ja monipuolisin hotelliketju lapissa.'}</p>
                        </div>
                    </div>
                    <div className='refWrapper'>
                        <div className='refTop'>
                            <img className='refImg' src={ikea} alt='Ikea'/>
                        </div>
                        <div className='refBot'>
                            <h1 className='refTitle'>IKEA</h1>
                            <p className='refText'>{language === 'en' ? 'IKEA is a multinational furniture store.' : 
                            'IKEA on monikansalinen huonekaluliike.'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <div className='title'>{language === 'en' ? 'Subscribe to our newsletter' : 'Tilaa uutiskirjeemme'}</div>
                <div className='centered'>
                    <div className='bodyText'>{language === 'en' ? 'Follow our story and get the latest promotonial news about our products and events.' : 
                    'Seuraa tarinaamme ja saat tuoerimmat uutiset tuotteistamme ja tapahtumista.'}</div>
                </div>
                <NewsletterSub />
            </div>
        </div>
    );
};
 
export default Home;