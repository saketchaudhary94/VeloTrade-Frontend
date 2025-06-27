import React from "react";

function Team() {
    return (
        <div className="container">
            <div className="row">
                <h2 className="text-center">
                    People
                </h2>
            </div>
            <div
                className="row  p-5"
                style={{ lineHeight: "1.8", fontSize: "1.1em" }}
            >
                <div className="col p-5 text-center">
                    <img src="media/images/nithinKamath.jpg" alt="my" style={{borderRadius : "100%" , width : "60%"}} />
                    <h4 className="mt-4">Saket singh</h4>
                    <h6>Founder , CEO</h6>
                </div>
                <div className="col p-5">
                    <p>
                        Saket  bootstrapped and founded VeloTrade in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today ,VeloTrade has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                    Playing basketball is his zen.
                    </p>
                    <p>Connect on Homepage/ TradingQnAe / Twitter </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
