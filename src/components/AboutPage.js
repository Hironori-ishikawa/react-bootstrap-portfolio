import React from 'react'
import profileImage from "../Images/icon.jpg";

export const AboutPage = () => {
  return (
    <div className='AboutPageBox'>
      <p className='AboutTitle'>About</p>
      <div className='ProfileImageBox'>
        <img src={profileImage} alt='アイコン' className="profileImage" />
      </div>
      <div className='AboutText'>
        <p>
          元アパレル販売員のITエンジニアです。<br /><br />
          2019年より転職しIT業界へ<br />
          2022年より某携帯外資メーカーのHP保守運用を経験<br />
          2023年より金融機関にて要件定義を担当<br />
        </p>
      </div>
      <div className='ProfileBox'>
        <div className='profileText'>
          <p className='name'>
            <dt>名称 : </dt>
            <dd>H.I </dd>
          </p>
          <p className='location'>
            <dt>所在地 : </dt>
            <dd>関東</dd>
          </p>
          <p className='contact'>
            <dt>お問い合わせ : </dt>
            <dd>*****@****</dd>
          </p>
          <p className='business'>
            <dt>実務実績 : </dt>
            <dd>システム開発の要件的義、Web制作における HTML・CSSコーディング、スマートフォンサイトの保守運用</dd>
          </p>
        </div>
      </div>
    </div>
  );
};
