// ACTION TYPES
import * as EditorActions from '../actions/editor';
import * as PostActions from '../actions/post';

// for dev
import Status from '../models/Status';

  const test = new Status({ text: 'Adipisicing in in ex tempor veniam est proident laboris magna nulla deserunt sit non nostrud pariatur dolor pariatur cillum.' });

export default function feed(
  state = {
    /*
      our feed state is a list of posts arranged by ids. e.g.:
      {
        <id>: {
          ...<model props>
        },
        ids: [
          // array of ids used for easy referencing
        ]
      }
    */
    posts: {
      [test.id]: test
    },
    ids: [ test.id ]
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
      newState.posts[ action.payload.id ] = action.payload;
      newState.ids.splice(0, 0, action.payload.id)

      return newState;
    }
    case PostActions.POST_DELETE_SUCCESS: {
      
      const delId = newState.ids.indexOf( action.payload.id );
      delete newState.posts[ action.payload.id ];

      newState.ids.splice(delId, 1);
      
      console.log('blerg', delId)
      return newState;

    }
  }
}