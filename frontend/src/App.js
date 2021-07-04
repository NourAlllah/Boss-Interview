import React from "react"
import "./App.css"
import "./Components/fonawesome"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"

/* PAGES */
import Profile from "./Pages/Employees/Profile"
import Home from "./Components/Home"
import BookInterview from "./Components/BookInterview/BookInterview"
import HowDoesItWork from "./Pages/Howdoesitworks"
import Questions from "./Pages/Questions"
// import NotFound from "./Components/NotFound"
import signUpIn from "./Components/signUpIn"
import InterviewPage from "./Components/InterviewPage"
import RateRun from "./Components/RateUs2/RateRun"
import afterLogin from "./Components/afterLoginHome/afterLogin"
import SearchPage from "./Components/SearchPage/SearchPage"




function App() {
  return (
    <>
      <Router>
       
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/how' component={HowDoesItWork} />
          <Route path='/faqs' component={Questions} />
          
          <Route path='/afterLogin' component={afterLogin} />
          <Route path='/search' component={SearchPage} />
          <Route path='/book' component={BookInterview} />
          <Route path='/InterviewNow' component={InterviewPage} />
          <Route path='/rate' component={RateRun} />
          {/* -------------------------------------- */}
          <Route path='/profile' component={Profile} />

          {/* ------------------------------------------ */}

          <Route path='/signupin' component={signUpIn} />
          <Redirect to='/404' />
        </Switch>

      </Router>
    </>
  )
}
export default App

/*
import { AccountBox } from './Components/accountBox/index';
import  styled from 'styled-components';
import NotFound from './Components/NotFound';
import { AccountContext } from './Components/accountBox/accountContext';
import Home from './Pages/Home';
import { SignupForm } from './Components/accountBox/signupForm';
import Search from './Components/search';
import Search from './Components/Search';
import jobSearch from './Components/jobSearch/jobSearch';
import searchBar from './Components/searchBar';
import Employees from './Pages/Employees/Employees';

          <AppContainer>
             <AccountBox />
           </AppContainer>
 const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
*/
