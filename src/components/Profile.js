import React from 'react'
import mainImage from "../Images/main.jpg";

export const Profile = () => {
  return (
    <div className='main-icon'>
      <div className='mainImageBox'>
        <img src={mainImage} alt='アイコン' className="mainImage" />
        <div className='mainText'>
          <p>
            OOが得意なITエンジニアです。
          </p>
          <p>
            趣味はCAMPです。
          </p>
        </div>
      </div>
    </div>
  )
}
