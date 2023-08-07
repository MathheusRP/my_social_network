import { Header } from "../../components/header"
import { HomeStyle } from "./style"
import { Feed } from "../../components/feed"
import { FriendRequest } from "../../components/friendRequest"
import { FriendsList } from "../../components/friendsList"
import { MenuInDashboard } from "../../components/menuInDashboard"
import { Outlet } from "react-router-dom"

import { useState } from "react"

export const Home = () => {

    const [isThePhotoOpen, setIsThePhotoOpen] = useState<string>("photoClose")

    return (
        <HomeStyle>
            <Header />
            <section className={`dashboardBody ${isThePhotoOpen}`}>
                <section className="menu">
                    <MenuInDashboard />
                </section>
                <section className="feed">
                    <Feed setIsThePohotoOpen={setIsThePhotoOpen} />
                    <Outlet />
                </section>
                <section className="friends">
                    <FriendRequest />
                    <FriendsList />
                </section>
            </section>
        </HomeStyle>
    )
}