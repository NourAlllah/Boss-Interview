import axios from "axios"
import React, { useState, useEffect } from "react"
import {useHistory} from 'react-router'
import "./InterviewPage.css"
import Loader from "./Loader/Loader"

import Navbar from './Navbar/Navbar';
import { SidebarLogged } from './SidebarLogged';
import Footlog from './Containers/f-log';

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = "en-US"

function InterviewPage() {
  const [isListening, setIsListening] = useState(false)
  const [endInterview, setEndInterview] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])
  const [allData, setAllData] = useState("")
  const [feedback, setFeedback] = useState("")
  const [question, setQuestion] = useState("")
  const [i, setI] = useState(0)
  const usernameFromStorage = localStorage.getItem('username')
  const history = useHistory()
  
  
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/getQuestion")

      setAllData(data)
      setQuestion(data[i])
      
    }
    fetchData()
    handleListen()
  }, [isListening,i])

  

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log("continue..")
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log("Stopped Mic on Click")
      }
      
    }
    mic.onstart = () => {
      console.log("Mics on")
    }

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("")

      setNote(transcript)
      mic.onerror = (event) => {
        console.log(event.error)
      }
    }
  }
  const handleSaveNote = async () => {
    if (i < allData.length) {

      setI(i + 1)
      setQuestion(allData[i])
  
    } else {
      setQuestion('don')
    }
    setSavedNotes([...savedNotes, note])
    await axios.post(`/api/saveNotes/${question.id}`,{note,username:usernameFromStorage})
    setNote("")

    // send savedNotes to backend using axios
  }
  const endInterviewHandler =async (e)=>{
    e.preventDefault()
    // end interview
    setEndInterview(true)
    const {data} = await axios.get(`/api/getAnswers/${usernameFromStorage}`)
    setFeedback(data)

  }
  const viewFeedbackHandler = (e)=>{
    e.preventDefault()
    // view feedback
    history.push('/SendFeedback')

  }

  return (
    <>
      <Navbar screenName={'Log out'} nextNav={'/'} arr={ SidebarLogged }/>
      <h2>No matter what happens, use it as an experience to grow from. Best of luck!</h2>

      <div className='IV-container'>
        <div className='box'>
          {endInterview ? <h1>Thank you,Boss!</h1> :(<>
            {question === "" ? <Loader /> :question ===undefined?<h1>Done</h1>: <h3 key={i}>{question.question}</h3>}
            {isListening ? <span>🎙️</span> : <span>🛑</span>}
            <button
              className='interview-buttons'
              onClick={handleSaveNote}
              disabled={!note}
            >
              Save Answer
            </button>
            <button
              className='interview-buttons'
              onClick={() => setIsListening((prevState) => !prevState)}
            >
              Start/Stop
            </button>
            <p>{note}</p>
          </>)}
          
        </div>
        <div className='box'>
          <h3>Answers</h3>
     
          {savedNotes.map((n,i) => (
            <p key={i}>{n}</p>
          ))}
          <button className='interview-buttons' onClick={endInterviewHandler}> End Interview </button>
          
          

        </div>
        <br/>
          
      </div>
      <div className='box-2'>
            <h3>Feedback</h3>
          {feedback && <p>{JSON.parse(feedback)[0].fields.feedback_text}</p>}

        </div>
      <Footlog/>
    </>
  )
}
export default InterviewPage
/*

*/
