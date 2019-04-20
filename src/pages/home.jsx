import React from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  List,
  ListItem


} from 'framework7-react';

export default () => (
  <Page name="home">
  
    <Navbar title="SkyCast" />
    <BlockTitle>Hwll</BlockTitle>
    <List simple-list>
      <ListItem title="Item 1"></ListItem>
      <ListItem title="Item 2"></ListItem>
      <ListItem title="Item 3"></ListItem>
    </List>

  </Page>
);