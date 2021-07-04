 import React from 'react'
 import { AccountBox } from './accountBox/index';
 import  styled from 'styled-components';
 import Navbar from './Navbar/Navbar';
 import { SideBarData } from './SideBarData';
 import { FooterContainer } from './Containers/footer';

 const AppContainer = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

 function signUpIn() {
     return (
        <>    
           <Navbar screenName={'Log in'} nextNav={'/signupin'} arr={ SideBarData }/>
           <br/>
           <br/>
           <br/>
            <AppContainer>
               <AccountBox />
            </AppContainer>
           <br/>
                 <FooterContainer />
          </>
     )
 }
 
 export default signUpIn;
 