// IMPORTS
import React, { Component } from 'react';
import {
  Card
} from 'reactstrap';
import { LoremIpsum } from 'lorem-ipsum';

// MODELS
import Status from '../../../src/models/Status';

// SPOOF USER
import spoof from '../../../.storybook/user.json';

function mapStateToProps(state) {
  const {
    Profile,
    Status
  } = state

  return {
    Profile,
    Status
  }
}

class PostListProvider extends Component {
  render() {
    const { Profile, Status, username } = this.props

    if (Profile.entities[username]) {
      const name = Profile.enti

      const author = {
        username,
        name,
        image
      }

      const props = {
        posts,
        author
      };

      const children = React.Children.map( this.props.children, child => {
        return React.cloneElement(child, {
          ...child.props,
          ...props
        })
      });

      return (
        <React.Fragment>
          { children }
        </React.Fragment>
      );
    } else {

    }

    
  }
}

export default PostListProvider