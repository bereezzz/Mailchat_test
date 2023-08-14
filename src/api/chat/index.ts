import {wrapper} from "../../utils/wrapper";





export const getChatList = () => {
    return wrapper("get", `https://api.lenzaos.com/chat.get?offset=0&limit=20`)
}
export const getMessages = (id:string) => {
    return wrapper("get", `https://api.lenzaos.com/message.get?chat_id=${id}&offset=0&limit=20`)
}
