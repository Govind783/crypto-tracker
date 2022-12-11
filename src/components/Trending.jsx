import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import UseAxios from '../hooks/UseAxios'
import "./Trending.css";
import Loader from "./Loader"


const Trending = () => {

    const { response } = UseAxios("search/trending");

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };

    if(!response){
        return <Loader />
    }

    return (

        <div>



            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableButtonsControls
                disableDotsControls
                responsive={responsive}
                autoPlay
            >

                {response && response.coins.map(coin => {

                    return <div className='flex slide' key={coin.item.coin_id}>

                        <Link to={`/coin/${coin.item.id}`}>
                            <div>
                                <img src={coin.item.large} className="mt-0 relative top-30 img" />
                                <p key={coin.item.coin_id} className="name"> {coin.item.name}  </p>
                            </div>
                        </Link>
                    </div>

                })}
            </AliceCarousel>


        </div >

    )

}


export default Trending;

