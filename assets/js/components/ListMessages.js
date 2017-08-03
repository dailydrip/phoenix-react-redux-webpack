import React from "react";
import { Card, Icon } from "antd";
import "antd/dist/antd.css";

function ListMessages(props) {
  const { messages } = props;

  const renderMessages = messages.map((message, i) => {
    return (
      <Card key={i}>
        <Icon type="message" style={{ fontSize: 16, color: "#08c" }} />
        {message.text}
      </Card>
    );
  });
  return <div className="messages-container">{renderMessages}</div>;
}

export default ListMessages;
