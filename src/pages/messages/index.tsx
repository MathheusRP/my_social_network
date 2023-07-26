import { MessagesStyled } from "./style";
import { Header } from "../../components/header";
import { IoIosArrowBack } from "react-icons/io"
import { BsThreeDotsVertical } from "react-icons/bs"

export const Messages = () => {

    return (
        <MessagesStyled>
            <Header />
            <section className="messagesBody">
                <section className="friendsList">

                </section>
                <section className="messageContainer">
                    <div className="messageHeader">
                        <div className="person">
                            <IoIosArrowBack className="icon" />
                            <img src="https://st3.depositphotos.com/15317184/31994/v/450/depositphotos_319943812-stock-illustration-male-avatar-icon-suitable-for.jpg" alt="foto de perfil" />
                            <h3>Luiz Silva</h3>
                        </div>
                        <BsThreeDotsVertical className="icon" />
                    </div>
                    <section className="messagesList">
                        <ul>
                            <li className="date">
                                <span>21 de Março de 20203</span>
                            </li>
                            <li className="owner message">
                                <p>Olá, bom dia</p>
                                <span>10:18</span>
                            </li>
                            <li className="message">
                                <p>Oi</p>
                                <span>10:20</span>
                            </li>
                            <li className="message">
                                <p>Amanhã falo com você</p>
                                <span>10:21</span>
                            </li>
                            <li className="date">
                                <span>22 de Março de 20203</span>
                            </li>
                            <li className="message">
                                <p>Oi, boa tarde</p>
                                <span>12:35</span>
                            </li>
                            <li className="owner message">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <span>10:18</span>
                            </li>
                            <li className="owner message">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <span>10:18</span>
                            </li>
                            <li className="message">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <span>10:18</span>
                            </li>
                            <li className="message">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <span>10:18</span>
                            </li>
                            <li className="owner message">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <span>10:18</span>
                            </li>
                            <li className="owner message">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <span>10:18</span>
                            </li>

                        </ul>
                    </section>
                </section>
                <section className="messageOwner">

                </section>
            </section>

        </MessagesStyled>
    )
}