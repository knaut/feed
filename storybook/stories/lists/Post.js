import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Button, Grid } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import StoryRouter from 'storybook-react-router';
import { LoremIpsum } from 'lorem-ipsum';

// STYLES
import styles from '../../../src/styles';

// COMPONENTS
import Posts from '../../../src/components/list/Posts.jsx';


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const spoof = [
  lorem.generateWords(1),
  lorem.generateSentences(5),
  lorem.generateParagraphs(7)
];


storiesOf('Post List', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Grommet theme={grommet}>
      <div 
        style={{
          background: styles.colors.darks.purple,
          ...styles.app.container,
          justifyContent: 'start'
        }}
      >
        <Box align="center" style={{ width: '100%' }} pad='medium'>
          <Posts />
        </Box>
      </div>
    </Grommet>
  ))
;