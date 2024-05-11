import React, { useState } from 'react';

export const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? 5 : prevIndex - 1));
    };

    return (
        <>
            <div className="block-gallery">
                <h2>Pictures from meetings</h2>
                <p>The process of holding meetings</p>
                <div className="slider">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className={`slide ${index === 1 ? 'active' : ''}`}>
                            <img src={`./img/gallery/slide${(activeIndex + index) % 6}.png`} alt="" />
                        </div>
                    ))}
                </div>
                <div className="buttons">
                <svg onClick={nextSlide} width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_758_1068)">
                            <path d="M44.5 24C44.5 12.96 35.54 4 24.5 4C13.46 4 4.5 12.96 4.5 24C4.5 35.04 13.46 44 24.5 44C35.54 44 44.5 35.04 44.5 24ZM20.5 24L28.5 16L28.5 32L20.5 24Z" fill="#EFF0F4"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_758_1068">
                                <rect width="48" height="48" fill="white" transform="matrix(0 1 -1 0 48.5 0)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg onClick={prevSlide} width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_758_1065)">
                            <path d="M4.5 24C4.5 35.04 13.46 44 24.5 44C35.54 44 44.5 35.04 44.5 24C44.5 12.96 35.54 4 24.5 4C13.46 4 4.5 12.96 4.5 24ZM28.5 24L20.5 32V16L28.5 24Z" fill="#EFF0F4"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_758_1065">
                                <rect width="48" height="48" fill="white" transform="matrix(0 -1 1 0 0.5 48)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </>
    );
};
