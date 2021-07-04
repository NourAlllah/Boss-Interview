import React, { useState } from "react"

import Avatar from "react-avatar"
import { Link } from "react-router-dom"

function Profile() {
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)

  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "mariam")
    setLoading(true)
    const res = await fetch(
      "		https://api.cloudinary.com/v1_1/mariam3122017/image/upload",
      {
        method: "POST",
        body: data,
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  }

  return (
    <>
      <div className='container emp-profile'>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <div className='circular-reveal'>
            <Avatar
              googleId='118096717852922241760'
              color='#fd9a34'
              round={true}
              src={image}
              name='Hadeer Mohameed'
              size='200'
            >
              <div className='circular-reveal__content'>
                <img src={image} alt='profile' />
              </div>
            </Avatar>
          </div>
        )}



        <form method=''>
        <input
          type='file'
          name='file'
          placeholder='Upload an image'
          onChange={uploadImage}
        />
        <br />
          <div className='row'>
            <div className='col-md-4'>
              <br></br>

              <ul className='nav' role='tablist'>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    id='home-tab'
                    data-toggle='tab'
                    href='#home'
                    role='tab'
                  >
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    id='profile-tab'
                    data-toggle='tab'
                    href='#profile'
                    role='tab'
                  >
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='row'>
            {/* left side url*/}
            <div className='col-md-4'>
              <div className='profile-work'>
                <br></br>
                <p> WORK LINK</p>

                <a href='https://github.com/Mariam3122017' target='_mariam'>
                  GitHub
                </a>
                <br />
                <a
                  href='https://www.linkedin.com/in/mariam-mostafa-a01649178/'
                  target='_mariam'
                >
                  Linkedin
                </a>
                <br />
                <a
                  href='https://www.facebook.com/profile.php?id=100007072230777'
                  target='_mariam'
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* right side data toggle "ABOUT TAB*/}
            <div className='col-md-8 pl-5 about-info' href='#home'>
              <div className='tab-content home-tab' id='myTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='home'
                  role='tabpanel'
                  aria-labelledby='home-tab'
                >
                  <div className='row'>
                    <div className='col-md-6'>
                      <label> FullName </label>
                    </div>
                    <div className='col-md-6'>
                      <p> Hadeer Mohameed </p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label> Email </label>
                    </div>

                    <div className='col-md-6'>
                      <p> mariammostafakhalafali@gmail.com </p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label> Phone </label>
                    </div>

                    <div className='col-md-6'>
                      <p> 01112222333 </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* right side data toggle "TIMELINE TAB*/}
              <div className='col-md-8 pl-5 timeline-info' href='#profile'>
                <div className='tab-content profile-tab' id='myTabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='profile'
                    role='tabpanel'
                    aria-labelledby='profile-tab'
                  >
                    <div className='row'>
                      <div className='col-md-6'>
                        <label> Experience </label>
                      </div>

                      <div className='col-md-6'>
                        <p> Beginner </p>
                      </div>
                    </div>

                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label> Total Projects </label>
                      </div>

                      <div className='col-md-6'>
                        <p> 20 </p>
                      </div>
                    </div>

                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label> English Level </label>
                      </div>

                      <div className='col-md-6'>
                        <p> B2 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <button className='edit-but'>
        <Link to='/editprofile' className='edit-links'>
          Edit Profile
        </Link>
      </button>
    </>
  )
}

export default Profile
