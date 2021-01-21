import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrement, increment } from "../store/modules/counter";

const mapStateToProps = ({ counter }) => ({
  color: counter.color,
  number: counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    const { color, number } = this.props;
    return (
      <Counter
        color={color}
        value={number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
