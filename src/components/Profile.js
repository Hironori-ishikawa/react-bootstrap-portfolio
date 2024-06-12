import React from 'react'
import profileImage from "../Images/icon.jpg";

export const Profile = () => {
  return (
    <div>
      <img src={profileImage} alt='アイコン' className="profileImage" />

      <p>
        PANDA CAMP△です。
      </p>
    </div>
  )
}
