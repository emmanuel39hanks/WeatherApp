import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  Button,
  Block
} from 'framework7-react';

export default function Settings()  {
  return(
    <Page name="settings">
    <Navbar title="Settings" />

    <List noHairlinesMd>
    <ListInput
      label="City"
      type="text"
      placeholder="Your City"
      clearButton
    >
      
    </ListInput>
    <ListInput
      label="State"
      type="text"
      placeholder="Your State"
      clearButton
    >
      
    </ListInput>
    </List>
    <Block>
    <Button medium raised fill>Save Changes</Button>
    </Block>
  </Page>
  )
};

