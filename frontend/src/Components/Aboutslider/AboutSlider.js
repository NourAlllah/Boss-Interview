import { Carousel } from "react-bootstrap";
import React from "react";
import "./AboutSlider.css";
// import Zoom from "react-reveal/Zoom";

const AboutSslider = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="first" src="about2.png" alt="First slide" />
          <Carousel.Caption>
            <h1 className="headlines">Boss Interview team</h1>
            <p className="paragraph">
              Our team craft the best code, design, reserches and discussions.
              For our clients to practice and experience many interviesws in aim
              to be BOSS in his real interview.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="second" src="about8.png" alt="Second slide" />

          <Carousel.Caption>
            <h1 className="headlines">Our Mission</h1>
            <p className="paragraph">
           
              Provide our clients the confidence and tips needed to break ice of
              his real life interviews.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="third" src="about3.png" alt="Third slide" />

          <Carousel.Caption>
            <h1 className="headlines">Your Role</h1>
            <p className="paragraph">
              
              Your role is as big as us, you need disipline, some effort,
              passionto to learn more and more and to improve your weaknesses.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <Zoom>
                <Carousel>
                        <Carousel.Item interval={1500} fade='true' pause='false '>
                            <img
                            className="first"
                            src="about2.png"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h4 className='headlines'>Boss Interview team</h4>
                            <p className='paragraph'>Our team craft the best code, design, reserches and discussions. 
                            For our clients to practice and experience many interviesws in aim to be BOSS in his real
                            interview. </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item  interval={1500} fade='true' pause='false '>
                            <img
                            className="second"
                            src="about8.png"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h4 className='headlines'>Our Mission</h4>
                            <p className='paragraph'> Provide our clients the confidence and tips needed to break
                            ice of his real life interviews.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item  interval={1500} fade='true' pause='false ' >
                            <img
                            className="third"
                            src="about3.png"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h4 className='headlines'>Your Role</h4>
                            <p className='paragraph'> Your role is as big as us, you need disipline,
                            some effort, passionto to learn more and more and to improve your weaknesses.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
            </Zoom> */}
    </>
  );
};

export default AboutSslider;
