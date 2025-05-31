import React from 'react';

function Hero() {
    return (  
        <div className='container p-5 text-center'>
            <div className='row'>
                <img src='media/images/homeHero.png' alt='Hero' className='mb-5' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives , mutual funds , and more</p>
                <button className='btn btn-primary fs-5 mb-5' style={{width : "20%" , margin : "0 auto"}}>Signup now</button>
            </div>
        </div>
    );
}

export default Hero;