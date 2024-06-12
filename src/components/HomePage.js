import React from 'react'

import { Portfolio } from './Portfolio';
import { Skill } from './Skill';
import { Profile } from './Profile';


export const HomePage = () => {
  return (
    <div className="container text-center">
      <Profile />
      <Portfolio />
      <Skill />
    </div>
  )
}
