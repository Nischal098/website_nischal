import React from "react";


const Footer = () => {
    return (
    <div className="main-footer">
    <div className="container">
        <div className="row">
        {/* Column1 */}
        <div className="col">
            <h4>Location</h4>
            <ui className="list-unstyled">
            <li>123 Zanzibar Avenue,</li>
            <li>Ottawa, Ontario,</li>
            <li>K13 2A2</li>
            </ui>
        </div>
        {/* Column2 */}
        <div className="col">
            <h4>Links</h4>
            <ui className="list-unstyled">
            <li><a href="/Lessons">Lessons</a></li>
            <li><a href="/Community">Community</a></li>
            <li><a href="/Book">Book</a></li>
            <li><a href="/Help">Help</a></li>
            </ui>
        </div>
        {/* Column3 */}
        <div className="col">
            <h4>About Us</h4>
            <ui className="list-unstyled">
            <li>We are a certified outdoor soccer sports club</li>
            <li>always hosting soccer events. We are always ready to</li>
            <li>answer your questions and ready to help you play better.</li>
            </ui>
        </div>
        </div>
        <hr />
        <div className="row">
        <p className="col-sm">
            &copy;{new Date().getFullYear()} Mountain Soccer | All rights reserved
        </p>
        </div>
    </div>
    </div>
    );
}

export default Footer;