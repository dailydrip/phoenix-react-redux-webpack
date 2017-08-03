// @flow
import { Record, List } from "immutable";
import MessageType from "./MessageType";

export default class Model
  extends Record({
    messages: List(),
    started: false
  }) {
  messages: List<MessageType>;
  started: boolean;
}
