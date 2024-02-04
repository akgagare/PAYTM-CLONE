import React from 'react'
import './Card.css'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const Card = ({title,icon}) => {
    
  return (
    <div className='card-body'>
      <div className='circle'>
        <PhoneIphoneIcon className='mui'/>
      </div>
      <div className='card-title'>
        {title}
      </div>
    </div>
  )
}

export default Card
