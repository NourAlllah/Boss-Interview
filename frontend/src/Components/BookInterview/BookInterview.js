import React from "react"
import "date-fns"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import "./book.css"
import "./Animation.css"
import Typewriter from "typewriter-effect"
import { createMuiTheme } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import Navbar from './../Navbar/Navbar';
import { SidebarLogged } from './../SidebarLogged';
import { FooterContainer } from './../Containers/footer';
import axios from 'axios'


const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#FB9224",
        selectedDateColor: "#FB9224",
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: "white",
        color: "#FB9224",
      },
    },
  },
})

function BookInterview() {
  const [selectedDate, setSelectedDate] = React.useState()
  const [selectedTime, setSelectedTime] = React.useState()
  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  const handleTimeChange = (date) => {
    setSelectedTime(date)
  }

  const clickHandler =async (e) => {
    e.preventDefault()
    const usernameFromStorage = localStorage.getItem('username')
   
    await axios.get(`/api/getUserId/${usernameFromStorage}`)
  
    var strDate = selectedDate.toString().split(" ")
    var strTime = selectedTime.toString().split(" ")
    var months = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12,
    }
    let month = strDate[1]
    let monthNumber = months[month]
    let convertedDate = strDate[3] + "-" + monthNumber + "-" + strDate[2]

    let finalDateFormat = convertedDate + " " + strTime[4]
    

    try{

      await axios.post(`/api/calendar/`,{owner:usernameFromStorage,start:finalDateFormat})
    }catch (e) {
      console.log(e)
    }

  }

  /*book Interview
    const [selectedDate, setSelectedDate] = React.useState(
        new Date("2021-05-25T12:00:00")
      )
      const handleDateChange = (date) => {
        setSelectedDate(date)
      }*/
  /*<img src="BookInterview.jpg" alt="BookInterview.jpg"/>*/
  return (
    <>
      <Navbar screenName={'Log out'} nextNav={'/'} arr={ SidebarLogged }/>
    <div style={styles.container} className='book-Con'>
      <br></br>
      <br></br>
      <div className='Animation'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello Nancy!")
              .callFunction(() => {
                alert("Don't miss your appointment")
              })
              .pauseFor(1000)
              .deleteAll()
              .typeString("Book Your Interview Now!!")
              .start()
          }}
        />
      </div>
      <br></br>
      <br></br>
      <div className='Book'>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ThemeProvider theme={materialTheme}>
            <Grid container justify='space-around'>
              <KeyboardDatePicker
                disableToolbar
                style={{ width: "100%", marginTop: "15px" }}
                variant='dialog'
                format='MM/dd/yyy'
                minDate={new Date()}
                margin='normal'
                id='date-picker'
                label='Select a date'
                value={selectedDate}
                onChange={handleDateChange}
              />
            </Grid>
            <Grid container justify='space-around'>
              <KeyboardTimePicker
                style={{ width: "100%", marginTop: "15px" }}
                margin='normal'
                id='time-picker'
                label='Select a time'
                value={selectedTime}
                onChange={handleTimeChange}
              />
            </Grid>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
        <button
          onClick={clickHandler}
          className='book-but'
          variant='primary'
          type='button'
        >
          Book
        </button>
      </div>
    </div>
    <FooterContainer />
        </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}

export default BookInterview
