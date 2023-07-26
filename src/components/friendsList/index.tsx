import { FriendsListStyle } from "./style";

import { ImSearch } from "react-icons/im"
import { CiMenuKebab } from "react-icons/ci"

export const FriendsList = () => {

    return (
        <FriendsListStyle className="sectionFriends">
            <section className="friendsListHeader">
                <h3>Amigos</h3>
                <p>15</p>
            </section>
            <section className="list">
                <div className="search">
                    <ImSearch className="icon" />
                    <input type="text" placeholder="Procurar" />
                </div>
                <ul>
                    <li>
                        <span>
                            <img src="https://i0.wp.com/png.gratis/imagem/5909f389-12ea-4f7e-a156-9da14735b3aa-imagem-de-perfil-300x300-170408.png?&resize=300%2C300&ssl=1" alt="foto de perfil" />
                            <span className="status online"></span>
                        </span>
                        <div className="name">
                            <h4>Luiza Souza</h4>
                            <span className="status">Online</span>
                        </div>
                        <CiMenuKebab className="icon" />
                    </li>
                    <li>
                        <span>
                            <img src="https://i0.wp.com/png.gratis/imagem/5909f389-12ea-4f7e-a156-9da14735b3aa-imagem-de-perfil-300x300-170408.png?&resize=300%2C300&ssl=1" alt="foto de perfil" />
                            <span className="status online"></span>
                        </span>
                        <div className="name">
                            <h4>Luiza Souza</h4>
                            <span className="status">Online</span>
                        </div>
                        <CiMenuKebab className="icon" />
                    </li>
                    <li>
                        <span>
                            <img src="https://i0.wp.com/png.gratis/imagem/5909f389-12ea-4f7e-a156-9da14735b3aa-imagem-de-perfil-300x300-170408.png?&resize=300%2C300&ssl=1" alt="foto de perfil" />
                            <span className="status online"></span>
                        </span>
                        <div className="name">
                            <h4>Luiza Souza</h4>
                            <span className="status">Online</span>
                        </div>
                        <CiMenuKebab className="icon" />
                    </li>
                    <li>
                        <span>
                            <img src="https://i0.wp.com/png.gratis/imagem/5909f389-12ea-4f7e-a156-9da14735b3aa-imagem-de-perfil-300x300-170408.png?&resize=300%2C300&ssl=1" alt="foto de perfil" />
                            <span className="status offline"></span>
                        </span>
                        <div className="name">
                            <h4>Luiza Souza</h4>
                            <span className="status">Online</span>
                        </div>
                        <CiMenuKebab className="icon" />
                    </li>
                    <li>
                        <span>
                            <img src="https://i0.wp.com/png.gratis/imagem/5909f389-12ea-4f7e-a156-9da14735b3aa-imagem-de-perfil-300x300-170408.png?&resize=300%2C300&ssl=1" alt="foto de perfil" />
                            <span className="status offline"></span>
                        </span>
                        <div className="name">
                            <h4>Luiza Souza</h4>
                            <span className="status">Online</span>
                        </div>
                        <CiMenuKebab className="icon" />
                    </li>
                </ul>
            </section>
        </FriendsListStyle>
    )
}