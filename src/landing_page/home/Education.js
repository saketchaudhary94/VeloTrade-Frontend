import React from 'react';

function Education() {
    return (
        <div className='container mt-5'>
            <div className='row p-5'>
                <div className='col'>
                    <img style={{width : "80%"}} src='media/images/education.svg' alt='education'/>
                </div>
                <div className='col'>
                    <h2>Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world <br></br>covering everything from the basic to advance trading.</p>
                    <a style={{textDecoration : "none"}} href="javascript:void(0)">Versity <i className="fa-solid fa-arrow-right-long"></i></a>
                    <p className='mt-5'>TradingQ&A the most active trading and investment community in  <br></br>India for all your market related queries.</p>
                    <a style={{textDecoration : "none"}} href="javascript:void(0)">TradingQ&A <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div> 
    );
}

export default Education;