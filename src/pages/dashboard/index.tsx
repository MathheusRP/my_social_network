import { Header } from "../../components/header"
import { DashboardStyled } from "./style"
import { Feed } from "../../components/feed"
import { FriendRequest } from "../../components/friendRequest"
import { FriendsList } from "../../components/friendsList"

export const Dashboard = () => {

    return (
        <DashboardStyled>
            <Header />
            <section className="dashboardBody">
                <section className="menu">

                </section>
                <section className="feed">
                    <Feed />
                </section>
                <section className="friends">
                    <FriendRequest />
                    <FriendsList />
                </section>
            </section>
        </DashboardStyled>
    )
}