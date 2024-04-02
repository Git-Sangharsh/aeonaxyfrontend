import React from 'react'
import './Profile.css'
import dribbleLogo from '../assets/dribble-logo.png';
const Profile = () => {
  return (
    <div className='profile-container'>
      <img className='dribble-logo' src={dribbleLogo} alt="" />
      <div className="profile-wrapper">
        <div className="profile-wrapper-inner">
          <h1 className='profile-wrapper-header'>Welcome! Let's create your profile</h1>
          <h1 className='profile-wrapper-header-2'>Let others get to know you better! you can do these later</h1>
          <h1 className='profile-wrapper-header-3'>Add an avatar</h1>
          <div className="avatar-div">
            <div className='circle'> + </div>
            <div className="avtar-choose-image">
              <h3 className='choose-image' >Choose Image</h3>
            <h1 className='profile-wrapper-header-2 defult-text'>Or choose one of our defaults</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile