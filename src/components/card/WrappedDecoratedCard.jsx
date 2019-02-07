// IMPORTS
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import DecoratedCard from './DecoratedCard.jsx';

// ACTIONS
import * as EditorActions from '../../actions/editor';

// THUNKS
import * as StatusThunks from '../../thunks/status';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return { 
    actions: bindActionCreators({
      delete: StatusThunks.deleteStatus
    }, dispatch) 
  };
}

class Wrapped extends Component {
  render() {
    return (
      <DecoratedCard 
        { ...this.props }
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapped);
