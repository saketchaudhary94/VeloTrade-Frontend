import React from 'react';

function LeftSection({imageUrl , productName , productDescription , tryDemo , learnMore , googlePlay , appStore}) {
    return (
       <div className='container mt-5'>
        <div className='row mt-5 p-5'>
            <div className='col-8'>
                <img src={imageUrl} alt='left image'/>
            </div>
            <div className='col-4' style={{lineHeight : "2"}}>
                <h2>{productName}</h2>
                <p className='mt-4'>{productDescription}</p>
                <div>
                    <a style={{textDecoration : "none"}} href={tryDemo}>Type Demo <i className="fa-solid fa-arrow-right-long"></i></a>
                    <a style={{textDecoration : "none" , marginLeft : "50px"}} href={learnMore}>Learn more <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='mt-4'>
                    <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                    <a style={{marginLeft : "15px"}} href={appStore}> <img src='media/images/appstoreBadge.svg'/></a>
                </div>
            </div>
        </div>
       </div>
    );
}

export default LeftSection;