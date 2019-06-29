// IMPORTS
import React, { Component } from 'react';
import {
  Grommet,
  Box,
  Button,
  Heading,
  Text
} from 'grommet';
import { Login } from "grommet-icons";

// COMPONENTS
import Layout from '../Layout';
import SignIn from '../components/SignIn';

// UTILS
import css from '@emotion/css'

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
              In <Text size='xlarge' color='brand' css={css`font-weight: bold;`}>feed</Text>, your social media data is saved and encrypted on the blockchain. <span css={css`font-weight: bold;`}>You</span> own your data. There is no central database. There are  <Text size='large' weight='bold'>no ads</Text>. There is just you, your content, and the people you connect with.
            </Text>
          </Box>
          <Box>
            <Heading level={2}>
              Here's how to start:
            </Heading>
          </Box>
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
              <Heading color='brand' level={1} size='large'>1</Heading>
            </Box>
            <Box width='large' justify='center' pad='medium'>
              <Text size='large'>Sign up for an ID from Blockstack. Choose a wise password and 12-word combination. <Text size='large' weight='bold'>Treat this ID as your passport to <Text size='large' color='brand' weight='bold'>feed</Text>.</Text></Text>
            </Box>
          </Box>
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
              <Heading color='neutral-3' level={1} size='large'>2</Heading>
            </Box>
            <Box width='large' justify='center' pad='medium'>
              <Text size='large'>Sign into <Text size='large' weight='bold' color='brand'>feed</Text> for the first time.</Text>
            </Box>
          </Box>
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
              <Heading color='status-ok' level={1} size='large'>3</Heading>
            </Box>
            <Box width='large' justify='center' pad='medium'>
              <Text size='large'>Create your first post. Posts are limited to <Text size='large' weight='bold'>500 characters</Text>. Every post has a <Text size='large' weight='bold'>permalink</Text> that can be shared easily.</Text>
            </Box>
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}

/*
<Box fill='horizontal' direction='row-responsive' justify='evenly'>
            <Box>
              <Heading level={5}>
                Feed was created as an antidote to modern social media platforms. Users are not products. We are human beings—and social media should serve our needs, not the other way around.
              </Heading>
            </Box>
          </Box>
*/

export default Index;
