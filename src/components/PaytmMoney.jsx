import React from 'react'
import MoneyCards from './MoneyCards'
import './PaytmMoney.css'
const PaytmMoney = () => {
  return (
    <div className='money-body'>
        <div className='money-sq'>
            <img src='https://assetscdn1.paytm.com/images/catalog/view/307196/1626420555412.png' alt="" className='money-img'></img>
            <div className='money-content'>
                <div className='money-text'>
                Get started on wealth creation journey with Zero brokerage fee & no hidden charges.
                </div>
                <div className='money-btn'>
                    Learn More
                </div>
            
            </div>
            
        </div>
        <div className='money-cards'>
            <MoneyCards img="https://assetscdn1.paytm.com/images/catalog/view_item/728894/1618576143299.png" title="Invest In Stocks"/>
            <MoneyCards img="https://assetscdn1.paytm.com/images/catalog/view_item/728895/1618575899205.png" title="Apply for IPO"/>
            <MoneyCards img="https://assetscdn1.paytm.com/images/catalog/view_item/800760/1618831809222.png" title="Invest in ETFs"/>
            <MoneyCards img="https://assetscdn1.paytm.com/images/catalog/view_item/728896/1618575990183.png" title="Buy Gold"/>
        </div>
    </div>
  )
}

export default PaytmMoney
