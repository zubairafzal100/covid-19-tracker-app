import React from 'react';
import '../../App.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import cx from 'classnames';

const useStyles = makeStyles({
    container: {
        width: '100%',
        margin: '50px -12px',
    },
    card: {
        margin: '0 2%',
    },
    infected: {
        borderBottom: '10px solid rgba(0, 0, 255, 0.5)',
    },
    recovered: {
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    },
    deaths: {
        borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
    },
});

export default function GlobalDataCards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
    const classes = useStyles();

    if (!confirmed) {
        return 'Loading...'
    }

    return (
        <div>
            <h1 className="h1">Cards Representation of Covid-19 Victims</h1>
            <div className={classes.container}>
                <Grid container spacing={3} justify="center">
                    <Grid item component={Card} xs={12} md={3} id="card" className={cx(classes.card, classes.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={confirmed.value} duration={2.5} separator={','} />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of Active Cases of Covid-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} id="card" className={cx(classes.card, classes.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={recovered.value} duration={2.5} separator={','} />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of Recoveries from Covid-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} id="card" className={cx(classes.card, classes.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={deaths.value} duration={2.5} separator={','} />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of Deaths caused by Covid-19</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
