// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as blockstack from 'blockstack';

// COMPONENTS
import Card from './Card'

function mapStateToProps(state) {
  const id = state.user.username.split('.')[0];

  return {
    id,
    profiles: state.Profile.ids
  }
}

class ProfileLoader extends Component {
  state = {
    isLoading: true,
    isOnBlockstack: null,
    isMe: this.props.id === this.props.username,

    username: this.props.username,  // prop provided from the router
    image: null,
    name: null,
    description: null,

    profiles: this.props.profiles
  }

  async componentDidMount() {
    const { 
      id,
      username
    } = this.props;
    
    const { profiles } = this.state;
    const isOnFeed = profiles.indexOf(id) > -1;

    try {

      // load a blockstack profile based on our route
      if (id === username) {
        // this profile matched our own login; it's our profile
        const profile = await blockstack.lookupProfile(`${id}.id.blockstack`);
        const { name, image, description } = profile;

        this.setState({
          isLoading: false,
          isOnBlockstack: true,
          isMe: true,
          isOnFeed,
          image: image[0].contentUrl,
          name,
          description,
        });

      } else {

        // this is someone else's profile
        const profile = await blockstack.lookupProfile(`${username}.id.blockstack`);
        const person = new blockstack.Person(profile);
        const json = person.toJSON();

        const image = person.avatarUrl();
        const name = json.name ? json.name : false;
        const description = json.description ? json.description : false;

        this.setState({
          isLoading: false,
          isOnBlockstack: true,
          isMe: false,
          isOnFeed,
          image,
          name,
          description,
        });

      }  

    } catch (error) {
      console.error(error);

      this.setState({
        isLoading: false,
        isOnBlockstack: false,
        isMe: false,
        isOnFeed,
        image: false,
        name: false,
        description: false,
      });

    }
  }

  render() {
    return (
      <React.Fragment>
        <Card { ...this.state }/>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, () => new Object())(ProfileLoader)