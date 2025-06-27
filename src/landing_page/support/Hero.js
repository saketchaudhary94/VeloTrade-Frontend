import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='pt-5' id='supportWrapper'>
                <h5>Support Portal</h5>
                Track tickets
            </div>
            <div className='row p-5 mx-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-4 mb-4'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className='mb-3' placeholder='Eg: how do i activate F&O, why is my order getting rejected...'/><br></br>
                    Track account opening &nbsp;
                    Track segment activation &nbsp;
                    Intraday margins &nbsp;
                    Kite user manual
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-4'>Featured</h1>
                    <ol>
                        <li>Latest Intraday leverages and Square-off timings</li>
                        <li>Surveillance measure on scrips - March 2025</li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;