import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import myReducer from '../reducers/myReducer';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: 'default',
    };
  }

  UNSAFE_componentWillMount() {
    this.props.mainEpicCall({oldValue: {id:9}, newValue: {id: 10, group: 'ACC'}})
  }

  render() {
    return (
      <div 
        onClick={() => {
          console.log('clicked');
          this.props.mainEpicCall({oldValue: {id:9}, newValue: {id: 10, group: 'ACC'}})
        }}
      >
        Click me to execute epic again
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {controllersTaken: state.controllersTaken};
}

export default connect(mapStateToProps, actions)(MyComponent)
