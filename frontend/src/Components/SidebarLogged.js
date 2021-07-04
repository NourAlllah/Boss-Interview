import React from 'react';



export const SidebarLogged =[
    {
        title : 'My Profile',
        path : '/profile',
        icon : <i class="fas fa-user"></i>,
        cName : 'nav-text',
        exact : true 
    },
    {
        title : 'Book Interview',
        path : '/book',
        icon : <i class="fas fa-user-clock"></i>,
        cName : 'nav-text' 

    },
    {
        title : 'Dream Job',
        path : '/search',
        icon : <i class="fas fa-search"></i>,
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
    }, 
    {
        title : 'Contact Us',
        path : '#footer',
        icon : <i className="fas fa-address-card"></i>,
        cName : 'nav-text' 

    }
]