import React from 'react';
import {connect} from 'react-redux';

export default class Counter extends React.Component {
  render() {
    return (
      <h1>VALUE: { this.props.value }</h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.counter.value
  };
}

Counter = connect(mapStateToProps)(Counter);
