import React from 'react'
import UseAxios from '../hooks/UseAxios'
import Coin from './Coin';
import "./Market.css"
import { useState } from 'react';



const Markets = () => {

  const [page,setPage]=useState(1);


  const { response } = UseAxios("coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  return (
    <section className=' m-24 mt-16'>

      <h1 className='text-2xl font-semibold text-center text-yellow-300 mar'>CURRENT MARKET</h1>
      <div className='border-head rounded'></div>
      <p className='nam font-semibold'>Name</p>
      <p className='price font-semibold'>Price</p>
      <p className='chan font-semibold'>chnage in 24H</p>
      <p className='cap font-semibold'>Market cap</p>
      <div className='heading'>

        {response && response.map(coin => <Coin key={coin.id} coin={coin} 
        />).slice((page-1) * 20, (page-1)*20 + 20)}

      </div>
      


    </section>
  )
}

export default Markets