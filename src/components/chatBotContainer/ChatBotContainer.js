import React, { useState } from "react";
import Avatar from "../elementalComponents/avatar/Avatar";

const ChatBotContainer = ({editorFn, value}) => {
  let [chatList, setChatList] = useState([]);
  let [chatCount, setChatCount] = useState(0);
  let [botList,  setBotList] = useState([]);

  const handleInputText = (event) => {
    console.log(event.target.value);
    setChatList([...chatList, event.target.value]);
    setBotList([...botList, (new Function(`return ${value}`)())(event.target.value)])
    setChatCount(chatCount+1);
    event.target.value = "";
  };

  return (
    <div className="chatbot-container">
      <div className="chat-container">
        {!!chatList[0] &&
          chatList.map((chat, index) => {
            return (
              <div className="chat" key={index}>
                <div className="chat-input">
                    <Avatar src="https://reqres.in/img/faces/2-image.jpg"  />
                    <div className="message">{chatList[index]}</div>
                </div>
                <div className="chat-output">
                    <div className="message">{botList[index]}</div>
                    <Avatar src="https://reqres.in/img/faces/2-image.jpg"  />
                </div>
              </div>
            );
          })}
      </div>
      <div className="input-container">
        <input
          onKeyDown={(event) =>
            event.keyCode === 13 ? handleInputText(event) : null
          }
          type="text"
          className="text-input"
          placeholder="Type message here..."
        />
      </div>
    </div>
  );
};

export default ChatBotContainer;
