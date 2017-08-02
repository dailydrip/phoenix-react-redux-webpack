// @flow
import { Model, MessageType } from "./types";
import { List } from "immutable";
import { combineReducers } from "redux";
const init = new Model();

type ActionType = "SEND_MESSAGE";
console.log("App");

function mainReducer(
  model: Model = init,
  action: { type: ActionType, payload: Object }
) {
  switch (action.type) {
    case "SET_START_CHAT":
      return setStartChat(model, action.payload);
    case "GOT_MESSAGE":
      return gotMessage(model, action.payload);
    default:
      return model;
  }
}

function setStartChat(model, payload) {
  return model.setIn(["started"], true);
}

function gotMessage(model, payload) {
  if (payload) {
    return model.updateIn(["messages"], messages => {
      return messages.push(new MessageType({ text: payload.message }));
    });
  } else {
    return model;
  }
}

const phoenixApp = combineReducers({
  chat: mainReducer
});

export default phoenixApp;
