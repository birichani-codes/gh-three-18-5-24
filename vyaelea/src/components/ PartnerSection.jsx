// PartnerSection.jsx

import React from 'react';

const PartnerSection = () => {
    return (
        <section className="partner-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="section-header">Collaborate</h2>
                        <p className="section-description">
                            The aspiration of transforming society is a brazen, surmountable, and sustainable goal.<br/><br/>
                            It is not about how much you give, but about how much you believe in the vision.<br/><br/>
                            A society where the equity gap is narrowed, peace is ingrained, and good health is the norm, beginning with you.
                        </p>
                    </div>
                    <div className="col-md-12">
                        <h2 className="section-header">Payment Details</h2>
                    </div>
                    <div className="col-md-12">
                        <img src="assets/images/partner-logo.png" alt="account info/qrcode" className="partner-logo" />
                    </div>
                    <p>
                        Thank you for being a part of the vision
                    </p>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;
