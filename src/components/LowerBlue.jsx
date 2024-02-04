import React from 'react'
import './LowerBlue.css'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const LowerBlue = () => {
  return (
    <div className='lowerBlue'>
        <h1>Book & Buy on Paytm.</h1>
        <div className='card-items'>

        <div className='card-body2'>
            <div className='circle'>
                <LiveTvIcon className='mui'/>
            </div>
            <div className='card-title'>
                Book Movie Ticket
            </div>
        </div>

        <div className='card-body2'>
            <div className='circle'>
                <AirplaneTicketIcon className='mui'/>
            </div>
            <div className='card-title'>
                Book Airplane Ticket
            </div>
        </div>


        <div className='card-body2'>
            <div className='circle'>
                <DirectionsTransitIcon className='mui'/>
            </div>
            <div className='card-title'>
                Book Train Ticket
            </div>
        </div>


        <div className='card-body2'>
            <div className='circle'>
                <AccountBalanceIcon className='mui'/>
            </div>
            <div className='card-title'>
              Buy Loan
            </div>
        </div>


        </div>
    </div>
  )
}

export default LowerBlue
