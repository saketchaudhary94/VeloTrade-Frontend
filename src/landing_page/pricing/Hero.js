import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row mt-5 p-5 text-center'>
                <h1>Pricing</h1>
                <p className='text-muted fs-5 mt-3'>Free equity investments and flat ₹20 traday and F&0 trades </p>
            </div>
            <div className='row  p-5 mt-5 text-center'>
                <div className='col-4 p-4'>
                    <img src='media/images/pricingEquity.svg' alt='zero image'/>
                    <h2>Free equity delivery</h2>
                    <p className='text-muted' style={{lineHeight : "1.8"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media/images/intradayTrades.svg' alt='zero image'/>
                    <h2>Intraday and F&O trades</h2>
                    <p className='text-muted' style={{lineHeight : "1.8"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media/images/pricingEquity.svg' alt='zero image'/>
                    <h2>Free direct MF</h2>
                    <p className='text-muted' style={{lineHeight : "1.8"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;