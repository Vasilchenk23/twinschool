import React, { useState } from 'react';
import axios from 'axios';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        question: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://back-twinschool-production.up.railway.app/api/send-email', formData);
            alert('Електронний лист успішно відправлено! 😊');
        } catch (error) {
            alert('Не вдалося відправити лист. Будь ласка, спробуйте знову. 😞');
        }
    };

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('main');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
        <div id="contact" className="block-contact">
            <h2 className="contact">Contact</h2>
            <div className="twinschool-form">
                <div className="info-form">
                    <div className="div2">
                        <h2 className="title-contact">
                        <span className="orange">T</span>
                        <span className="orange">w</span>
                        <span className="green">i</span>
                        <span className="green">n</span>
                        <span className="red">s</span>
                        <span className="red">c</span>
                        <span className="blue">h</span>
                        <span className="blue">o</span>
                        <span className="blue">o</span>
                        <span className="orange">l</span>
                        <span className="orange">s</span>
                        </h2>
                        <p>Make Peace one Friendship at a Time</p>
                        <br />
                    </div>
                    <div className="div">
                        <p>VŠĮ Twinschools</p>
                        <p>tel. +370 673 756 25</p>
                        <p>Company code 306362824,<br />J. Savickio st. 4-7, <br />LT-01108 <br />Vilnius, Lithuania</p>
                        <br />
                    </div>
                       <div className="email-block">
                        <p>Email Us: </p>
                            <a style={{cursor:'pointer'}} href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                                <p className="email-company">ukraine@twinschools.org</p>
                            </a>
                            <h4>Follow Us On:</h4>
                                <a style={{cursor:'pointer'}} href="https://www.facebook.com/twinschools/" target="_blank" rel="noopener noreferrer">
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.16431" y="0.923828" width="31.2656" height="31.2656" rx="15.6328" stroke="#1C3664" strokeWidth="0.734375"/>
                                    <path d="M20.6259 17.5318L21.0827 14.5244H18.2256V12.5737C18.2256 11.7507 18.624 10.9481 19.9036 10.9481H21.2034V8.38777C21.2034 8.38777 20.0243 8.18457 18.8976 8.18457C16.5436 8.18457 15.0065 9.62526 15.0065 12.2323V14.5244H12.3909V17.5318H15.0065V24.8023C15.5316 24.8856 16.0688 24.9283 16.616 24.9283C17.1633 24.9283 17.7005 24.8856 18.2256 24.8023V17.5318H20.6259Z" fill="#1C3664"/>
                                </svg>
                                </a>
                            <br />
                            <br />
                            <div className="plane">
                                <img src="./img/arrow.png" alt="" />
                            </div>
                       </div>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                            <p className='page-contact-question'>ANY QUESTIONS LEFT? <br />WRITE US!</p>
                            <div className="user-info">
                                <div className="block-first-name">
                                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_965_1598)">
                                        <path d="M14.2617 14.0212C16.8241 14.0212 18.8995 11.9458 18.8995 9.3834C18.8995 6.82102 16.8241 4.74561 14.2617 4.74561C11.6993 4.74561 9.62388 6.82102 9.62388 9.3834C9.62388 11.9458 11.6993 14.0212 14.2617 14.0212ZM14.2617 16.3401C11.1659 16.3401 4.98608 17.8938 4.98608 20.9779V23.2968H23.5373V20.9779C23.5373 17.8938 17.3574 16.3401 14.2617 16.3401Z" fill="#1C3664"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_965_1598">
                                        <rect width="27.8268" height="27.8268" fill="white" transform="translate(0.348389 0.10791)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <div className="input-container">
                                        <input 
                                            placeholder=" " 
                                            type="text" 
                                            className="first-name" 
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            autoComplete="off"
                                        />
                                        <label className="placeholder">First Name</label>
                                    </div>
                                </div>
                                <div className="block-last-name">
                                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_965_1598)">
                                        <path d="M14.2617 14.0212C16.8241 14.0212 18.8995 11.9458 18.8995 9.3834C18.8995 6.82102 16.8241 4.74561 14.2617 4.74561C11.6993 4.74561 9.62388 6.82102 9.62388 9.3834C9.62388 11.9458 11.6993 14.0212 14.2617 14.0212ZM14.2617 16.3401C11.1659 16.3401 4.98608 17.8938 4.98608 20.9779V23.2968H23.5373V20.9779C23.5373 17.8938 17.3574 16.3401 14.2617 16.3401Z" fill="#1C3664"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_965_1598">
                                        <rect width="27.8268" height="27.8268" fill="white" transform="translate(0.348389 0.10791)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <div className="input-container">
                                        <input 
                                            placeholder=" " 
                                            type="text"  
                                            className="surname"
                                            name='surname'
                                            value={formData.surname}
                                            onChange={handleChange}
                                            required
                                            autComplete="off"
                                        />
                                        <label className="placeholder">Last Name</label>
                                    </div>
                                </div>
                            </div>
                            <div className="block-email">
                                <div className="block-email-info">
                                    <svg width="29" height="29" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.5373 0.13916H2.98613C1.71074 0.13916 0.678831 1.18266 0.678831 2.45806L0.667236 16.3714C0.667236 17.6468 1.71074 18.6903 2.98613 18.6903H21.5373C22.8127 18.6903 23.8562 17.6468 23.8562 16.3714V2.45806C23.8562 1.18266 22.8127 0.13916 21.5373 0.13916ZM21.5373 4.77696L12.2617 10.5742L2.98613 4.77696V2.45806L12.2617 8.2553L21.5373 2.45806V4.77696Z" fill="#1C3664"/>
                                    </svg>
                                    <div className="input-container">
                                        <input 
                                            type="email" 
                                            className="email"  
                                            placeholder=" "
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            autoComplete="off"
                                        />
                                        <label className="placeholder">Email</label>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <textarea 
                                placeholder="Describe the question"
                                cols="30" 
                                rows="10" 
                                className="describe"
                                name="question"
                                autoComplete="off"
                                value={formData.question}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <br />
                            <div className="block-submit">
                                <button type="submit" className="submit" onClick={handleSubmit}>Submit</button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="footer-logo">
            <img onClick={scrollToAbout} className='logo-footer' src="./img/logo.jpg" alt="" />
            <p>© 2024. All Rights Reserved</p>
        </div>
        </>
    );
}