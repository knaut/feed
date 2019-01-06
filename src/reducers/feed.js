// ACTION TYPES
import * as EditorActions from '../actions/editor';

// for dev
import Status from '../models/Status';

export default function feed(
  state = {
    posts: [ 
      new Status('Est ad ex nostrud aute do magna sunt elit commodo occaecat veniam dolor magna nostrud ullamco quis nostrud in do nulla proident in voluptate ea magna qui.'),
      new Status('Minim incididunt duis mollit in tempor voluptate duis esse in laborum velit do dolor eu cupidatat nulla sed exercitation laborum magna quis ad.')
    ]
  },
  action
) {
  let newState = {
    ...state
  };

  switch(action.type) {
    default: {
      return newState;
    }
    case EditorActions.EDITOR_SUBMIT_SUCCESS: {
      // add this post to the top of our feed
      newState.posts.splice( 0, 0, action.payload );
      return newState;
    }
  }
}