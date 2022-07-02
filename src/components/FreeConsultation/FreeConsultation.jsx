import React from 'react'
import { Link } from 'react-router-dom'

const FreeConsultation = () => {
  return (
    <div><Link style={{cursor:"pointer"}} to='/contact'>
    <button className="Mainbanner_button">Get a Free Consultation</button>
  </Link></div>
  )
}

export default FreeConsultation