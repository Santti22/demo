import React from 'react';
import "./pages.css";

const Home = () => {
    return (
        <div>
            <div className='banner'>
                <div className='shade'></div>
                <div className='bannerItems'>
                    <h1>Software fueling digital marketing</h1>
                    <a href='https://www.lianatech.fi/' target='_blank' rel='noopener noreferrer'>
                        <button>Learn more</button>
                    </a>
                </div>
            </div>
            <div className='row'>
                <div className='img1 imgs'>Company</div>
                <div className='img2 imgs'>Products</div>
                <div className='img3 imgs'>Contact us</div>
            </div>
            <div>numbers</div>
            <div>newsfeed</div>
            <div>References</div>
            <div>Reference images</div>
            <div>newsletter subscription</div>
        </div>
    );
};
 
export default Home;