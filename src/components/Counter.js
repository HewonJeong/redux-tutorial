import React, {PropTypes} from 'react';
import Value from './Value';
import Control from './Control';
import {connect, bindActionCreators} from 'react-redux';
import * as actions from '../actions';
const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Hello World',
};


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.setRandomizeColor = this.setRandomizeColor.bind(this);
  }
  render() {
    const color = this.props.color;
    const style = {
      backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    }
    return (
      <div style={style}>
        <Value number={this.props.number}/>
        <Control
          onPlus={this.props.handleIncrement}
          onSubtract={this.props.handleDecrement}
        onRandomizeColor={this.setRandomizeColor}/>
      </div>
    )
  }

  setRandomizeColor() {
    const color = [
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200),
    ];
    this.props.handleSetColor(color);
  }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color,
  };
}

const mapDispatchToProps = (dispatch) => {
  //return bindActionCreators(actions, dispatch);
  return {
    handleIncrement: () => {
      dispatch(actions.increment())
    },
    handleDecrement: () => {
      dispatch(actions.decrement())
    },
    handleSetColor: (color) => {
      dispatch(actions.setColor(color))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);