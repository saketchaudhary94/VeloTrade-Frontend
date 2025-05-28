import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='pt-5' id='supportWrapper'>
                <h5>Support Portal</h5>
                <a href=''>Track tickets</a>
            </div>
            <div className='row p-5 mx-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-4 mb-4'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className='mb-3' placeholder='Eg: how do i activate F&O, why is my order getting rejected...'/><br></br>
                    <a href=''>Track account opening</a> &nbsp;
                    <a href=''> Track segment activation</a>&nbsp;
                    <a href=''> Intraday margins</a>&nbsp;
                    <a href=''> Kite user manual</a>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-4'>Featured</h1>
                    <ol>
                        <li><a href=''>Latest Intraday leverages and Square-off timings</a></li>
                        <li><a href=''>Surveillance measure on scrips - March 2025</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;