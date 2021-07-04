import React, { useState } from 'react';
import './Howdoesitworks.css';
import Navbar from './../Components/Navbar/Navbar';
import { SideBarData } from './../Components/SideBarData';
import { FooterContainer } from './../Components/Containers/footer';

function Howdoesitworks() {

    const [registerVisible, setRegisterVisible] = useState(true);
    const [editProfileVisible, setEditProfileVisible] = useState(false);
    const [bookIvVisible, setBookIvVisible] = useState(false);
    const [doInvVisible, setDoInvVisible] = useState(false);
    const [sendFeedbackVisible, setSendFeedbackVisible] = useState(false);

     return (
         <>
          <Navbar screenName={'Log in'} nextNav={'/signupin'} arr={ SideBarData }/>
        <div className='section-howitworks'>
            <div className="container">
                    <input type='radio' className='register'  id=''  name='flash' checked={registerVisible}  />
                    <input type='radio'  className='edit-profile'   id=''  name='flash' checked={editProfileVisible}  />
                    <input type='radio'  className='book-interview'     id=''  name='flash' checked={bookIvVisible} />
                    <input type='radio'   className='do-the-interview'  id=''  name='flash'  checked={doInvVisible}  />
                    <input type='radio' className='send-feedback'   id=''  name='flash' checked={sendFeedbackVisible} />
                
                <div className='head'>
                    <ul className='Nav'>
                        <li className='st st1 ' onClick={()=> setRegisterVisible(prev => !prev)}>
                            <h2 className='inner'> Register </h2>
                        </li>
                        <li className='st st2'  onClick={()=> setEditProfileVisible(prev => !prev)}>
                            <h2 className='inner'> Update Your Profile </h2>
                        </li>
                        <li className='st st3' onClick={()=> setBookIvVisible(prev => !prev)}>
                            <h2 className='inner' > Book Your Interview </h2>
                        </li>
                        <li className='st st4' onClick={()=> setDoInvVisible(prev => !prev)}>
                            <h2 className='inner'> Take The Interview </h2>
                        </li>
                        <li className='st st5' onClick={()=> setSendFeedbackVisible(prev => !prev)}>
                            <h2 className='inner'> Send Your Feedback</h2>
                        </li>

                    </ul>
                    <div className='line'>
                        <span></span>
                    </div>
                    <div className='content'>
                        
                            <section className='register-section'>
                                <span>
                                    <i className="fas fa-user-circle"></i>
                                </span>
                                <h1> Registration  </h1>
                                <p>
                                    First thing you should have an account on BOOK INTERVIEW so you could be one of our Bossees!
                                </p>
                            </section>
                    
                            <section className='edit-profile-section'>
                                <span>
                                    <i className="fas fa-address-card"></i>
                                </span>
                                <h1> Edite Profile </h1>
                                <p>
                                     When you register you should go and complete your informations in your profile, so this could help you connect with people with same interests and will help us in defining the questions suits you. 
                                </p>
                            </section>
                        <section className='book-interview-section'>
                            <span>
                                 <i className="far fa-clock"></i>
                            </span>
                            <h1> book your interview  </h1>
                            <p>
                                To be able to have your interview you slould book your suitable time and also available time to have it, and you should be very disciplin in your schedule. and open your iterview on Time! 
                            </p>
                        </section>
                        <section className='do-the-interview-section'>
                            <span>
                                <i className="fas fa-people-arrows"></i>
                            </span>
                            <h1> Have your Interview  </h1>
                            <p>
                                it's time to have your interview, Just relax and be your self, Remember you are here only to practice yourself! 
                            </p>
                        </section>
                        <section className='send-feedback-section'>
                            <span>
                                <i className="fa fa-edit"></i>
                            </span>
                            <h1> send your feedback about the iv </h1>
                            <p>
                               We are sure you did great! We will be pleased if you rate us , the questions and the whole interview. and send us your feedback about the whole process.  
                            </p>
                        </section>
                    </div>


                </div>
                
            </div>
        </div>
        <FooterContainer />
         </>
     )
 }
 
export default Howdoesitworks;
/* <div className='progresbar-tittle'>
                    <h3> How does it works? </h3>
                </div>
                
                
                
                
                
                
                

                
                
                
                
                
                
                
                
                
                */