import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";

const Todo = ({ text, onButtonClick }) => {
  return (
    <li>
      {text}
      <button onClick={onButtonClick}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onButtonClick: () => dispatch(actionCreator.deleteTodo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
