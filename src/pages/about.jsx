import React from 'react';
import { Page, Navbar, Block, List, ListItem, AccordionContent } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      
    }
  }
  render() {
    return (
      <Page name="about">
        <Navbar title="About" />
    
  <List accordionList inset>
    <ListItem accordionItem title="Name:">
      <AccordionContent>
        <Block>
          <p>
           SkyCast Weather Mobile App.
          </p>
        </Block>
      </AccordionContent>
    </ListItem>
    <ListItem accordionItem title="Description:">
      <AccordionContent>
        <Block>
          <p>SkyCast is a mobile weather application powered by OpenWeatherMapAPI built by Emmanuel Haankwenda through the BongoHive Weather App challenge.</p>
        </Block>
      </AccordionContent>
    </ListItem>
    <ListItem accordionItem title="Version:">
      <AccordionContent>
        <Block>
          <p>
           v1.0.0
          </p>
        </Block>
      </AccordionContent>
    </ListItem>
  </List>
      </Page>
    );
  }
}