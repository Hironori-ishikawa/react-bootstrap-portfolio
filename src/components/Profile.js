import React from 'react'
import mainImage from "../Images/main.jpg";

export const Profile = () => {
  return (
    <div className='main-icon'>
      <div className=''>
        <img src={mainImage} alt='アイコン' className="mainImage" />
      </div>
      <p>
        CAMPが趣味なITエンジニアです。
      </p>
      <p>
        主にファミキャンしてます。
      </p>
    </div>
  )
}
