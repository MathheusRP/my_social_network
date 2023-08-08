import { PostButtonsStyle } from "./style";
import { AiFillLike, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai'

interface IPostInfo {
    id: string
    likes: number
    comments: number
}

export const PostButtons = ({id, likes, comments}: IPostInfo) => {

    return (
        <PostButtonsStyle id={id}>
            <div className="buttons">
                <div className="buttons">
                    <AiFillLike />

                </div>
                <div className="buttons">
                    <AiOutlineComment />

                </div>
                <div className="buttons">
                    <AiOutlineShareAlt />
                </div>
            </div>
            <div className="postInfo">
                <p>Likes {likes}</p>
                {comments > 0 ? (<p>Ver todos os {comments} comentários</p>): (<p>Sem comentários</p>)}
            </div>
        </PostButtonsStyle>
    )
}