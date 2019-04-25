import React from 'react';
import {
  BlockTitle,
  List,
  ListItem
} from 'framework7-react';

function ToRender(props){
    return(
      <div>
        <h1>{props.name}, {props.country}</h1>
        <div>
        <img src={props.icon} />
        </div>
        <p>{props.main}. {props.description}</p>
        <h1>{Math.round(parseFloat(props.temp)-273.15)}°</h1>
        <List simple-list>
          <ListItem title="Temp:">{Math.round(parseFloat(props.temp)-273.15)}°</ListItem>
          <ListItem title="Humidity:">{props.humidity}</ListItem>
          <ListItem title="Visibility:">{props.visibility}</ListItem>
        </List>
      </div>
    )
  }

  export default ToRender