import React from 'react'
import Card from './Card'
import './Blue.css'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
const Blue = () => {
  return (
    <div className='blue-body'>
      <h1>Recharge & Pay Bills on Paytm.</h1>
      <div className='card-items'>
        <Card icon="PhoneIphoneIcon" title="Recharge Prepaid Mobile"/>
        <Card title="Pay Electricity Bill"/>
        <Card title="Book Gas Cyclinder"/>
        <Card title="Pay Broadband& Landline Bill"/>
        <Card title="Pay Education Fee"/>
        <Card title="All payment Service"/>
      </div>
    </div>
  )
}

export default Blue
