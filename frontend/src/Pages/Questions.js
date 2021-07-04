import React , { useState } from 'react';
import './Questions.css';
import FAQ from "./FAQ";
import Navbar from './../Components/Navbar/Navbar';
import { SideBarData } from './../Components/SideBarData';
import { FooterContainer } from './../Components/Containers/footer';


function Questions() {
    const [faqs, setfaqs] = useState ([
      {
        question: "what is the aim of Boss-Interview?",
        answer: "it's aim providing you mock interviews until you are totally prepared to your real interview",
        open: false
      },
      {
        question: "Do i have to register first before taking the interview?",
        answer: "sure , yes you have to register to be able to attend your interviews",
        open: false
      },
      {
        question: "Are there any privileges we can get if we didn't register?",
        answer: "sure! , you can submit your email and get all tips and useful articles about interviewing and good habbits",
        open: false
      },
      {
        question: "How can i book an apointment for an interview?",
        answer: "you click on book interview button and you choose the date that suits you and available then click submit!",
        open: false
      },
      {
        question: "Do the interviews are free?",
        answer: "yes, totally free",
        open: false
      },
      {
        question: "How is the interview is conducted?",
        answer: "When the date of your interview is here you got a notification to enter it, questions will be displayed to you on a screen ,yu record your answers and after the interview is done you get your feedbacks.",
        open: false
      },
      {
        question: "Are the interviews for specific fields or for all fields?",
        answer: "For now the interviews are specified for Hr and English measurements and analysis, But soon we intend to contain all professions",
        open: false
      },
      {
        question: "Can i conduct more than one interview?",
        answer: "yes, sure as much as you want untill you all ready!",
        open: false
      },
      {
        question: "How to prepare for the interview?",
        answer: "First you should be calm enough you are here to practice everything! be calm you will be great Second, make sure you are in a quit place ,have your handfree and with good internet connection to make sure reording the iv ends successfully. Third, Nothing just go get them tiger!",
        open: false
      },
      {
        question: "What will happen if i didn't attend the interview on the date that i've booked?",
        answer: "You Will get an email to inform you that you missed your interview and you should book another date, we just hope for some comitement to help you and let space for others to be helped.",
        open: false
      },
      {
        question: "How does the evaluation of the interview happen?",
        answer: "The interview is divided into three question stages, upon your answers in each stage we form your feedback.",
        open: false
      }
    ]);

   const toggleFAQ = index => {
     setfaqs(faqs.map((faq,i)=>{
       if ( i=== index ) {
         faq.open = !faq.open
       } else {
         faq.open= false;
       }

       return faq;
     } ))
   }


    return (
      <>
      <Navbar screenName={'Log in'} nextNav={'/signupin'} arr={ SideBarData }/>
      <div className='all'>
        <div className='START-LINE'>
          <h3 >Frequently Asked Questions</h3>
        </div>
        <div className='faqs'>
           {faqs.map((faq, i) => (
             
              <FAQ faq={faq} index={i}  toggleFAQ={toggleFAQ} />
             
           ))}
        </div>
      </div>  
      <FooterContainer />
    </>
    )
}

export default Questions;
