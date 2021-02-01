import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreator } from "../store";

const Todo = ({ text, onButtonClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
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
