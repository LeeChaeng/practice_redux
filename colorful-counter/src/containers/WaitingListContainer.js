import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as waitingActions from "../store/modules/waiting";
import WaitingList from "../components/WaitingList";
import { connect } from "react-redux";

const mapStateToProps = ({ waiting }) => ({
  input: waiting.input,
  list: waiting.list,
});

const mapDispatchToProps = (dispatch) => ({
  WaitingActions: bindActionCreators(waitingActions, dispatch),
});

class WaitingListContainer extends Component {
  // 인풋 변경 이벤트
  handleChange = (e) => {
    const { WaitingActions } = this.props;
    WaitingActions.changeInput(e.target.value);
  };
  //등록 이벤트
  handleSubmit = (e) => {
    e.preventDefault();
    const { WaitingActions, input } = this.props;
    WaitingActions.create(input);
    WaitingActions.changeInput("");
  };
  //입장
  handleEnter = (id) => {
    const { WaitingActions } = this.props;
    WaitingActions.enter(id);
  };
  //나가기
  handleLeave = (id) => {
    const { WaitingActions } = this.props;
    WaitingActions.leave(id);
  };
  render() {
    const { input, list } = this.props;
    return (
      <WaitingList
        input={input}
        waitingList={list}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onEnter={this.handleEnter}
        onLeave={this.handleLeave}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaitingListContainer);
