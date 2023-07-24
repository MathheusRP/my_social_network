import { PostButtonsStyle } from "./style";
import { AiFillLike, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai'

export const PostButtons = () => {

    return (
        <PostButtonsStyle>
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
                <p>120 Likes</p>
                <p>Ver todos os 35 comentários</p>
            </div>
        </PostButtonsStyle>
    )
}