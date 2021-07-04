import React, { useState } from "react";
import {useHistory} from 'react-router'
import "./Rate.css";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import { FaStar } from "react-icons/fa";
import axios from 'axios'


const colors ={
    orange : "#FB9224",
    blue : "#2A1A5E ",
 }

function RateRun() {
  const [show, setShow] = useState(false);
  const stars= Array(5).fill(0); 
  const [currentValue, setCurrentValue]= React.useState(0);
  const [hoverValue, setHoverValue]= React.useState(undefined);
  const [review,setReview] = useState('')
  const history = useHistory()
  const usernameFromStorage = localStorage.getItem('username')? localStorage.getItem('username'):null

  const handleClick = value => {
      setCurrentValue(value)
  };
  const submitHandler =async (e) => {
      e.preventDefault() 
      if (usernameFromStorage){
        await axios.post('/api/rate/',{username:usernameFromStorage,rate:currentValue,review:review})
        history.push('/afterLogin')
      }
      

      

  };
  const handleMouseOver = value => {
      setHoverValue(value)

  }
  const handleMouseLeave = () => {
      setHoverValue(undefined)
  }

  return (
    <React.Fragment>
      <div className="rateCon"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Button onClick={() => setShow(true)}>Rate Us</Button>
      </div>
      <Modal show={show} onClose={() => setShow(false)}>
      <div style={styles.container}>  
        <div style={styles.stars}>
          <br></br>
          <br></br>
            {stars.map((_, index) => {
                return (
                    <FaStar
                        key={index}
                        size={24}
                        onAnimationEnd
                        style={{
                            marginRight: 10,
                            cursor: "pointer"
                        }}
                        color={(hoverValue || currentValue) > index ? colors.orange : colors.blue}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index +1)}
                        onMouseLeave={handleMouseLeave}
                    />    
                )
            }
            )}
        </div>
        <textarea
                 placeholder="what's your feedback?"
                 style={styles.textarea}
                 onChange={(e)=>setReview(e.target.value)}
                 />
                 <button className='submit-but-rate' variant="primary" type="submit" onClick={submitHandler}>
                        Submit
                    </button>
        </div>
      </Modal>
    </React.Fragment>
  );

  
}
const styles = {
  container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
  },
  textarea: {
     border: "3px solid #a9a9a9", 
     borderRadius: 5,
     width: 300,
     margin: "20px 0",
     height: "200px",
     minHight: 200,
     padding: 10
 },
 /*
  button: {
     margin: 30px,
     font-size: 18px,
     height: 65px,
     width: 250px,
     border-radius: 10px,
     border: none,
     box-shadow: 1px 1px 0px 2px rgba (0,0,0,0.3),
     background: rgb(141,217,252),
      cursor: pointer,
    },*/
 
 button: {
     margin: "10px",
     fontsize: "18px",
     border: "1px solid #a9a9a9",
     borderRadius: 10,
     height: "40px",
     width: 100,
     padding: 0,
     boxshadow: "1px 1px 0px 2px rgba (0,0,0,0.3)",
     backgroundcolor: "colors.orange", 
     //cursor: pointer,
 }
}

export default RateRun;
