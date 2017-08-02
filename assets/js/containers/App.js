import React, { Component } from "react";
import { connect } from "react-redux";
import ListMessages from "../components/ListMessages";
import Actions from "../actions";

function App(props) {
  const { messages, sendMessage, started, startChat } = props;
  if (!started) {
    console.log("Chat not started. Starting it right now.");
    startChat();
  }
  let input;
  return (
    <div>
      <ListMessages messages={messages} />
      <input type="text" ref={node => input = node} />
      <button
        onClick={() => {
          sendMessage(input.value);
          input.value = "";
        }}
      >
        SEND
      </button>
    </div>
  );
}

export const AppContainer = connect(
  function mapStateToProps(state) {
    return {
      messages: state.chat.get("messages"),
      started: state.chat.get("started")
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      sendMessage: message => dispatch(Actions.sendMessage(message)),
      startChat: () => dispatch(Actions.startChat())
    };
  }
)(App);

export default AppContainer;
