import React from "react";

export const Header = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToHistory = () => {
        const aboutSection = document.getElementById('history');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToGallery = () => {
        const aboutSection = document.getElementById('gallery');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProgram = () => {
        const aboutSection = document.getElementById('program');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToFAQS = () => {
        const aboutSection = document.getElementById('faqs');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTeam = () => {
        const aboutSection = document.getElementById('team');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToPartners = () => {
        const aboutSection = document.getElementById('partners');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        const aboutSection = document.getElementById('contact');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    return(
        <>
        <header>
            <div className="logo-block" id="main">
                <img src="./img/logo.jpg" alt="" />
                <svg className="burger-menu"  xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
            </div>
            <div className="header-items">
                <p className="header-items-about" onClick={scrollToAbout}>About</p>
                <p className="header-items-history" onClick={scrollToHistory}>History</p>
                <p className="header-items-gallery"onClick={scrollToGallery}>Gallery</p>
                <p className="header-items-program" onClick={scrollToProgram}>Program</p>
                <p className="header-items-faqs" onClick={scrollToFAQS}>FAQs</p>
                <p className="header-items-team" onClick={scrollToTeam}>Our Team</p>
                <p className="header-items-partners" onClick={scrollToPartners}>Partners</p>
                <p className="header-items-contact" onClick={scrollToContact}>Contact</p>
            </div>
            <button className="join-us">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYRrNPjiZf-8XTzoSqu4p9fMHbggRoQuw4bie0eVwvsRPO4w/viewform" target="_blank" rel="noopener noreferrer">Join-us</a>
            </button>
        </header>
        </>
    );
}
