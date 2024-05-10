import React, { useState } from 'react';

export const Fqa = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleHeight = () => {
        setExpanded(!expanded);
    };

    return(
        <>
            <h2 className="title-fqa">Frequently Asked Questions</h2>
            <div className="block-main">
                <div className="fqa">
                    <div className={`block-fqa ${expanded ? 'expanded' : ''}`} onClick={toggleHeight}>
                        <h3>What is the purpose of the project?</h3>
                        <img src="./img/fqa-button.png" className="fqa-button" alt="" />
                    </div>
                    {expanded && <p>This is the answer to the question.</p>}
                </div>
                <div className="block-fqa">
                    <h3>What is the age of the  participants?</h3>
                    <img src="./img/fqa-button.png" className="fqa-button" alt="" />
                </div>
                <div className="block-fqa">
                    <h3>What is the term of the project?</h3>
                    <img src="./img/fqa-button.png" className="fqa-button" alt="" />
                </div>
                <div className="block-fqa">
                    <h3>What is the working language?</h3>
                    <img src="./img/fqa-button.png" className="fqa-button" alt="" />
                </div>
                <div className="block-fqa">
                    <h3>How will the online meeting of twin schools  take place every week</h3>
                    <img src="./img/fqa-button.png" className="fqa-button" alt="" />
                </div>
                <div className="block-fqa">
                    <h3>What time will online meetings be scheduled during  the week?</h3>
                    <img src="./img/fqa-button.png" className="fqa-button" alt="" />
                </div>
                <div className="block-fqa">
                    <h3>Should teachers be present at student meetings?</h3>
                    <img src="./img/fqa-button.png" className="fqa-button" alt="" />
                </div>
            </div>
        </>
    );
}