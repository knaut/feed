// IMPORTS
import React, { Component } from 'react';
import {
  Grommet,
  Box,
  Button,
  Heading,
  Text
} from 'grommet';
import { 
  UserNew,
  Info
} from "grommet-icons";

// COMPONENTS
import { Link } from 'react-router-dom'

import Layout from '../Layout';
import SignIn from '../components/SignIn';

// UTILS
import css from '@emotion/css'

const StartStep = ({ color, number, children }) => (
  <Box
    pad={{left: 'large', right: 'large', bottom: 'medium'}}
    direction='row'
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

const CreateIDButton = () => (
  <a href='https://browser.blockstack.org/sign-up'>
    <Button
      primary
      reverse
      css={css`border-radius: 35px;`}
      icon={<UserNew size='large' css={css`width: 40px;`}/>}
      label={<Heading level={3} css={css`margin: 10px;`}>Create your ID to get started</Heading>}
    />
  </a>
)

const LearnMore = ({ large }) => (
  <a href='https://blockstack.org/try-blockstack/'>
    <Button
      reverse
      css={large ? css`border-radius: 35px; border-width: 5px;` : null}
      icon={<Info color='status-warning' size={large ? 'large' : null} css={large ? css`width: 40px;` : null}/>}
      label={large ? <Heading level={3} css={css`margin: 5px;`}>Learn more</Heading> : 'Learn more'}
    />
  </a>
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
            <Text size='large'>Sign up for an ID from Blockstack. Choose a wise password and 12-word combination. <Text size='large' weight='bold'>Treat this ID as your passport to <Text size='large' color='brand' weight='bold'>feed</Text>.</Text></Text>
          </StartStep>
          <StartStep color='neutral-3' number={2}>
            <Text size='large'>Sign into <Text size='large' weight='bold' color='brand'>feed</Text> for the first time.</Text>
          </StartStep>
          <StartStep color='status-ok' number={3}>
            <Text size='large'>Create your first post. Posts can be <Text size='large' weight='bold'>500 characters</Text> long. Every post has a <Text size='large' weight='bold'>permalink</Text> that can be shared easily.</Text>
          </StartStep>
          <CreateIDButton />
          <Box pad='medium'>
            <LearnMore large />
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}

// https://browser.blockstack.org/sign-up

export default Index;
