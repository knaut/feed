// IMPORTS
import React, { Component } from 'react';

// STYLES
import css from '@emotion/css'

// COMPONENTS
import { Grommet, Box, Button, Grid, TextArea, Heading, Text, Image } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User } from 'grommet-icons';
import { FadeLoader, BarLoader, HashLoader } from 'react-spinners';

// THEME
import { feed } from '../Theme'

const IsMeTag = () => (
  <Box justify="center" align="center">
    <Box
      background='cyan'
      round={'xlarge'}
      pad={{
        top: 'xxsmall',
        left: 'small',
        right: 'small',
        bottom: 'xxsmall'
      }}
    >
      <Text 
        size='small' 
        color='light'
        css={css`
          font-style: italic;
          font-weight: bold;
        `}
      >
        This is you!
      </Text>
    </Box>
  </Box>
)

const AvatarLoading = ({ username }) => (
  <React.Fragment>
    <Box justify="center" align="center">
      <Box 
        background='purple' 
        round='full'
        justify="center"
        align="center"
        css={css`
          border: 5px solid var(--gray1);
          width: 150px;
          height: 150px;
          overflow: hidden;
        `}
      >
        <Box>
          <HashLoader
            color={feed.global.colors.purplePastel}
            loading={true}
            size={75}
          />
        </Box>
      </Box>
    </Box>
    <Box
      justify="center"
      align="center"
      pad='small'
    >
      <Text level={1} size='medium' color='gray1'>
        {`Looking up "${username}"…`}
      </Text>
    </Box>
  </React.Fragment>
)

const AvatarLoaded = ({ size, image, username, name, isMe }) => {
  switch(size) {
    default: {
      return (
        <React.Fragment>
          <Box justify="center" align="center">
            <Box 
              background='purple' 
              round='full' 
              justify='center'
              align='center'
              width='small'
              height='small'
              css={css`
                border: 5px solid var(--gray1);
                overflow: hidden;
              `}
            >
              <Box 
                justify='center'
                align='center'
                css={ image ? css`width: 100%; height: 100%;` : null }
              >
                { 
                  image ? (
                    <Image src={image} fit="cover" />
                  ) : (
                    <User color='purplePastel' size='xlarge'/>
                  )
                }
              </Box>
            </Box>
          </Box>
          <Box
            justify="center"
            align="center"
            pad={{top: 'small'}}
          >
            <Text
              level={1}
              size={'medium'}
              color='gray1'
              css={css`letter-spacing: 2px;`}
            >
              { name }
            </Text>
          </Box>
          { isMe ? <IsMeTag/> : null }
        </React.Fragment>
      )
    }
    case 'small': {
      return (
        <React.Fragment>
          <Box direction='row'>
            <Box 
              background='purple' 
              round='full' 
              justify='center'
              align='center'
              width='xsmall'
              height='xsmall'
              css={css`
                border: 5px solid var(--gray1);
                overflow: hidden;
              `}
            >
              <Box 
                justify='center'
                align='center'
                css={ image ? css`width: 100%; height: 100%;` : null }
              >
                { 
                  image ? (
                    <Image src={image} fit='contain' />
                  ) : (
                    <User color='purplePastel' size='xlarge'/>
                  )
                }
              </Box>
            </Box>
            <Box
              justify='center'
              align='center'
              margin={{left: 'medium'}}
            >
              <Text
                level={1}
                size={'medium'}
                color='gray1'
                css={css`letter-spacing: 2px;`}
              >
                { name }
              </Text>
            </Box>
          </Box>
        </React.Fragment>
      )
    }
  }
}

const NotOnBlockstack = ({ username }) => (
  <React.Fragment>
    <Box justify="center" align="center">
      <Box
        background='purple'
        round='full' 
        justify="center"
        align="center"
        css={css`
          border: 5px solid var(--gray1);
          width: 150px;
          height: 150px;
          overflow: hidden;
        `}
      >
        <Box>
          <Help color='redPastel' size='xlarge'/>
        </Box>
      </Box>
    </Box>
    <Box justify="center" align="center" pad={{top: 'small'}}>
      <Text level={1} size='medium' color='gray1'>
        {`"${username}" was not found.`}
      </Text>
    </Box>
  </React.Fragment>
)

class Avatar extends Component {
  render() {
    const {
      // status of user variables
      isLoading,
      isOnBlockstack,
      isMe,
      // static props
      name,
      username,
      image,
      // determines layout and styles
      size
    } = this.props;

    console.log(this)

    switch(size) {
      default: {

        // any size other than 'small' for now
        if (isLoading === true) {
          return <AvatarLoading username={username}/>
        } else {
          // switch based on whether the user is on blockstack
          if (isOnBlockstack === true) {
            return (
              <AvatarLoaded
                isMe={isMe}
                username={username}
                image={image}
              />
            )  
          } else {
            return <NotOnBlockstack username={username}/>
          }
        }

      }
      case 'small': {
        
        // return 'Small'
        if (isLoading === true) {
          return (
            <AvatarLoading 
              size='small'
              username={username}
            />
          )
        } else {
          // switch based on whether the user is on blockstack
          if (isOnBlockstack === true) {
            return (
              <AvatarLoaded 
                size='small'
                image={image}
                username={username}
                name={name}
                isMe={false}
              />
            )
          } else {
            return <NotOnBlockstack username={username}/>
          }
        }

      }
    }

  }
}

export default Avatar;