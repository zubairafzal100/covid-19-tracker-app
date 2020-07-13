import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../GlobalApi/GlobalApi';


const useStyles = makeStyles({
    container: {
        textAlign: 'center',
    },
});


export const CountryData = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <FormControl className="formControl">
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, ind) => <option key={ind} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
