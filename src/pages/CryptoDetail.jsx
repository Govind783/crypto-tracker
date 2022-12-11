import React from 'react'
import HistoricChart from '../components/HistoricChart'
import CoinDetail from '../components/CoinDetail'
const CryptoDetail = () => {
  return (
    <div className='wrapper-container'>

      <HistoricChart />
      <CoinDetail />
    </div>
  )
}

export default CryptoDetail