// IMPORTS
import React, { Component } from 'react';

// STYLES
import styles from '../styles';

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User, Language } from 'grommet-icons';
import { FadeLoader, BarLoader, HashLoader, BounceLoader } from 'react-spinners';

const GlobalLoader = () => {
  return (
    <Box justify="center" align="center" style={{
      position: 'relative'
    }}>
      <Language color={styles.colors.pastels.purple}
        size={'xlarge'}
        style={{
          position: 'absolute',
          top: '5px'
        }}
      />
      <HashLoader
        color={styles.colors.pastels.purple}
        loading={true}
        size={105}
        style={{
          position: 'absolute',
          top: 0
        }}
      />
    </Box>
  );
}

export default GlobalLoader;