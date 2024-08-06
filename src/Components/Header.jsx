import React, { useState } from "react";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); 
    };

    return (
        <>
            <header>
                <div className="logo-block" id="main">
                    {!menuOpen && (
                        <svg className="burger-menu" onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                        </svg>
                    )}
                    <img src="./img/logo.jpg" alt="Logo"/>
                </div>
                <div className={`header-items ${menuOpen ? 'open' : ''}`}>
                    <p onClick={() => scrollToSection('about')}>About</p>
                    <p onClick={() => scrollToSection('history')}>History</p>
                    <p onClick={() => scrollToSection('gallery')}>Gallery</p>
                    <p onClick={() => scrollToSection('program')}>Program</p>
                    <p onClick={() => scrollToSection('faqs')}>FAQs</p>
                    <p onClick={() => scrollToSection('team')}>Our Team</p>
                    <p onClick={() => scrollToSection('partners')}>Partners</p>
                    <p onClick={() => scrollToSection('contact')}>Contact</p>
                </div>
                <button className="join-us">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYRrNPjiZf-8XTzoSqu4p9fMHbggRoQuw4bie0eVwvsRPO4w/viewform" target="_blank" rel="noopener noreferrer">Join-us</a>
                </button>
            </header>
            {menuOpen && (
                <div className="mobile-menu">
                    <svg className="close-menu" style={{ position:'absolute', top:'32px', right:'30px'}} onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    <nav className="mobile-nav">
                        <p onClick={() => scrollToSection('about')}>About</p>
                        <p onClick={() => scrollToSection('history')}>History</p>
                        <p onClick={() => scrollToSection('program')}>Program</p>
                        <p onClick={() => scrollToSection('gallery')}>Gallery</p>
                        <p onClick={() => scrollToSection('faqs')}>FAQs</p>
                        <p onClick={() => scrollToSection('team')}>Our Team</p>
                        <p onClick={() => scrollToSection('partners')}>Partners</p>
                        <p onClick={() => scrollToSection('contact')}>Contact</p>
                    </nav>
                </div>
            )}
        </>
    );
};
