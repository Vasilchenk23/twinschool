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
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
    return(
        <>
        <div id="contact" className="block-contact">
            <h2 className="contact">Contact</h2>
            <div className="twinschool-form">
                <div className="info-form">
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
                    <p>VŠĮ Twinschools</p>
                    <p>tel. +370 673 756 25</p>
                    <p>Company code 306362824,<br />J. Savickio st. 4-7, <br />LT-01108 <br />Vilnius, Lithuania</p>
                    <br />
                    <p>Email Us: </p>
                    <p className="email-company">ukraine@twinschools.org</p>
                    <h4>Follow Us On:</h4>
                        <a href="https://www.facebook.com/twinschools/" target="_blank" rel="noopener noreferrer">
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.16431" y="0.76709" width="31.2656" height="31.2656" rx="15.6328" stroke="white" stroke-width="0.734375"/>
                                <path d="M20.6259 17.3751L21.0827 14.3677H18.2256V12.417C18.2256 11.594 18.624 10.7914 19.9036 10.7914H21.2034V8.23103C21.2034 8.23103 20.0243 8.02783 18.8976 8.02783C16.5436 8.02783 15.0065 9.46853 15.0065 12.0756V14.3677H12.3909V17.3751H15.0065V24.6456C15.5316 24.7289 16.0688 24.7716 16.616 24.7716C17.1633 24.7716 17.7005 24.7289 18.2256 24.6456V17.3751H20.6259Z" fill="white"/>
                            </svg>
                        </a>
                    <br />
                    <br />
                    <div className="plane">
                        <img src="./img/arrow.png" alt="" />
                    </div>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                            <p></p>
                            <div className="user-info">
                                <div className="block-first-name">
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_813_99)">
                                        <path d="M14.2617 14.8645C16.8241 14.8645 18.8995 12.789 18.8995 10.2267C18.8995 7.66428 16.8241 5.58887 14.2617 5.58887C11.6993 5.58887 9.62388 7.66428 9.62388 10.2267C9.62388 12.789 11.6993 14.8645 14.2617 14.8645ZM14.2617 17.1834C11.1659 17.1834 4.98608 18.737 4.98608 21.8212V24.1401H23.5373V21.8212C23.5373 18.737 17.3574 17.1834 14.2617 17.1834Z" fill="#FFA800"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_813_99">
                                        <rect width="27.8268" height="27.8268" fill="white" transform="translate(0.348267 0.951172)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <input 
                                        placeholder="First Name" 
                                        type="text" 
                                        className="first-name" 
                                        autoComplete="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="block-last-name">
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_813_99)">
                                        <path d="M14.2617 14.8645C16.8241 14.8645 18.8995 12.789 18.8995 10.2267C18.8995 7.66428 16.8241 5.58887 14.2617 5.58887C11.6993 5.58887 9.62388 7.66428 9.62388 10.2267C9.62388 12.789 11.6993 14.8645 14.2617 14.8645ZM14.2617 17.1834C11.1659 17.1834 4.98608 18.737 4.98608 21.8212V24.1401H23.5373V21.8212C23.5373 18.737 17.3574 17.1834 14.2617 17.1834Z" fill="#FFA800"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_813_99">
                                        <rect width="27.8268" height="27.8268" fill="white" transform="translate(0.348267 0.951172)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <input 
                                        placeholder="Last Name" 
                                        type="text"  
                                        className="surname"
                                        autoComplete="surname"
                                        value={formData.surname || ''}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="block-email">
                                <div className="block-email-info">
                                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.5373 0.982422H2.98613C1.71074 0.982422 0.678831 2.02593 0.678831 3.30132L0.667236 17.2147C0.667236 18.4901 1.71074 19.5336 2.98613 19.5336H21.5373C22.8127 19.5336 23.8562 18.4901 23.8562 17.2147V3.30132C23.8562 2.02593 22.8127 0.982422 21.5373 0.982422ZM21.5373 5.62022L12.2617 11.4175L2.98613 5.62022V3.30132L12.2617 9.09857L21.5373 3.30132V5.62022Z" fill="#FFA800"/>
                                </svg>
                                <input 
                                    type="email" 
                                    className="email"  
                                    placeholder="Email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                </div>
                            </div>
                            <br />
                            <textarea 
                                placeholder="Describe the question"
                                cols="30" 
                                rows="10" 
                                className="describe"
                                name="question"
                                autoComplete="question"
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
            <img src="./img/logo.jpg" alt="" />
            <p>© 2024. All Rights Reserved</p>
        </div>
        </>
    );
}