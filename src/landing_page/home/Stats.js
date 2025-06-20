import React from 'react';

function Stats() {
    return (  
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-3'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-5'>Customer-first always</h2>
                    <p className='text-muted mb-5'>That's why 1.5+ crore customers trust VeloTrade with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h2 className='fs-5'>No spam or gimmicks</h2>
                    <p className='text-muted mb-5'>No gimmicks , spam , "gamification" , or annoying push notifications. High quality apps that you use at your pace , the way you like.</p>

                    <h2 className='fs-5'>The VeloTrade universe</h2>
                    <p className='text-muted mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='fs-5'>Do better with money</h2>
                    <p className='text-muted mb-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-3'>
                    <img style={{width : "100%"}} src='media/images/ecosystem.png' alt='ecosystem'/>
                    <div className='text-center'>
                        <a className='mx-5' style={{textDecoration : "none"}} href="/product">Explore our products <i className="fa-solid fa-arrow-right-long"></i></a>
                        <a style={{textDecoration : "none"}} href="/product">Try Kite demo <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;