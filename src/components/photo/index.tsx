import { PhotoStyle } from "./style"
import { PostButtons } from "../postButtons";

import { AiFillLike, AiOutlineSend, AiOutlineCloseCircle } from "react-icons/ai"
import { BsFillEmojiLaughingFill } from "react-icons/bs"

import { useNavigate } from "react-router-dom";


export const Photo = () => {

    const navigate = useNavigate()

    return (
        <PhotoStyle>
            <div className="imgContainer">
                <img src="https://fusne.com/wp-content/uploads/2023/06/lofi-girl-fusne.jpg" alt="foto de perfil" />
                <AiOutlineCloseCircle className="icon" onClick={() => navigate(-1)} />
            </div>
            <section className="postDetail">
                <div className="ownerContainer">
                    <img src="https://lh3.googleusercontent.com/-kSnNyDkgd2E/AAAAAAAAAAI/AAAAAAAABcM/DimvpU0bUPY/photo.jpg" alt="" />
                    <div className="info">
                        <p>Larissa Souza</p>
                        <span>20 de junho as 13:35</span>
                    </div>
                </div>
                <div className="text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div>
                    <PostButtons comments={4} id="1" likes={20} key={2} />
                </div>
                <ul>
                    <li>
                        <img src="https://lh3.googleusercontent.com/-kSnNyDkgd2E/AAAAAAAAAAI/AAAAAAAABcM/DimvpU0bUPY/photo.jpg" alt="foto de perfil" />
                        <div className="commentContainer">
                            <p className="name">Larissa Silva</p>
                            <p className="comment">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <div className="likes">
                            <AiFillLike />
                            <p>6</p>
                        </div>
                        <div className="buttons">
                            <p>Like</p>
                            <p>Comentar</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://lh3.googleusercontent.com/-kSnNyDkgd2E/AAAAAAAAAAI/AAAAAAAABcM/DimvpU0bUPY/photo.jpg" alt="foto de perfil" />
                        <div className="commentContainer">
                            <p className="name">Larissa Silva</p>
                            <p className="comment">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <div className="likes">
                            <AiFillLike />
                            <p>6</p>
                        </div>
                        <div className="buttons">
                            <p>Like</p>
                            <p>Comentar</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://lh3.googleusercontent.com/-kSnNyDkgd2E/AAAAAAAAAAI/AAAAAAAABcM/DimvpU0bUPY/photo.jpg" alt="foto de perfil" />
                        <div className="commentContainer">
                            <p className="name">Larissa Silva</p>
                            <p className="comment">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <div className="likes">
                            <AiFillLike />
                            <p>6</p>
                        </div>
                        <div className="buttons">
                            <p>Like</p>
                            <p>Comentar</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://lh3.googleusercontent.com/-kSnNyDkgd2E/AAAAAAAAAAI/AAAAAAAABcM/DimvpU0bUPY/photo.jpg" alt="foto de perfil" />
                        <div className="commentContainer">
                            <p className="name">Larissa Silva</p>
                            <p className="comment">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <div className="likes">
                            <AiFillLike />
                            <p>6</p>
                        </div>
                        <div className="buttons">
                            <p>Like</p>
                            <p>Comentar</p>
                        </div>
                    </li>
                </ul>
                <section className="newComment">
                    <div>
                        <input type="text" placeholder="Comentar..." />
                        <BsFillEmojiLaughingFill className="icon" />
                        <AiOutlineSend className="icon" />
                    </div>
                </section>
            </section>
        </PhotoStyle>
    )
}

// https://fusne.com/wp-content/uploads/2023/06/lofi-girl-fusne.jpg