import React from 'react'
import mainImage from "../Images/mainImage.jpg";

export const Profile = () => {
  return (
    <div className='main-icon'>
      <div className='mainImageBox'>
        <img src={mainImage} alt='アイコン' className="mainImage" />
        <div className='mainTextBox'>
          <div className='mainText'>
            <h2>
              H.I Portfolio
            </h2>
          </div>
          <p>
            アウトドア好きなITエンジニアのポートフォリオサイト
          </p>
        </div>
      </div>
    </div>
  )
}
