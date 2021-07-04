import React from 'react';



export const SideBarData =[
    {
        title : 'Home',
        path : '/',
        icon : <i className="fas fa-home"></i>,
        cName : 'nav-text',
        exact : true 
    },
    {
        title : 'About Us',
        path : '#aboutUs',
        icon : <i className="fas fa-user-friends"></i>,
        cName : 'nav-text' 

    },
    {
        title : 'Contact Us',
        path : '#footer',
        icon : <i className="fas fa-address-card"></i>,
        cName : 'nav-text' 

    },
    {
        title : 'Subscrube your Mail',
        path : '#footer',
        icon : <i className="fas fa-envelope-square"></i>,
        cName : 'nav-text' 
    }, 
    {
        title : 'How does it work?',
        path : '/how',
        icon : <i className="far fa-question-circle"></i>,
        cName : 'nav-text' 

    },
    {
        title : 'FAQS',
        path : '/faqs',
        icon : <i className="far fa-question-circle"></i>,
        cName : 'nav-text' 

    }
] 