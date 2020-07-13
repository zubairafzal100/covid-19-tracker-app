import React, { Component } from 'react';
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button';
import { fetchData } from './GlobalApi/GlobalApi';
import './App.css';


// Importing components
import Header from './components/Header/Header';
import Image from './components/Images/Covid-img.jpeg';
import GlobalDataCards from './components/GlobalDataCards/GlobalDataCards';
import GraphicalData from './components/GlobalDataCards/GlobalGraphicalData';
import { CountryData } from './components/CountryData/CountryData';
import Footer from './components/Footer/Footer';



class App extends Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }

  render() {

    const { data, country } = this.state;

    return (
      <div>
        <Header />
        <img className="img" src={Image} alt="Covid-19 Cover Img" />
        <div className="container">
          <GlobalDataCards data={data} />
          <h1 className="h1">Country Wise Data of Covid-19 Victims</h1>
          <CountryData handleCountryChange={this.handleCountryChange} />
          <h1 className="h1">Graphical Representation Of Covid-19 Victims</h1>
          <GraphicalData data={data} country={country} />
        </div>
        <Footer />
        <ScrollUpButton />
      </div>
    );
  }
}

export default App;
