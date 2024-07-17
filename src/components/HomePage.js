import React from 'react'

import { Portfolio } from './Portfolio';
import { Skill } from './Skill';
import { Profile } from './Profile';


export const HomePage = () => {
  return (
    <div>
      <Profile />
      <div className='mainBox'>
        <Portfolio />
        <Skill />
      </div>
    </div>
  )
}
