import { FriendRequestStyled } from "./style"

export const FriendRequest = () => {

    return (
        <FriendRequestStyled className="sectionFriends">
            <div className="request">
                <div className="requestHeader">
                    <h3>Request</h3>
                    <p>3</p>
                </div>
                <ul>
                    <li>
                        <div className="owner">
                            <img src="https://i0.wp.com/png.gratis/imagem/5909f389-12ea-4f7e-a156-9da14735b3aa-imagem-de-perfil-300x300-170408.png?&resize=256%2C256&ssl=1" alt="foto de perfil" />
                            <p><b>Bianca Silva</b> Enviou uma solicitação de amizade para você</p>
                        </div>
                        <div className="buttons">
                            <button className="refuse">Recusar</button>
                            <button className="accept">Aceitar</button>
                        </div>
                    </li>
                    <li>
                        <div className="owner">
                            <img src="https://w7.pngwing.com/pngs/921/568/png-transparent-twitch-music-video-others-miscellaneous-music-video-fictional-character.png" alt="foto de perfil" />
                            <p><b>João Silva</b> Enviou uma solicitação de amizade para você</p>
                        </div>
                        <div className="buttons">
                            <button className="refuse">Recusar</button>
                            <button className="accept">Aceitar</button>
                        </div>
                    </li>

                </ul>
            </div>
        </FriendRequestStyled>
    )
}