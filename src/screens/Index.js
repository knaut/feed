// IMPORTS
import React, { Component } from 'react';
import {
  Grommet,
  Box,
  Button,
  Heading,
  Text,
  Anchor
} from 'grommet';
import { 
  UserNew,
  Info,
  Grow
} from "grommet-icons";

// COMPONENTS
import { Link } from 'react-router-dom'

import Layout from '../Layout';
import SignIn from '../components/SignIn';
import CreateID from '../components/button/CreateID'
import LearnMore from '../components/button/LearnMore'

// UTILS
import css from '@emotion/css'

const StartStep = ({ color, number, children }) => (
  <Box
    css={css`align-items: center;`}
    pad={{left: 'large', right: 'large', bottom: 'medium'}}
    direction='row-responsive'
    justify='center'
  >
    <Box
      round='full'
      width='small'
      height='small'
      border={{
        size: 'large',
        color: 'light-6'
      }}
      justify='center'
      align='center'
    >
      <Heading color={color} level={1} size='large'>{ number }</Heading>
    </Box>
    <Box width='large' justify='center' pad='medium'>
      { children }
    </Box>
  </Box>
)

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout
          left={null}
          right={null}
          columns={false}
        >
          <Box
            fill
            align='center'
            justify='center'
            pad='small'
          >
            <SignIn />
          </Box>
        </Layout>
        <Box
          fill='horizontal'
          align='center'
          background='light-2'
          pad='xlarge'
        >
          <Heading level={1}>
            How does it work?
          </Heading>
          <Box>
            <Text size='xlarge'>
              In <Text size='xlarge' color='brand' css={css`font-weight: bold;`}>feed</Text>, your social media data is saved and encrypted on the blockchain. <span css={css`font-weight: bold;`}>You</span> own your data. There is no central database. There are <span css={css`font-weight: bold;`}>no ads</span>. There is just you, your content, and the people you connect with.
            </Text>
          </Box>
          <Box>
            <Heading level={2}>
              Here's how to start:
            </Heading>
          </Box>
          <StartStep color='brand' number={1}>
            <Text size='large'>Sign up for an ID from Blockstack. Choose a strong password you won't forget. <Text size='large' weight='bold'>Treat this ID as your passport to <Text size='large' color='brand' weight='bold'>feed</Text>.</Text></Text>
          </StartStep>
          <StartStep color='neutral-3' number={2}>
            <Text size='large'>Sign into <Text size='large' weight='bold' color='brand'>feed</Text> for the first time.</Text>
          </StartStep>
          <StartStep color='status-ok' number={3}>
            <Text size='large'>Create your first post. Posts can be <Text size='large' weight='bold'>500 characters</Text> long. Every post has a <Text size='large' weight='bold'>permalink</Text> that can be easily shared.</Text>
          </StartStep>
          <CreateID/>
          <LearnMore large />
        </Box>
        <Box
          fill='horizontal'
          align='center'
          background='neutral-2'
          pad='xlarge'
        >
          <Box
            align='center'
            pad={{bottom: 'small'}}
            direction='row'
          >
            <Text color='purplePastel'>
              <span css={css`font-weight: bold;`}>feed.</span> grow something good. <Grow color='accent-1'/>
            </Text>
          </Box>
          <Text color='purplePastel'>
            built with <Anchor color='accent-2' href='http://www.smallinvisiblemachines.com'>
              small invisible machines
            </Anchor>
          </Text>
        </Box>
      </React.Fragment>
    );
  }
}

export default Index;
