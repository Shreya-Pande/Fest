import React, { useEffect, useRef } from 'react';
import './Sponsi.css';

// Import background
import bgImage from '../assets/bgsponsi.png';

// Import all potential sponsor logos based on the assets folder scanning
//import logo1 from '../assets/abc.png';
import logo2 from '../assets/image-removebg-preview (2).png';
import logo3 from '../assets/image-removebg-preview (3).png';
import logo4 from '../assets/image-removebg-preview (4).png';
//import logo5 from '../assets/abcd.png';
import logo6 from '../assets/image-removebg-preview (5).png';
import logo7 from '../assets/image-removebg-preview (6).png';
//import logo8 from '../assets/image-removebg-preview (7).png';

export default function Sponsi() {
    const sponsors = [
        //{ logo: logo1, symbol: '❖', name: 'Brand Name 1' },
        { logo: logo2, symbol: '✦', name: 'Burger King' },
        { logo: logo3, symbol: '✦', name: 'Punjab National Bank' },
        { logo: logo4, symbol: '✦', name: 'Whisper' },
        //{ logo: logo5, symbol: '◈', name: 'Brand Name 5' },
        //{ logo: logo6, symbol: '❁', name: 'Brand Name 6' },
        { logo: logo7, symbol: '✦', name: 'Gillette' },
        // { logo: logo8, symbol: '✿', name: 'Brand Name 8' }
    ];

    const titleRef = useRef(null);
    const gridRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        // Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (titleRef.current) observer.observe(titleRef.current);
        cardRefs.current.forEach(card => {
            if (card) observer.observe(card);
        });

        // 1.5-second auto-scroll to the brands section
        const scrollTimer = setTimeout(() => {
            if (gridRef.current) {
                // Scroll specifically to the logos grid with smooth behavior
                gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 1500);

        return () => {
            clearTimeout(scrollTimer);
            observer.disconnect();
        };
    }, []);

    return (
        <div
            className="sponsi-container"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Landing Section (Full Screen) */}
            <div className="sponsi-landing-section">
                <div
                    className="sponsi-title-wrapper fade-in-section"
                    ref={titleRef}
                >
                    <h1 className="sponsi-title">OUR SPONSORS</h1>
                    <div className="sponsi-decorative-underline">
                        <div className="sponsi-decorative-line left"></div>
                        <div className="sponsi-decorative-icon">
                            <svg width="44" height="16" viewBox="0 0 44 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 0L26 8L22 16L18 8L22 0Z" fill="#dfb873" />
                                <path d="M14 8C14 8 18 5 18 2C18 -1 12 -1 12 2C12 5 16 8 16 8" stroke="#dfb873" strokeWidth="1.2" />
                                <path d="M30 8C30 8 26 5 26 2C26 -1 32 -1 32 2C32 5 28 8 28 8" stroke="#dfb873" strokeWidth="1.2" />
                            </svg>
                        </div>
                        <div className="sponsi-decorative-line right"></div>
                    </div>
                </div>
            </div>

            {/* Cards Grid Section (Reveals Below on Scroll) */}
            <div className="sponsi-cards-section" ref={gridRef}>
                <div className="sponsi-logos-grid">
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className="sponsi-card fade-in-card"
                            ref={el => cardRefs.current[index] = el}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="sponsi-card-logo-container">
                                <img
                                    src={sponsor.logo}
                                    alt="Sponsor Logo"
                                    className="sponsi-logo"
                                />
                            </div>
                            <div className="sponsi-card-footer">
                                <span className="sponsi-card-symbol">{sponsor.symbol}</span>
                                <span className="sponsi-card-text">{sponsor.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
