import React, { useState } from 'react';

export const Fqa = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleHeight = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the purpose of the project?",
            answer: "One of the main goals of the Twinschools project is getting to know and understanding the culture of other countries."
        },
        {
            question: "What is the age of the participants?",
            answer: "Generally students of grades 9-12 grades."
        },
        {
            question: "What is the term of the project?",
            answer: "8 online-meetings and two extra meetings for teachers and students."
        },
        {
            question: "What is the working language?",
            answer: "English."
        },
        {
            question: "How will the online meeting of twin schools take place every week?",
            answer: "Each week a certain topic is determined for discussion. Students from both twin schools prepare material in any online format. Information is shared and discussed during online meetings."
        },
        {
            question: "What time will online meetings be scheduled during the week?",
            answer: "Our team will choose a convenient time for you, so that it does not negatively affect the main school learning process. A detailed discussion will take place after the twin schools are coordinated."
        },
        {
            question: "Should teachers be present at student meetings?",
            answer: "Yes. Note that the coordinator from the school is determined by the priority of a teacher with knowledge English language."
        }
    ];

    return(
        <>
            <h2 id='faqs' className="title-fqa">Frequently Asked Questions</h2>
            <div className="block-main">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className={`block-fqa ${expandedIndex === index ? 'expanded' : ''}`} 
                        onClick={() => toggleHeight(index)}
                    >
                        <div className="fqa-header">
                            <h3>{faq.question}</h3>
                            <img src="./img/fqa-button.png" className="fqa-button" alt="" />
                        </div>
                        {expandedIndex === index && <p>{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </>
    );
}
