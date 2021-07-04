import React from 'react';
import { MDBSpinner , MDBBtn } from 'mdb-react-ui-kit';
import './afterLogin.css';
import Navbar from '../Navbar/Navbar';
import { SidebarLogged } from './../SidebarLogged';
import {Link } from 'react-router-dom';
import { FooterContainer } from './../Containers/footer';


  export default function App() {
    return (
      <header>
          <Navbar screenName={'Log out'} nextNav={'/'} arr={ SidebarLogged }/>
    <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://i.ibb.co/4tFj3Zp/https-specials-images-forbesimg-com-imageserve-5ea3143b83824f0007109171-0x0.jpg')", height: 850 }}
      >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
              <h1 className='mb-3'> Welcome Boss! </h1>
          <h3 className='mb-4'>   Good impression count. Awkwardness can occur. Outcomes are unpredictable. </h3> 
          <MDBBtn pill color= ' rgba(251, 146, 36, 0.8) '  type="submit" className='btn-l' >
          <MDBSpinner grow size='sm'>  <span className='visually-hidden'>Loading...</span> </MDBSpinner>
          <Link to='/InterviewNow' > Start Your Interview </Link>  </MDBBtn> 
        
         <MDBBtn pill color= ' rgba(251, 146, 36, 0.8) ' type="submit"  className='btn-l' > 
           <MDBSpinner grow size='sm'>  <span className='visually-hidden'>Loading...</span>   </MDBSpinner> 
          <Link to='/book' >    Book Your Interview </Link>  </MDBBtn> 
              </div>
            </div>
          </div>
        </div>

        <FooterContainer />

        
      </header>
    );
  }