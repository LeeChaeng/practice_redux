import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";

const Detail = ({ todo, onButtonClick }) => {
  return (
    <>
      <h1>{todo?.text}</h1>
      <h5>created At : {todo?.id}</h5>
      <button onClick={onButtonClick}>DEL</button>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { todo: state.find((todo) => todo.id === parseInt(id)) };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    onButtonClick: () => {
      dispatch(actionCreator.deleteTodo(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
