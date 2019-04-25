import React from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  List,
  ListItem


} from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {},
      isLoading: true,
      error: null
    }

    this.fetchWeather = this.fetchWeather.bind(this)
    this.drawWeather = this.drawWeather.bind(this)
  }
  render() {
    console.log(this.state.weather)
    return (
      <Page name="home">
  
      <Navbar title="SkyCast" />
      <BlockTitle>{this.state.weather.name}</BlockTitle>
      <List simple-list>
        <ListItem title="Item 1"></ListItem>
        <ListItem title="Item 2"></ListItem>
        <ListItem title="Item 3"></ListItem>
      </List>

    </Page>

    );
  }

  fetchWeather( cityID ) {
    let key = '11e009261b7bb55c2b24551bf4a3091d';

     // The API where i am fetching data from
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}`)
  // i get a response and receive the data in JSON format...
  .then(response => response.json())
  // ...then i update the state of our application
  .then(
    data =>
      this.setState({
        weather: data,
        isLoading: false
      })
  )
  // If we catch errors instead of a response, let's update the app
  .catch(error => this.setState({ error, isLoading: false }));
  }

  drawWeather(d){
    let celcius = Math.round(parseFloat(d.main.temp)-273.15);
	  let fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	  let description = d.weather[0].description;
  }


  componentDidMount() {
    this.$f7ready((f7) => {
      // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
    this.fetchWeather( 6167865 )
  }
}
 