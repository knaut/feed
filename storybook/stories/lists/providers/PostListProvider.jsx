// IMPORTS
import React, { Component } from 'react';
import {
  Card
} from 'reactstrap';
import { LoremIpsum } from 'lorem-ipsum';

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
      words
    } = params;

    return new LoremIpsum({
      sentencesPerParagraph: {
        max: sentences.max,
        min: sentences.min
      },
      wordsPerSentence: {
        max: words.max,
        min: words.min
      }
    });
  }

  spoofPosts = (

  ) => {
    
  }

  render() {
    const children = React.Children.map( this.props.children, child => {
      return React.cloneElement(child, {
        datum,
        ...props
      })
    })
  }
}