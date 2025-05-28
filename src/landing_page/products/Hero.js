import React from 'react';

function Hero() {
    return (
       <div className='container border-bottom mb-5 p-5'>
        <div className='row text-center mt-5'>
           <h1 style={{fontSize : "2.9em"}}>VeloTrade Products</h1> 
           <p className='fs-5'>Sleek, modern, and intuitive trading platforms</p>
           <p className='fs-6'>Check out our  <a style={{textDecoration : "none"}} href=''>investment offerings <i className="fa-solid fa-arrow-right-long"></i></a></p>
        </div>
       </div>
    );
}

export default Hero;