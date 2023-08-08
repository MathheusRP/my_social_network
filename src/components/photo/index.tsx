import { PhotoStyle } from "./style"
import { PostButtons } from "../postButtons";

import { AiFillLike, AiOutlineSend, AiOutlineCloseCircle } from "react-icons/ai"
import { BsFillEmojiLaughingFill } from "react-icons/bs"

import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/userContext"
import { useContext, useEffect, useState } from "react"


export const Photo = () => {

    const { setIsThePhotoOpen, postOpen } = useContext(UserContext)
    const navigate = useNavigate()

    const closeImage = () => {
        setIsThePhotoOpen("auto")
        navigate(-1)
    }

    const [noImage, setNoImage] = useState<string>("haveImage")

    useEffect(() => {
        if (postOpen?.img) {
            setNoImage("haveImage")
        } else {
            setNoImage("noImage")
        }
    }, [postOpen?.img])

    return (
        <PhotoStyle>
            {postOpen ? (
                <>
                    <div className={`imgContainer ${noImage}`}>
                        {
                            postOpen.img ? (<img src={postOpen.img} alt="foto de perfil" />) : (<></>)
                        }
                        <AiOutlineCloseCircle className="icon" onClick={() => closeImage()} />
                    </div>
                    <section className={`postDetail ${noImage}`}>
                        <AiOutlineCloseCircle className="close" onClick={() => closeImage()} />
                        <div className="ownerContainer">
                            <img src={postOpen.owner.image} alt={`foto de ${postOpen.owner.name}`} />
                            <div className="info">
                                <p>{postOpen.owner.name}</p>
                                <span>{postOpen.date}</span>
                            </div>
                        </div>
                        <div className="text">
                            <p>{postOpen.description}</p>
                        </div>
                        <div>
                            <PostButtons comments={Number(postOpen.comments?.length)} id="1" likes={postOpen.likes} key={2} />
                        </div>

                        <ul>
                            {
                                postOpen.comments?.map((comment, index) => {
                                    return (
                                        <li key={index}>
                                            <img src={comment.image} alt={`foto de ${comment.name}`} />
                                            <div className="commentContainer">
                                                <p className="name">{comment.name}</p>
                                                <p className="comment">{comment.comment}</p>
                                            </div>
                                            <div className="likes">
                                                <AiFillLike />
                                                <p>{comment.likes}</p>
                                            </div>
                                            <div className="buttons">
                                                <p>Like</p>
                                                <p>Comentar</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                            {/* <li>
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
                            </li> */}
                            {/* <li>
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
                            </li> */}
                        </ul>
                        <section className="newComment">
                            <div>
                                <input type="text" placeholder="Comentar..." />
                                <BsFillEmojiLaughingFill className="icon" />
                                <AiOutlineSend className="icon" />
                            </div>
                        </section>
                    </section>
                </>
            ) : (
                <></>
            )}
        </PhotoStyle>
    )
}

// https://fusne.com/wp-content/uploads/2023/06/lofi-girl-fusne.jpg