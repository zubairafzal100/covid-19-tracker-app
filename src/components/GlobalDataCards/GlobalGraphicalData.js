import React, { useState, useEffect } from 'react';
import '../../App.css';
import { fetchDailyData } from '../../GlobalApi/GlobalApi';
import { Line, Bar } from 'react-chartjs-2';


export default function GraphicalData({ data: { confirmed, recovered, deaths }, country }) {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fecthAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fecthAPI();
    }, []);

    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5',
                            fill: true,
                        }],
                    }}
                    options={{
                        title: { display: true, text: 'Line Chart Statistics Of Covid-19 Casses' },
                    }}
                />) : null
    );

    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` },
                    }}
                />
            ) : null
    );
    return (
        <div>
            <div className="graphs-container">
                {country ? barChart : lineChart}
            </div>
        </div>
    );
}