import { Header } from "../../components/header"
import { HomeStyle } from "./style"
import { Feed } from "../../components/feed"
import { FriendRequest } from "../../components/friendRequest"
import { FriendsList } from "../../components/friendsList"
import { MenuInDashboard } from "../../components/menuInDashboard"

export const Home = () => {

    return (
        <HomeStyle>
            <Header />
            <section className="dashboardBody">
                <section className="menu">
                    <MenuInDashboard />
                </section>
                <section className="feed">
                    <Feed />
                </section>
                <section className="friends">
                    <FriendRequest />
                    <FriendsList />
                </section>
            </section>
        </HomeStyle>
    )
}