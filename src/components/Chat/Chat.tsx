import React, { FC, useState, useEffect } from "react";
import { Header } from "../Header/Header";
import EditableTextArea from "../EditableTextArea/EditableTextArea";
import { Time } from "../time/Time";
import { Message } from "../message/Message";
import { getMessages } from "../../api/chat";
import { messagesProps } from "../../interface/page";
import "./chat.css";
interface Chat {
  nameChat: string;
  id: string;
}

export const Chat: FC<Chat> = ({ nameChat, id }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<messagesProps[]>([]);
  async function GetMessages() {
    try {
      const response = await getMessages(id);
      // var copy = response.response.sort((a:messagesProps, b:messagesProps) => a.created_at - b.created_at);

      setMessages(response.response.reverse());
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    GetMessages();
  }, [id]);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* тестовое изменение для пейджес */}
      <Header nameChat={nameChat}/> 
      <div
        style={{
          height: "100%",
          overflow: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
        className="no-scrollbar"
      >
        {messages.map((m, index) => {
          var check = false;
          const timestamp = m.created_at;
          const date = new Date(timestamp * 1000);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          const formattedDateTime = `${year}-${month
            .toString()
            .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
          console.log("111111", formattedDateTime);
          if (messages.length - 1 > index) {
            const timestamp2 = messages[index + 1].created_at;
            const date2 = new Date(timestamp2 * 1000);
            const year2 = date2.getFullYear();
            const month2 = date2.getMonth() + 1;
            const day2 = date2.getDate();
            const formattedDateTime2 = `${year2}-${month2
              .toString()
              .padStart(2, "0")}-${day2.toString().padStart(2, "0")}`;
            console.log("2222222", formattedDateTime2);
            if (formattedDateTime !== formattedDateTime2) {
              check = true;
            }
          }

          return (
            <>
              {check && <Time value={m.created_at}></Time>}
              {m.is_new && <div className="newM">Новое сообщение</div>}
              <Message
                textMessage={m.message}
                name={`${m.user.name} ${m.user.surname}`}
                avatarUrl={m.user.avatar}
                time={m.created_at}
                you={m.user.you}
              ></Message>
            </>
          );
        })}
      </div>

      <EditableTextArea value={value} onChange={setValue}></EditableTextArea>
    </div>
  );
};
