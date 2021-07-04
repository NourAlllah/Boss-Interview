import React, { useState, useContext } from "react"
import {
  BoldLink,
  BoxContainer,
  // FormContainer,
  Input,
  MutedLink,
  // SubmitButton,
} from "./common"
import { Marginer } from "../marginer"
import axios from "axios"
import Message from "../Message/Message"
// import {Link} from 'react-router-dom'
import { AccountContext } from "./accountContext"
import { useHistory } from "react-router"
import "./style.css"

export function LoginForm() {
  const [username, setusername] = useState("")
  const [password, setPassword] = useState("")
  const [hasError, setHasError] = useState(false)
  let history = useHistory()

  const { switchToSignup } = useContext(AccountContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("/api/login/", { username, password })
      if (data) {
        history.push("/afterLogin")
        localStorage.setItem('username',JSON.stringify(username))
      }
    } catch (e) {
      setHasError(true)
    }
  }

  return (
    <BoxContainer>
      <form onSubmit={submitHandler}>
        {hasError ? (
          <Message variant='danger'>Invalid Email or Password!!</Message>
        ) : (
          ""
        )}
        <Input
          type='username'
          placeholder='username'
          onChange={(e) => setusername(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button-l" type='submit'>Login</button>
      </form>
      <Marginer direction='vertical' margin={10} />
      <MutedLink href='#' className="forget-pass">Forget your password?</MutedLink>
      <Marginer direction='vertical' margin='1.6em' />

      <Marginer direction='vertical' margin='1em' />
      <MutedLink href='#'>
        Don't have an account?{" "}
        <BoldLink href='#' onClick={switchToSignup}>
          Signup
        </BoldLink>
        {/* <Link to='/signup'>Signup</Link> */}
      </MutedLink>
    </BoxContainer>
  )
}
