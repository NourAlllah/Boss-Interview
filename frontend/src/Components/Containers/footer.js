import React , { useState}from "react";
import Footer from "./../Footer/index";
import "./footer.css";
import axios from 'axios';



export function FooterContainer() {

    const [email,setEmail] = useState('')

    const submitHandler =async (e) =>{
        e.preventDefault()
    
    
        try{
    
            await axios.post('/api/subscribe/',{email})
            console.log('submited....',email)
        }catch(e){
            console.log(e)
        }
    
    }
    




  return (
    <Footer>
      <div>
      <p className="text-5">
        
        Handcrafted & curated material for every stage of career grooming
      </p>
      <p className="text-55"> & industry insights, delivered to your inbox.</p>

      
        <form onSubmit={submitHandler} className="subscribe-mail-form-footer">
          <input
            className="input-email-footer"
            type="email"
            placeholder="  Enter your Email"
            aria-required="true"
            aria-invalid="true"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="subscribe-but" variant="primary">
            Submit
          </button>
        </form>
      </div>
     
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Tittle> Services </Footer.Tittle>
            <Footer.Link href="#"> Marketing </Footer.Link>
            <Footer.Link href="#"> Consulting </Footer.Link>
            <Footer.Link href="#"> Developments </Footer.Link>
            <Footer.Link href="#"> Design </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Tittle> Contact Us </Footer.Tittle>
            <Footer.Link href="#"> U.S.A </Footer.Link>
            <Footer.Link href="#"> Egypt </Footer.Link>
            <Footer.Link href="#"> England </Footer.Link>
            <Footer.Link href="#"> Turkia </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Tittle> About Us </Footer.Tittle>
            <Footer.Link href="#"> Story </Footer.Link>
            <Footer.Link href="#"> Clients </Footer.Link>
            <Footer.Link href="#"> Targets </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Tittle> Social </Footer.Tittle>
            <Footer.Link href="#">
              <i className="fab fa-facebook-f"> </i>Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <i className="fab fa-instagram"> </i> Instgram
            </Footer.Link>
            <Footer.Link href="#">
              <i className="fab fa-twitter"></i> Twitter{" "}
            </Footer.Link>
            <Footer.Link href="#">
              {" "}
              <i className="fab fa-youtube"></i>Youtube{" "}
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
export default FooterContainer;
