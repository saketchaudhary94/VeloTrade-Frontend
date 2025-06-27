import React from 'react';

function Universe() {
    return (
       <div className='container mt-5 p-5'>
        <div className='row text-center p-5'>
            <h2>The VeloTrade Universe</h2>
            <p className='mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/zerodhaFundhouse.png' style={{width : "55%"}} alt='an'/>
                <p className='text-muted mt-4' style={{fontSize : "12px"}}>Our asset management venture that is creating simple and transparent index fund to help you save for your goals.</p>
            </div>
            <div className='col-4 p-3 mt-5'>
            <img src='media/images/sensibullLogo.svg' style={{width : "55%"}} alt='an'/>
            <p className='text-muted mt-4' style={{fontSize : "12px"}}>Options trading platform that lets you create strategies , analyze positions , and examine data points like open interst , FII/DII, and more.</p>
            </div>
            <div className='col-4 p-3 mt-5'>
            <img src='media/images/tijori.svg' style={{width : "50%"}} alt='an'/>
            <p className='text-muted mt-4' style={{fontSize : "12px"}}>investment research platform that offers detailed insights on stocks , sectors ,supply chains , and more .</p>
            </div>

            <div className='col-4 p-3 mt-5'>
                <img src='media/images/streakLogo.png' style={{width : "50%"}} alt='an '/>
                <p className='text-muted mt-4' style={{fontSize : "12px"}}>Systemic trading platform that allows you to create and backtest strategies without coding.</p>
            </div>
            <div className='col-4 p-3 mt-5'>
            <img src='media/images/smallcaseLogo.png' alt='an'/>
            <p className='text-muted mt-4' style={{fontSize : "12px"}}>Thematic investing platform that help you invest in diversified baskets of stocks on ETFs .</p>
            </div>
            <div className='col-4 p-3 mt-5'>
            <img src='media/images/dittoLogo.png' style={{width : "50%"}} alt='an'/>
            <p className='text-muted mt-4' style={{fontSize : "12px"}}>Personalized advice on life and health inseurance . No spam and no mis-selling .</p>
            </div>
            <button className='btn btn-primary fs-5 mb-5 mt-5' style={{width : "20%" , margin : "0 auto"}}>Sign up for free</button>
        </div>
       </div>
    );
}

export default Universe;