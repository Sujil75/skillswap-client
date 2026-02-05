import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'

function SkillUpdate() {
  const {state} = useLocation()
  console.log(state)
  return (
    <div className='h-[100vh]'>
        <Navbar />

        <div>SkillUpdate</div>
    </div>
  )
}

export default SkillUpdate