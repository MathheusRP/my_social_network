import { PostOpenStyled } from "./styled";

import { AiFillLike, AiOutlineSend, AiOutlineCloseCircle } from "react-icons/ai"
import { BsFillEmojiLaughingFill } from "react-icons/bs"

import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt, AiFillCaretDown } from "react-icons/ai"

import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/userContext"
import { useContext, useState } from "react"

export const Photo = () => {

    const { setIsThePhotoOpen, postOpen } = useContext(UserContext)
    const navigate = useNavigate()

    const closeImage = () => {
        setIsThePhotoOpen("auto")
        navigate(-1)
    }

    // const [noImage, setNoImage] = useState<string>("haveImage")

    // useEffect(() => {
    //     if (postOpen?.img) {
    //         setNoImage("haveImage")
    //     } else {
    //         setNoImage("noImage")
    //     }
    // }, [postOpen?.img])

    const [infoStatus, setInfoStatus] = useState<string>("visible")
    const [infoDisplay, setInfoDisplay] = useState<string>("flex")

    const hidenInfo = (e: any) => {
        if (e.target.localName === "div") {

            if (infoStatus === "visible") {
                setInfoStatus("hidden")
                setTimeout(() => {
                    setInfoDisplay("none")
                }, 900);
            } else {
                setInfoStatus("visible")
                setInfoDisplay("flex")
            }
        }
    }

    const [commentStatus, setCommentStatus] = useState<string>("close")
    const [commentDisplay, setCommentDisplay] = useState<string>("none")

    const commentStatusFunction = () => {
        if (commentDisplay === "open") {
            setCommentStatus("close")
            setTimeout(() => {
                setCommentDisplay("none")
            }, 900);
        } else {
            setCommentStatus("open")
            setCommentDisplay("open")
        }
    }

    return (
        <PostOpenStyled>
            {postOpen ? (
                <>
                    <div className="postContent">
                        <div id="img" onClick={(e) => hidenInfo(e)} className="imageContainer">
                            {/* <img src="https://fusne.com/wp-content/uploads/2023/06/lofi-girl-fusne.jpg" alt="teste" /> */}
                            {postOpen.img ? (<img className="postImage" src={postOpen.img} alt="teste" />) : (<></>)}

                        </div>
                        <AiOutlineCloseCircle className={`icon ${commentStatus} ${infoStatus}`} onClick={() => closeImage()} />
                        <div onClick={(e) => hidenInfo(e)} className="detailAndComments">
                            <section id="detail" className={`postDetail ${infoDisplay} ${infoStatus}`}>
                                <section className="info">
                                    <div className="owner">
                                        <img src="https://lh3.googleusercontent.com/-kSnNyDkgd2E/AAAAAAAAAAI/AAAAAAAABcM/DimvpU0bUPY/photo.jpg" alt="foto de perfil" />
                                        <div>
                                            <h3>{postOpen.owner.name}</h3>
                                            <p>{postOpen.date}</p>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>{postOpen.description}</p>

                                    </div>
                                </section>
                                <section className="likesEndComment">
                                    <div className="likesAndCommentsInfo">
                                        <p>{postOpen.likes} likes</p>
                                        <p onClick={() => commentStatusFunction()}>{postOpen.comments?.length} Comentarios</p>
                                    </div>
                                    <div className="button">
                                        <div>
                                            <AiOutlineLike className="icons" />
                                            <p>Curti</p>
                                        </div>
                                        <div>
                                            <AiOutlineComment className="icons" />
                                            <p onClick={() => commentStatusFunction()}>Comentar</p>
                                        </div><div>
                                            <AiOutlineShareAlt className="icons" />
                                            <p>Compartilhar</p>
                                        </div>
                                    </div>
                                </section>
                            </section>
                            <section id="comment" className={`comment ${commentStatus} ${commentDisplay}`}>
                                <button onClick={() => commentStatusFunction()} type="button"><AiFillCaretDown /></button>
                                <div className="filter">
                                    <select name="" id="">
                                        <option value="value-1">Mais relevante</option>
                                        <option value="value-2">Mais recentes</option>
                                        <option value="value-3">Todos</option>
                                    </select>
                                </div>
                                <ul>
                                    {
                                        postOpen.comments?.map((comment, index) => {
                                            return (
                                                <li key={index}>
                                                    <img src={comment.image} alt={`Foto de ${comment.name}`} />
                                                    <div className="commentContainer">
                                                        <h4 className="name">{comment.name}</h4>
                                                        <p >{comment.comment}</p>
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
                                    <span>Mais comentarios</span>
                                </ul>
                                <div className="input">
                                    <input type="text" placeholder="Comentar..." />
                                    <div>
                                        <BsFillEmojiLaughingFill className="inputIcon" />
                                        <AiOutlineSend className="inputIcon" />
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </>
            ) : (
                <></>
            )}
        </PostOpenStyled>
    )
}
