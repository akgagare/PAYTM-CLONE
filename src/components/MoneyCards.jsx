import React from 'react'
import './MoneyCards.css'
const MoneyCards = ({img,title}) => {
  return (
    <div className='moneycard-body'>
        <div className='moneycard-imgframe'>
            <img src={img} alt="" className='moneycard-img'></img>
            <div className='moneycard-info'>
                <h2>{title}</h2>
            </div>
        </div>
        

    </div>
  )
}

export default MoneyCards
