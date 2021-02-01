import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "../component/Todo";
import { actionCreator } from "../store";

const Home = ({ toDos, addTodo }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    addTodo(text);
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(actionCreator.addTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
