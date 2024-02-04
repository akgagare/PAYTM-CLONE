import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Blue from './components/Blue'
import LowerBlue from './components/LowerBlue'
import PaytmMoney from './components/PaytmMoney'
import TheEnd from './components/TheEnd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className='navbar'>
      <div className='logo'>
        <img src='https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg' alt="" className='paytm-logo'/>
      </div>
      <div className='items'>
          <h2>Paytm For Customer</h2>
          <h2>Paytm For Buisness</h2>
          <h2>Investor Relations</h2>
          <h2>Company</h2>
          <h2>Career</h2>
      </div>
      <div className='btn'>
        <div className='signIn'>SignIn</div>
        <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logoutImg.svg" alt="profile" className='profile'></img>
      </div>
    </div>


    <div className='body'>
      <div className='header-line'>
      <span>No Wallet KYC Required </span>😊to pay using UPI on Paytm. <span>Learn more.</span>
      </div>
    </div>
    <div className='body2'>
      <div className='b-left'>
        <img src='https://assetscdn1.paytm.com/images/catalog/view/310944/1697527183231.png' alt='' className='logo-ad'></img>
        <div className='info'>
          <div className='title'>
            India's Most-loved Payments App
          </div>
          <div className='description'>
          Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more.
          </div>
          <Button/>
        </div>
      </div>
      <div className='b-right'>
        <img src='https://assetscdn1.paytm.com/images/catalog/view_item/850762/1706796536129.png' alt=' ' className='mobile-ad'></img>
      </div>
    </div>
    <Blue/>
    <LowerBlue/>
    <div className='paytm-money'>
      <PaytmMoney/>
    </div>
    <TheEnd/>
    </div>
  )
}

export default App
