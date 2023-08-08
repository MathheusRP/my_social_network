import { createContext, useState, ReactNode } from "react";
import { IPost } from "../types/post";

export const UserContext = createContext({} as IUserContext)

interface IUserContext {
    isThePhotoOpen: string
    setIsThePhotoOpen: any
    postOpen: IPost | undefined
    setPostOpen: any
}

interface IUserProviderProps {
    children: ReactNode
}

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [isThePhotoOpen, setIsThePhotoOpen] = useState<string>("auto")
    const [postOpen, setPostOpen] = useState<IPost | undefined>()

    return (
        <UserContext.Provider value={{ isThePhotoOpen, setIsThePhotoOpen, postOpen, setPostOpen }}>
            {children}
        </UserContext.Provider>
    )
}