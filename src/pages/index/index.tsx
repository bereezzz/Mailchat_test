import React, { FC, useState, useEffect } from "react";
import { IPage } from "../../interface/page";
import { ChatItemList } from "../../components/chatItemList/ChatItemList";
import { getChatList } from "../../api/chat";
import { chatItemListProps } from "../../interface/page";
import { Chat } from "../../components/Chat/Chat";
import "./chats.css";
let isMobile = window.innerWidth < 700 ? true : false

export const PageIndex: FC<IPage> = (props: IPage) => {
  const { title } = props;
  const [width, setWidth] = useState(window.innerWidth);
  const [chats, setChats] = useState<chatItemListProps[]>([]);
  const [nameChat, setChatName] = useState("");
  const [idChat, setIdChat] = useState("0");
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    isMobile = window.innerWidth < 700 ? true : false;
  };

  async function GetChatList() {
    try {
      const response = await getChatList();
      setChats(response.response);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    GetChatList();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  if (!isMobile)
    return (
      <div style={{ width: "100%", height: "100vh", display: "flex" }}>
        <div
          style={{
            width: "360px",
            minWidth: "360px",
            height: "100vh",
            overflow: "auto",
          }}
          className="no-scrollbar"
        >
        <div className="allchats">All chats</div>
          {chats.map((card) => {
            return (
              <ChatItemList
                avatarUrl={card.avatar}
                name={`${card.last_message.user_name} ${card.last_message.user_surname}`}
                massage={card.last_message.message}
                time={card.created_at}
                setChatName={() => setChatName(card.title)}
                setIdChat={() => setIdChat(card.id)}
                selectedChat = {idChat}
                idChat={card.id}
              ></ChatItemList>
            );
          })}
        </div>
        <div
          style={{
            maxWidth: "calc(100% - 360px)",
            minWidth: "calc(700px - 360px)",
            width: "100%",
            height: "100%",
          }}
        >
          {idChat !== "0" ? (
            <Chat nameChat={nameChat} id={idChat}></Chat>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  else
    return (
      <div>
        Простите! Но для мобильных телефонов у нас есть мобильное приложение!
      </div>
    );
};
