import React from 'react';
import {
  Page,
  Navbar,
  Preloader,
  Block,
  Button,
  LoginScreen,
  LoginScreenTitle,
  ListButton,
  BlockFooter,
  List,
  ListInput,
  BlockTitle

} from 'framework7-react';
import ToRender from '../components/ToRender'


export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {},
      isLoading: true,
      error: null,
      loginScreenOpened: false,
      city: "Toronto",
      state:"CA"
    }

    this.fetchWeather = this.fetchWeather.bind(this)
 
  }
  render() {
    console.log(this.state.weather)
  
   return (
      <Page name="home">
  
      <Navbar title="SkyCast" />
     
      {
        this.state.isLoading ?  
        <Block className="demo-preloaders loader align-items-stretch text-align-center">
          <Preloader size={62} color="#42d1f4"></Preloader>
        </Block>
        :
        <ToRender 
        name={this.state.weather.name} 
        country={this.state.weather.sys.country} 
        temp={this.state.weather.main.temp}
        humidity={this.state.weather.main.humidity}
        visibility={this.state.weather.visibility}
        main={this.state.weather.weather[0].main}
        description={this.state.weather.weather[0].description}
        icon={`http://openweathermap.org/img/w/${this.state.weather.weather[0].icon}.png`}
        />
        
      }

      {
        this.state.isLoading ? null 
      : 
      <Block>
          <Button raised small fill onClick={() => {this.setState({loginScreenOpened : true})}}>Settings</Button>
      </Block>
      }

       <LoginScreen className="demo-login-screen" opened={this.state.loginScreenOpened} onLoginScreenClosed={() => {this.setState({loginScreenOpened : false})}}>
          <Page loginScreen>
            <LoginScreenTitle>SkyCast Settings</LoginScreenTitle>
            <List form>
            <ListInput
              label="City"
              type="text"
              placeholder="Your City"
              clearButton
              value={this.state.city}
              onInput={(e) => {
              this.setState({ city: e.target.value});
              }}
            >
              
            </ListInput>
            
               <ListInput
                label="State"
                type="text"
                placeholder="Your State"
                clearButton
                value={this.state.state}
                onInput={(e) => {
                  this.setState({ state: e.target.value});
                }}
              >
                
              </ListInput>
              
            </List>
            <List>
              <ListButton onClick={this.saveChanges.bind(this)}>Save Changes</ListButton>
              <BlockTitle className="text-align-center">Emmanuel Haankwenda</BlockTitle>
                <Block>
                  <p className="error">Make sure you enter the right city and state e.g (Lusaka,ZA).<br/>cause the app might break as it is still in development.</p>
                </Block>
            </List>
          </Page>
        </LoginScreen>
    </Page>

    );
  }

  saveChanges() {
    const self = this;
    const app = self.$f7;
   
    app.dialog.alert(`City: ${self.state.city}<br>State: ${self.state.state}`, () => {
      
      app.loginScreen.close();
      console.log(self.state.city)
      this.fetchWeather( this.state.city,this.state.state )
    
    });

  }

  fetchWeather( cityName,state ) {
    let key = '11e009261b7bb55c2b24551bf4a3091d';

     // The API where i am fetching data from
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${state}&appid=${key}`)
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


  componentDidMount() {
    this.$f7ready((f7) => {
      // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
    this.fetchWeather( this.state.city,this.state.state )

  }
}
