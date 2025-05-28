import React from 'react';

function RightSection({imageUrl , productName , productDescription , learnMore}) {
    return (
        <div className='container mt-5'>
        <div className='row mt-5 p-5'>
            <div className='col p-5' style={{lineHeight : "2"}}>
                <h2>{productName}</h2>
                <p className='mt-4'>{productDescription}</p>
                <div>
                    <a style={{textDecoration : "none"}} href={learnMore}>Learn more <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
            <div className='col'>
                <img src={imageUrl} alt='left image'/>
            </div>
        </div>
       </div>
    );
}

export default RightSection;