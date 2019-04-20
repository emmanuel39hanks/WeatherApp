import React from 'react';
import {
  App,
  Panel,
  Views,
  View,
  Statusbar,
  Page,
  Navbar,
  Toolbar,
  Link,
  Block
} from 'framework7-react';

import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        id: 'io.emmanuelhaankwenda.weatherapp', // App bundle ID
        name: 'Weather App', // App name
        theme: 'auto', // Automatic theme detection
        // App root data
        data: function () {
          return {
            dataFromApi: [
              {
                
              }
            ]
            
          };
        },

        // App routes
        routes: routes,



        // Input settings
        input: {
          scrollIntoViewOnFocus: !!this.$device.cordova,
          scrollIntoViewCentered: !!this.$device.cordova,
        },
        // Cordova Statusbar settings
        statusbar: {
          overlay: this.$device.cordova && this.$device.ios || 'auto',
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
        },
      },
      
      isLoading: true,
      weather: {},
      error: null
    }
    this.fetchWeather = this.fetchWeather.bind(this)
    this.drawWeather = this.drawWeather.bind(this)
  }
  render() {
    console.log(this.state.weather)
    return (
      <App params={ this.state.f7params }>
        {/* Status bar overlay for fullscreen mode*/}
        <Statusbar></Statusbar>

        {/* Left panel with cover effect*/}
        <Panel left cover themeDark>
          <View>
            <Page>
              <Navbar title="Left Panel"/>
              <Block>Left panel content goes here</Block>
            </Page>
          </View>
        </Panel>


        {/* Right panel with reveal effect*/}
        <Panel right reveal themeDark>
          <View>
            <Page>
              <Navbar title="Right Panel"/>
              <Block>Right panel content goes here</Block>
            </Page>
          </View>
        </Panel>


        {/* Views/Tabs container */}
        <Views tabs className="safe-areas">
          {/* Tabbar for switching views-tabs */}
          <Toolbar tabbar labels bottom>
            <Link tabLink="#view-home" tabLinkActive iconIos="f7:home_fil" iconAurora="f7:home_fil" iconMd="material:home" text="Home" />
            <Link tabLink="#view-about" iconIos="f7:list_fill" iconAurora="f7:list_fill" iconMd="material:view_list" text="About" />
            <Link tabLink="#view-settings" iconIos="f7:settings_fill" iconAurora="f7:settings_fill" iconMd="material:settings" text="Settings" />
          </Toolbar>

          {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
          <View id="view-home" main tab tabActive url="/" />

          {/* About View */}
          <View id="view-about" name="about" tab url="/about/" />

          {/* Settings View */}
          <View id="view-settings" name="settings" tab url="/settings/" />

        </Views>


        {/* Popup */}
       

      </App>
    )
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