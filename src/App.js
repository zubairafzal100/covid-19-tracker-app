import React, { Component } from 'react';
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button';
import { fetchData } from './GlobalApi/GlobalApi';
import './App.css';


// Importing components
import Header from './components/Header/Header';
import Image from './components/Images/Covid-img.jpeg';
import GlobalDataCards from './components/GlobalDataCards/GlobalDataCards';
import Footer from './components/Footer/Footer';



class App extends Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })
  }

  render() {

    const { data } = this.state;

    return (
      <div>
        <Header />
        <img className="img" src={Image} alt="Covid-19 Cover Img" />
        <GlobalDataCards data={data} />
        <Footer />
        <ScrollUpButton />
      </div>
    );
  }
}

export default App;
