import React from 'react';
import {
  BlockTitle,
  List,
  ListItem
} from 'framework7-react';

function ToRender(props){
    return(
      <div className="container">
        <h1 className="name">{props.name}, {props.country}</h1>
        <div className="text-center">
        <img className="img" src={props.icon} />
        </div>
        <p className="displaydes">{props.main}. {props.description}</p>
        <h1 className="name2">{Math.round(parseFloat(props.temp)-273.15)}°c</h1>
        <List simple-list>
          <ListItem title="Temp:">{Math.round(parseFloat(props.temp)-273.15)}°c</ListItem>
          <ListItem title="Humidity:">{props.humidity}</ListItem>
          <ListItem title="Visibility:">{props.visibility}</ListItem>
        </List>
      </div>
    )
  }

  export default ToRender