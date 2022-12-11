
import React from 'react'
import { useParams } from 'react-router-dom'
import UseAxios from '../hooks/UseAxios'
import Loader from './Loader';
import "./HistoricChart.css";


//chart starts
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';




ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)


const HistoricChart = () => {
    const { id } = useParams();
   const {response} = UseAxios(`coins/${id}/market_chart?vs_currency=usd&days=29`);
    console.log(response);


    if (!response) {
        return <Loader />
    }

    const coinCharData=response.prices.map(value => ({ x: value[0] , y: value[1].toFixed(2) }))

     const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    //const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    
 const data = {
    labels: coinCharData.map(value => moment(value.x).format("MMM DD")),
    datasets: [
        {
            label: id,
            data: coinCharData.map(val=> val.y),
            borderColor: '#FFD700',
            backgroundColor: '#FFD700',
        },

    ],
}



    //daTA



    return (
        <div className='contain'>

            <Line options={options} data={data} className="graph text-yellow-400" />;
        </div>
    )
}

export default HistoricChart
