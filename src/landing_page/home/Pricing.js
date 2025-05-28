import React from 'react';

function Pricing() {
    return (  
        <div className='container'>
            <div className='row p-5'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a style={{textDecoration : "none"}} href=''>See pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col text-center border p-3'>
                            <h1 className='mb-4'>₹0</h1>
                            <p>Free equity delivery and <br></br>direct mutual funds</p>
                        </div>
                        <div className='col text-center border p-3'>
                            <h1 className='mb-4'>₹0</h1>
                            <p>Intraday and F&O </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;