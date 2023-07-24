import { FeedStyle } from "./style"
import { PostButtons } from "../postButtons"

import { AiFillLike, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai'

export const Feed = () => {

    return (
        <FeedStyle>
            <section className="newPost">
                <p>O que há de novo, Matheus ?</p>
                <p className="post">Novo Post</p>
            </section>
            <section className="postList">
                <ul>
                    <li className="post">
                        <div className="owner">
                            <img src="https://lh3.googleusercontent.com/-kSnNyDkgd2E/AAAAAAAAAAI/AAAAAAAABcM/DimvpU0bUPY/photo.jpg" alt="foto de perfil" />
                            <div>
                                <p className="name">Larissa</p>
                                <p>20 de Junho as 13:30</p>
                            </div>
                        </div>
                        <div className="content">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className="imageContainer">
                                <img src="https://i.pinimg.com/564x/e2/b5/c1/e2b5c1c4bbc215fd33ddc1b6dc7acffc.jpg" alt="Foto" />
                            </div>
                        </div>
                        <PostButtons />
                    </li>
                    <li className="post">
                        <div className="owner">
                            <img src="https://flowgames.gg/wp-content/uploads/2023/02/l-intro-1657287618-1044x587.jpg" alt="foto de perfil" />
                            <div>
                                <p className="name">Matheus</p>
                                <p>20 de Junho as 13:31</p>
                            </div>
                        </div>
                        <div className="content">
                            <p>
                                Bom dia
                            </p>
                            {/* <div className="imageContainer">
                                <img src="https://e0.pxfuel.com/wallpapers/224/278/desktop-wallpaper-nobody-loves-me-sad-lofi-mix-lofi-couple.jpg" alt="Foto" />
                            </div> */}
                        </div>
                        <PostButtons />
                    </li>
                    <li className="post">
                        <div className="owner">
                            <img src="https://flowgames.gg/wp-content/uploads/2023/02/l-intro-1657287618-1044x587.jpg" alt="foto de perfil" />
                            <div>
                                <p className="name">Matheus</p>
                                <p>20 de Junho as 13:32</p>
                            </div>
                        </div>
                        <div className="content">
                            <p>

                            </p>
                            <div className="imageContainer">
                                <img src="https://e0.pxfuel.com/wallpapers/224/278/desktop-wallpaper-nobody-loves-me-sad-lofi-mix-lofi-couple.jpg" alt="Foto" />
                            </div>
                        </div>
                        <PostButtons />
                    </li>
                </ul>
            </section>
        </FeedStyle>
    )
}