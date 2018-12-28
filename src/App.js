// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import AppGrid from './components/AppGrid.jsx';

// STYLES
import styles from './styles';

class App extends Component {
  render() {
    console.log(styles)
    return (
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container
        }}
      >
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
        </header>
      </div>
    );
  }
}

export default App;
