import { Socket } from "phoenix";

const socket = new Socket("/socket", {
  logger: (kind, msg, data) => {
    console.log(`${kind}: ${msg}`, data);
  }
});

socket.connect();

const channel = socket.channel("room:lobby");

channel.join().receive("ok", () => {
  console.log("JOINED");
});

function sendMessage(message) {
  return dispatch => {
    channel.push("new_message", { message: message });
  };
}

function startChat() {
  return dispatch => {
    dispatch(setStartChat());
    channel.on("new_message", params => {
      dispatch(gotMessage(params.message));
    });
  };
}

function setStartChat() {
  return {
    type: "SET_START_CHAT"
  };
}

function gotMessage(message) {
  return {
    type: "GOT_MESSAGE",
    payload: {
      message
    }
  };
}

export default { sendMessage, gotMessage, startChat };
