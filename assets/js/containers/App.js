import React, { Component } from "react";
import { connect } from "react-redux";
import ListMessages from "../components/ListMessages";
import Actions from "../actions";
import { Input, Card } from "antd";
import "antd/dist/antd.css";

function App(props) {
  const { messages, sendMessage, started, startChat } = props;
  if (!started) {
    console.log("Chat not started. Starting it right now.");
    startChat();
  }
  return (
    <div>
      <ListMessages messages={messages} />
      <Input
        type="text"
        onPressEnter={e => {
          sendMessage(e.target.value);
          e.target.value = "";
        }}
      />
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
