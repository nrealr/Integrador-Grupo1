import React from 'react'
import { Link } from 'react-router-dom'
import "./DoctorCard.styles.css"


const DoctorCard = ({ doctor }) => {
  return (
    <div className='container'>
        
    <div className='containerInfo'>
      
      <div>
      <h2>Dr. {doctor.name} {doctor.lastname}</h2>
      <h3>{doctor.rut}</h3>
      </div>

      <div>
      <img className='avatarDoc'
        src={doctor.image}
      />
      </div>

    </div>

    <div>
      <Link className='cardButton' to={`/doctor/${doctor.id}`}><span>Find out more&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→</span></Link>
      </div>


    </div>
  )
}

export default DoctorCard