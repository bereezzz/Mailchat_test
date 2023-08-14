export interface IPage{
    title?: string
}
interface lastMessage{
    created_at: string,
    user_id: string,
    user_name: string,
    user_surname: string,
    you: boolean,
    message: string
}
interface users{
    id: string,
    name: string,
    surname: string,
    avatar: string,
    you: boolean
}
export interface chatItemListProps{
    id:string,
    created_at: number,
    title: string,
    avatar: string,
    private: boolean,
    last_message: lastMessage,
    count_unread: number,
    users: users[],
}
export interface messagesProps{
    
        id: string,
        created_at: number,
        user: users
        message: string,
        is_new: boolean
    
}