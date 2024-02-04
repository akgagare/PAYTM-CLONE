import React from 'react'
import './TheEnd.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from './Button';
const TheEnd = () => {
  return (
    <div>
    <div className='end'>
        <div className='downloads'>
            <h2>Download Now</h2>
            {/* <div className='appleStore'></div>
            <div className='playstore'></div> */}
            <Button/>

        </div>
        <div className='social'>
            <InstagramIcon/>
            <XIcon/>
            <FacebookIcon/>
        </div>
        
    </div>
    <div className='border'></div>
    </div>
  )
}

export default TheEnd
