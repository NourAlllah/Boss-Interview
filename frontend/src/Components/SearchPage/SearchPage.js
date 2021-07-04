import React,{useState} from "react";
import { MDBCol } from "mdbreact";
import { MDBBtn } from 'mdb-react-ui-kit';
import './SearchPage.css';
import axios from "axios";
import Loader from '../Loader/Loader'
import { FooterContainer } from './../Containers/footer';
import Navbar from './../Navbar/Navbar';
import { SidebarLogged } from './../SidebarLogged';


const SearchPage = () => {
  const [dreamJob,setDreamJob] = useState('')
  const [data,setData] = useState('')
  // const [hasError,setHasError] = useState(false)
  const [loading ,setLoading] = useState(false)

  const submitHandler = async (e) =>{
    e.preventDefault()
    setLoading(true)
    try {
      const {data} = await axios.get('/api/dream_job')
      if(data){
        setLoading(false)
        setData(data)
      }
    } catch (e) {
      // setHasError(true)
    }

  }

  return (
    <>
     <Navbar screenName={'Log out'} nextNav={'/'} arr={ SidebarLogged }/>
  <header>
   <div className='p-5 text-center bg-image' style={{ backgroundImage: "url('https://i.ibb.co/YyjP55T/198313736-2902650380010203-7073704255042241380-n.jpg')", height: 650 }} >
 
   <div className='text-white'>
   <h2 className='text'> Follow your passion. Its your dream job, Boss!  </h2>
   </div>
  <form onSubmit={submitHandler}>
  <MDBCol md="4">
      <input className="form-control" type="text" onChange={(e)=>setDreamJob(e.target.value)} placeholder="Write your dream job..ex. Data Engineer" aria-label="Search" />
  </MDBCol>
   <MDBBtn pill color= ' rgba(42, 26, 94, 0.8) ' type="submit" className='btnn-5' >  Enter </MDBBtn> 
  </form>

  {data ? (
    <div>
      {data.map(x=>{
        if(x.job_title === dreamJob){
          return <>{loading ? <Loader/>:<>
            <h2>{x.job_title}</h2>
            <p>{x.skills_text}</p>
            </>}</>
        }
        return ''
      })}
    </div>
  ):''}
    </div>

    <FooterContainer />

  </header>
  </>
  );
}

export default SearchPage;