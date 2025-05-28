import React from 'react';

function CreateTicket() {
    return (
        <div className='container ' style={{marginLeft : "120px"}}>
        <div className='row p-5 mt-5'>
            <p className='text-muted fs-4 mb-5'>To create a ticket, select a relevant topic</p>
            <div className='col-4 '>
                <p className='fs-5 mb-4'> <i class="fa-solid fa-circle-plus"></i> Account Opening</p>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Resident individual</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Minor</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Non Resident Indian (NRI)</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Company, Partnership, HUF and LLP</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Glossary</a><br></br>
            </div>
            <div className='col-4'>
                <p className='fs-5 mb-4'> <i class="fa-solid fa-user"></i> Your VeloTrade Account</p>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Your Profile</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Account modification</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Client Master Report (CMR) and Depository Participant (DP)</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Nomination</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Transfer and conversion of securities</a><br></br>
            </div>
            <div className='col-4'>
                <p className='fs-5 mb-4'> <i class="fa-solid fa-square-poll-vertical"></i> Kite</p>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>IPO</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Trading FAQs</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Margin Trading Facility (MTF) and Margins</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Charts and orders</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Alerts and Nudges</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>General</a><br></br>
            </div>
        </div>
        
        <div className='row p-5'>
            <div className='col-4 '>
                <p className='fs-5 mb-4'> <i class="fa-solid fa-box"></i> Funds</p>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Add money</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Withdraw money</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Add bank accounts</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>eMandates</a><br></br>
            </div>
            <div className='col-4'>
                <p className='fs-5 mb-4'> <i class="fa-brands fa-ubuntu"></i>  Console</p>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Portfolio</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Corporate actions</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Funds statement</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Reports</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Profile</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Segments</a><br></br>
            </div>
            <div className='col-4'>
                <p className='fs-5 mb-4'> <i class="fa-brands fa-nfc-directional"></i> Coin</p>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Understanding mutual funds and Coin</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Coin app</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Coin web</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>Transactions and reports</a><br></br>
                <a style={{textDecoration : "none" , lineHeight : "2.5"}} href=''>National Pension Scheme (NPS)</a><br></br>
            </div>
        </div>
    </div>
    );
}

export default CreateTicket;