// IMPORTS
import React, { Component } from 'react'

// STYLES
import css from '@emotion/css'

// COMPONENTS
import {
  Grommet,
  Box,
  Button,
  Grid,
  TextArea,
  Heading,
  Text,
  Image,
  Anchor
} from 'grommet'
import { grommet, dark } from 'grommet/themes'
import { Add, Star, Note, SubtractCircle, Gremlin, Help, User } from 'grommet-icons'
import { FadeLoader, BarLoader, HashLoader } from 'react-spinners'
import * as Router from 'react-router-dom';

// THEME
import { feed } from '../../Theme'

const IsMeTag = () => (
  <Box justify='center' align='center'>
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

const AvatarLoading = ({ size, username }) => {
  switch (size) {
    default: {
      return (
        <React.Fragment>
          <Box justify='center' align='center'>
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
              <Box>
                <HashLoader
                  color={feed.global.colors.purplePastel}
                  loading
                  size={75}
                />
              </Box>
            </Box>
          </Box>
          <Box
            justify='center'
            align='center'
            pad='small'
          >
            <Text level={1} size='medium' color='gray1'>
              {`Looking up "${username}"…`}
            </Text>
          </Box>
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
              <Box>
                <HashLoader
                  color={feed.global.colors.purplePastel}
                  loading
                  size={50}
                />
              </Box>
            </Box>
            <Box
              justify='center'
              align='center'
              pad='small'
            >
              <Text level={1} size='medium' color='gray1' margin={{ left: 'xsmall' }}>
                {`Fetching "${username}"…`}
              </Text>
            </Box>
          </Box>
        </React.Fragment>
      )
    }
  }
}


class AvatarLoaded extends Component {
  state = {
    hover: false
  }

  render() {

    const {
      size, image, username, name, isMe
    } = this.props

    const {
      hover
    } = this.state

    switch (size) {
      default: {
        return (
          <React.Fragment>
            <Box justify='center' align='center'>
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
                  css={image ? css`width: 100%; height: 100%;` : null}
                >
                  {
                    image ? (
                      <Image src={image} fit='cover' css={css`width: inherit;`} />
                    ) : (
                      <User color='purplePastel' size='xlarge' />
                    )
                  }
                </Box>
              </Box>
            </Box>
            <Box
              justify='center'
              align='center'
              pad={{ top: 'small' }}
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
            { isMe ? <IsMeTag /> : null }
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
                  border: 5px solid ${hover ? feed.global.colors.cyan : 'var(--gray1)'};
                  overflow: hidden;
                  transition: all 0.15s ease-in-out;
                `}
              >
                <Router.Link to={`/${username}/profile`} 
                  onMouseEnter={e => this.setState({hover: true})}
                  onMouseLeave={e => this.setState({hover: false})}
                  css={css`
                    display: block;
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                    &:hover {
                      text-decoration: none;
                    }
                `}>
                  <Box
                    justify='center'
                    align='center'
                    css={image ? css`width: 100%; height: 100%;` : css`height: 100%;`}
                  >
                    {
                      image ? (
                        <Image src={image} fit='contain' />
                      ) : (
                        <User color='purplePastel' size='large' />
                      )
                    }
                  </Box>
                </Router.Link>
              </Box>
              <Box
                justify='center'
                align='center'
                margin={{ left: 'medium' }}
              >
                <Router.Link to={`/${username}/profile`} css={css`
                  text-decoration: none;
                  &:hover {
                    text-decoration: none;
                  }
                `}>
                  <Text
                    onMouseEnter={e => this.setState({hover: true})  }
                    onMouseLeave={e => this.setState({hover: false}) }
                    level={1}
                    size={'medium'}
                    color={ hover ? feed.global.colors.cyan : 'gray1' }
                    css={css`
                      letter-spacing: 2px;
                      transition: all 0.15s ease-in-out;
                    `}
                  >
                    { name }
                  </Text>
                </Router.Link>
              </Box>
            </Box>
          </React.Fragment>
        )
      }
    }
  }

}

const NotOnBlockstack = ({ username }) => (
  <React.Fragment>
    <Box justify='center' align='center'>
      <Box
        background='purple'
        round='full'
        justify='center'
        align='center'
        css={css`
          border: 5px solid var(--gray1);
          width: 150px;
          height: 150px;
          overflow: hidden;
        `}
      >
        <Box>
          <Help color='redPastel' size='xlarge' />
        </Box>
      </Box>
    </Box>
    <Box justify='center' align='center' pad={{ top: 'small' }}>
      <Text level={1} size='medium' color='gray1'>
        {`"${username}" was not found.`}
      </Text>
    </Box>
  </React.Fragment>
)


class Avatar extends Component {
  render () {
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
    } = this.props

    switch (size) {
      default: {
        // any size other than 'small' for now
        if (isLoading === true) {
          return <AvatarLoading username={username} />
        } else if (isOnBlockstack === true) {
          // switch based on whether the user is on blockstack
          return (
            <AvatarLoaded
              isMe={isMe}
              username={username}
              image={image}
            />
          )
        } else {
          return <NotOnBlockstack username={username} />
        }
      }
      case 'small': {
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
              />
            )
          } else {
            return <NotOnBlockstack username={username} />
          }
        }
      }
    }
  }
}

export default Avatar
