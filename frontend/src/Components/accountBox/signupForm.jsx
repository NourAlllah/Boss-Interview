import React, {useState, useContext } from "react";
import {useHistory} from 'react-router'
import axios from 'axios'
import Message from "../Message/Message"
import {
  BoldLink,
  BoxContainer,
 
  Input,
  MutedLink,

} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import "./style.css"

export function SignupForm() {
  const [firstName,setFirstName] = useState('')
  const [secondName,setSecondName] = useState('')

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [hasConfirmError,setConfirmError] = useState(false)
  const [hasError,setHasError] = useState(false)
  let history = useHistory()

  
  const { switchToSignin } = useContext(AccountContext);

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      if(confirmPassword === password){
        
        const { data } = await axios.post("/api/register/", { username:firstName+secondName,email, password })
        if (data) {
          history.push("/afterLogin")
          localStorage.setItem('username',JSON.stringify(firstName+secondName))
        }
      }else{
        setConfirmError(true)
      }

      } catch (e) {
       
        setHasError(true)
      }
    
  }

  return (
    <BoxContainer>
    <form onSubmit={submitHandler}>
      {hasError ? (
        <Message variant="danger">Invalid Email or Password!!</Message>
      ) : (
        ""
      )}
      {hasConfirmError ? (
        <Message variant="warning">Passwords are not match!!</Message>
      ) : (
        ""
      )}
      <Input
        type="text"
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Second Name"
        onChange={(e) => setSecondName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className="button-l" type="submit">
        Signup
      </button>
    </form>
    <Marginer direction="vertical" margin={10} />

    <Marginer direction="vertical" margin="1em" />
    <MutedLink href="#">
      Already have an account?
      <BoldLink href="#" onClick={switchToSignin}>
        Login
      </BoldLink>
    </MutedLink>
  </BoxContainer>
);
}
/* href='/UserHome' */