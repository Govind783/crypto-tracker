import React from 'react'
import "./Coin.scss"
import { currencyFormat } from '../utils'
import { DownTrend, UpTrend } from '../icon/Icon.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Coin = ({ coin, inp }) => {
   


    return (
        <Link to={`/coin/${coin.id}`}>
            <div className='grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-200 border-b'>
                <div className='flex items-center gap-1 w-full'>
                    <img src={coin.image} alt={coin.name} className="w-16" />
                    <p className="capitalize font-semibold relative">{coin.name}</p>
                    <span className='font-semibold capitalize'>({coin.symbol})</span>
                </div>


                <span className='w-full text-center font-semibold'>{currencyFormat(coin.current_price)}</span>
                <span className={`flex gap-1 font-semibold ${coin.price_change_percentage_24h < 0 ? "text-red-600" : "text-green-400"}`}>
                    {coin.price_change_percentage_24h}

                </span>


                <div className='hidden sm:block'>

                    <p className='font-semibold '>MARKET CAP</p>
                    <span>{currencyFormat(coin.market_cap)}</span>

                </div>


                </div>
           

        </Link>
    )
}

export default Coin

