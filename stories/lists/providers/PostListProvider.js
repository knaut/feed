// IMPORTS
import React, { Component } from 'react';
import {
  Card
} from 'reactstrap';
import { LoremIpsum } from 'lorem-ipsum';

// MODELS
import Status from '../../../src/models/Status';

// // SPOOF USER
import spoof from '../../../.storybook/user.json';


/*
  This PostListProvider is a spoofing component.
  It provides a series of arbitrary posts data
  to display an example post list.
*/

export default class PostListProvider extends Component {

  lorem = (
    // default arguments
    params = {
      sentences: {
        max: 8,
        min: 4
      },
      words: {
        max: 16,
        min: 4
      }
    }
  ) => {
    const {
      sentences,
      words,
      sentencesLength
    } = params;

    const ipsum = new LoremIpsum({
      sentencesPerParagraph: {
        max: sentences.max,
        min: sentences.min
      },
      wordsPerSentence: {
        max: words.max,
        min: words.min
      }
    });

    const string = ipsum.generateSentences(sentencesLength);

    // cull length based on our limit for basic statuses
    const sub = string.substring(0, 500);

    return sub;
  }

  spoofPosts = (
    numPosts = 3,
    loremConfig
  ) => {
    const posts = [];
    
    for (let n = 0; numPosts > n; ++n) {
      posts.push(
        new Status({
          text: this.lorem(),
          Profile: spoof.user.username,
        }).getProps()
      );
    }

    return posts;
  }

  render() {
    const posts = this.spoofPosts();

    const props = {
      posts,
      author: spoof.user
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
  }
}