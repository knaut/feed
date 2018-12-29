// IMPORTS
import React, { Component } from 'react';
import { Grommet, Box, Button } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Login } from "grommet-icons";

// STYLES
import styles from './styles';

class App extends Component {
  render() {
    return (
      <Grommet theme={grommet}>
        <div 
          style={{
            background: styles.colors.darks.purple,
            ...styles.app.container
          }}
        >
        <Box pad={{ horizontal: 'xlarge', vertical: 'large' }}>
          <Box>
            <header>
              <h1
                style={{
                  color: styles.colors.pastels.purple
                }}
              >
                welcome to <strong style={{
                  color: styles.colors.primaries.purple
                }}>feed</strong>.
              </h1>
              <p style={{color: styles.colors.pastels.purple}}>feed is a decentralized social network powered by blockchain technology.</p>

              <Box align="center" pad="large" gap="small">
                <Button icon={<Login />} label="Sign in with your Blockstack ID" onClick={() => {}} primary />
              </Box>

            </header>
          </Box>
        </Box>
        </div>
      </Grommet>
    );
  }
}

export default App;
