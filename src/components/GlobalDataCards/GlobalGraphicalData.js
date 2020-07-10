import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { fetchDailyData } from '../../GlobalApi/GlobalApi';
import { Line, Bar } from 'react-chartjs-2';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
    },
    h2: {
        textAlign: 'center',
        color: 'grey',
        fontSize: '26px',
    },
});


export default function GraphicalData() {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fecthAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fecthAPI()
    });

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
                />) : null
    );

    const classes = useStyles();
    return (
        <div>
            <h2 className={classes.h2}>Line Chart Statistics Of Covid-19 Casses</h2>
            <div className={classes.container}>
                {lineChart}
            </div>
        </div>
    );
}