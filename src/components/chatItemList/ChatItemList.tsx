import React, { FC, useState, useEffect } from "react";
// import { IPage } from "../../interface/page";
import { Avatar } from "../Avatar";
import "./ChatItemList.css";
interface card {
  avatarUrl: string;
  name: string;
  massage: string;
  time: number
  setChatName:()=>void
  setIdChat:()=>void
  selectedChat: string
  idChat:string
}

export const ChatItemList: React.FC<card> = ({
  avatarUrl,
  name,
  massage,
  time,
  setChatName,
  setIdChat,
  selectedChat,
  idChat
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
    <div className={selectedChat===idChat ?"card cardSelected " :"card"} onClick={()=>{setChatName(); setIdChat()}}>
      <Avatar src={avatarUrl}></Avatar>
      <div className="cardInfo">
        <div className="cardInfoFirstRow">
          <div className="name">{name}</div>
          <div className="time">{timeC}</div>
        </div>
        <div className="cardInfoSecondRow">{massage}</div>
      </div>
    </div>
  );
};
