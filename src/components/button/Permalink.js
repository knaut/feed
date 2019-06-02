// IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import { Grommet, Box, Button, Grid } from 'grommet';
import { Link } from 'grommet-icons';
import * as Router from 'react-router-dom';

// STYLES
import styles from '../../../src/styles';

export default (props) => {
  const {
    onPermalinkEnter,
    onPermalinkLeave,
    onPermalink,
    permalinkHover,
    onHover,
    link
  } = props;

  return (
    <Router.Link to={link}>
      <Box gridArea='permalink' align='start' pad='small'
        onMouseEnter={onPermalinkEnter}
        onMouseLeave={onPermalinkLeave}
        onClick={onPermalink}
        style={{cursor: 'pointer'}}
      >
        <Link
          size='medium' 
          color={permalinkHover ? styles.colors.pastels.yellow : styles.colors.neutrals.gray2}
          style={{
            position: 'relative',
            top: onHover === true ? 0 : '-50px',
            transition: 'all 0.2s ease-in-out'
          }}
        />
      </Box>
    </Router.Link>
  );
}