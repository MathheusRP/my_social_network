import { MessagesStyled } from "./style";
import { Header } from "../../components/header";
import { friendList, IfriendList } from "../../data/friendList";

import { IoIosArrowBack } from "react-icons/io"
import { BsThreeDotsVertical } from "react-icons/bs"
import { ImSearch } from "react-icons/im"
import { BsImage, BsFillSendFill } from "react-icons/bs"

import { useState } from "react";

export const Messages = () => {

    const [statusMessageContainer, setStatusMessageContainer] = useState<string> ("visible")

    return (
        <MessagesStyled>
            <div className="header"><Header /></div>
            <section className="messagesBody">
                <section className="friendsList">
                    <div className="search">
                        <input type="text" placeholder="Procurar" />
                        <ImSearch className="icon" />
                    </div>
                    <div className="list">
                        <ul>
                            {
                                friendList.map((frind: IfriendList, index: number) => {
                                    return (
                                        <li onClick={() => setStatusMessageContainer("visible")} key={index}>
                                            <div className="friendImage">
                                                <img src={frind.image} alt={`foto de ${frind.name}`} />
                                                {frind.online ? (<span className="status online"></span>) : <span className="status offline"></span>}
                                            </div>
                                            <div className="friendName">
                                                <p className="name">{frind.name}</p>
                                                {frind.online ? (<span>Online</span>) : (<span>Offline</span>)}
                                            </div>
                                            <BsThreeDotsVertical className="icon" />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
                <section className={`messageContainer ${statusMessageContainer}`}>
                    <div className="messageHeader">
                        <div className="person">
                            <IoIosArrowBack className="icon" onClick={() => setStatusMessageContainer("hidden")}/>
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
                        </ul>
                    </section>
                    <section className="toSend">
                        <div className="inputSection">
                            <input type="text" placeholder="Mensagem..." />
                            <div className="icons">
                                <BsImage className="icon" />
                                <BsFillSendFill className="icon" />
                            </div>
                        </div>

                    </section>
                </section>
                <section className="messageOwner">
                    <img src="https://focalizando.com.br/sites/default/files/styles/image_schema/public/2022-11/fotos-para-perfil-masculino-tres-dicas-fundamentais-para-transmitir-imagem-que-deseja.jpg?itok=AA5Liz2j" alt="Foto de Luiz" />
                    <h3>Luiz Silva</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </section>
            </section>

        </MessagesStyled>
    )
}