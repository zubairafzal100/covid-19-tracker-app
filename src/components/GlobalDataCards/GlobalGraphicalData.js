import React, { useState, useEffect } from 'react';
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { fetchDailyData } from '../../GlobalApi/GlobalApi';
import { Line, Bar } from 'react-chartjs-2';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        marginBottom: '40px',
        width: '85%',
    },
});


export default function GraphicalData({ data: { confirmed, recovered, deaths }, country }) {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fecthAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fecthAPI()
    }, []);

    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        lables: dailyData.map(({ date }) => date),
                        dataset: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            lable: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            lable: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5',
                            fill: true,
                        }],
                    }}
                    options={{
                        legend: { display: false },
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

    const classes = useStyles();
    return (
        <div>
            <div className={classes.container}>
                {country ? barChart : lineChart}
            </div>
        </div>
    );
}