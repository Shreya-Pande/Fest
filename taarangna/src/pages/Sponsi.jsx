import React from 'react';
import './Sponsi.css';

// Import background
import bgImage from '../assets/bgsponsi.png';

// Import all potential sponsor logos based on the assets folder scanning
import logo1 from '../assets/abc.png';
import logo2 from '../assets/image-removebg-preview (2).png';
import logo3 from '../assets/image-removebg-preview (3).png';
import logo4 from '../assets/image-removebg-preview (4).png';
import logo5 from '../assets/abcd.png';
import logo6 from '../assets/image-removebg-preview (5).png';
import logo7 from '../assets/image-removebg-preview (6).png';
import logo8 from '../assets/image-removebg-preview (7).png';

export default function Sponsi() {
    // We layout the logos in two rows to match the reference image configuration
    const topRowLogos = [logo1, logo2, logo3, logo4, logo5];
    const bottomRowLogos = [logo6, logo7, logo8];

    return (
        <div
            className="sponsi-container"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Heading Text Section */}
            <div className="sponsi-title-wrapper">
                <h2 className="sponsi-subtitle">NAVRASA FESTIVAL 2024</h2>
                <div className="sponsi-main-heading-container">
                    <span className="sponsi-decorative-line left"></span>
                    <h1 className="sponsi-title">OUR SPONSORS</h1>
                    <span className="sponsi-decorative-line right"></span>
                </div>
                <div className="sponsi-decorative-underline"></div>
            </div>

            {/* Logos Grid Section */}
            <div className="sponsi-logos-grid">
                <div className="sponsi-row top-row">
                    {topRowLogos.map((logo, index) => (
                        <img
                            key={`top-${index}`}
                            src={logo}
                            alt="Sponsor Logo"
                            className="sponsi-logo"
                        />
                    ))}
                </div>
                <div className="sponsi-row bottom-row">
                    {bottomRowLogos.map((logo, index) => (
                        <img
                            key={`bottom-${index}`}
                            src={logo}
                            alt="Sponsor Logo"
                            className="sponsi-logo"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
