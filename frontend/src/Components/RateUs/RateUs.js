import React  from 'react'; 
import { FaStar } from "react-icons/fa";
import './RateUs.css';
//import './RateUs.css';

const colors ={
    orange : "#FB9224",
    blue : "#2A1A5E ",
 }


 function RateUs(){
    const stars= Array(5).fill(0); 
    const [currentValue, setCurrentValue]= React.useState(0);
    const [hoverValue, setHoverValue]= React.useState(undefined);

    const handleClick = value => {
        setCurrentValue(value)
    };
    const handleMouseOver = value => {
        setHoverValue(value)
    }
    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    return (
        <div style={styles.container}>
        <h3 className='rateUs-text'>Rate Us</h3>
        <div style={styles.stars}>
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
                 />
                 <button className='submit-but-rate' variant="primary" type="submit">
                        Submit
                    </button>
      </div>
    );
 };

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
 export default RateUs;
 