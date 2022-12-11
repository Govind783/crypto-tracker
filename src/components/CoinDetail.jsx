import React from 'react'
import { useParams } from 'react-router-dom'
import UseAxios from '../hooks/UseAxios'
import Loader from './Loader'
import "./CoinDetail.css"

const CoinDetail = () => {
    const { id } = useParams();

    const { response } = UseAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`);


    if (!response) {
        return <Loader />
    }

    return (
        <div>
            <div className='line'></div>

            <img src={response.image.large} className="imgg" />
            <p className='coin-name text-4xl font-semibold'>{response.name}</p>
            <div className='container'>
                <p dangerouslySetInnerHTML={{ __html: response.description.en.split(". ")[0] }} className='desc' ></p>
            </div>
            <p className='font-semibold rankk text-2xl'>RANK BY MARKET CAP : </p>
            <p className='font-semibold ran text-2xl'> {response.coingecko_rank}</p>
        </div>
    )
}

export default CoinDetail