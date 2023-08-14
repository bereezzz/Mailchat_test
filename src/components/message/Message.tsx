import React, { FC, useState, useEffect } from "react";
import "./message.css";
import { Avatar } from "../Avatar";
interface Message {
  textMessage: string;
  name: string;
  avatarUrl: string;
  edited?: boolean;
  time: number;
  you: boolean;

}

export const Message: FC<Message> = ({
  textMessage,
  name,
  avatarUrl,
  edited,
  time,
  you,

}) => {

  const [timeC, setTimeC] = useState("")


  useEffect(() => {
    const timestamp = time;
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedDateTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      setTimeC(formattedDateTime)
  }, []);
  return (
    <div className={!you ? "blockMessage" : "blockMessageYou"}>
      {!you && <Avatar src={`${avatarUrl}`}></Avatar>}
      <div className="textAndName">
        <div className="authMessage">{name}</div>
        <div className="authMessageText">
          <div style={{ whiteSpace: "normal", maxWidth: "600px" }}>
            {textMessage}
          </div>
          <div className="dateEditMessage">
            {/* <div className="edit">Edited</div> */}
            <div className="date">{timeC}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
