import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-100'>
            <img src="/logo.png" alt="logo_png" className='sm:w-[350px] w-[250px] mx-auto p-2'/>
            <p className='text-small sm:p-4 p-2'>
                Project MAHARERA : P52100026739 The content presented on this website is solely for
                informational purposes and does not constitute a service offer. Prices mentioned
                here are subject to change without prior notification, and the availability of the
                listed properties is not assured. Images showcased are illustrative and may not
                precisely represent the actual properties. Kindly be advised that this website
                operates as an authorized marketing partner (PropSolutions4U Pvt. Ltd). For
                necessary processing, we may share data with Real Estate Regulatory Authority (RERA)
                registered brokers/companies. Additionally, updates and information may be sent to
                the registered mobile number or email ID. All rights reserved. This websites
                content, design, and data are protected by copyright and other intellectual property
                rights. Unauthorized use or reproduction of the content may be subject to legal
                repercussions. For precise and current information on services, pricing,
                availability, or any other details, we recommend you contact us directly via the
                provided contact information on this website. We appreciate your visit.
            </p>
            <p className='text-center text-sm p-2'>© Privacy Policy | Terms & Conditions</p>
            <p className='py-2 text-center font-bold text-white text-lg bg-gray-dark'>
                All Rights Reserved. © 2024 AdarshVerma Pvt. Ltd.
            </p>
        </div>
    );
};

export default Footer;
