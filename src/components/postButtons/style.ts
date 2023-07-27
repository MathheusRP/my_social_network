import styled from "styled-components";

export const PostButtonsStyle = styled.div`
    border-top: solid 2px var(--grey_1);
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .buttons {
        font-size: 1rempx;
        display: flex;
        justify-content: space-around;
        gap: 30px;

        .buttons {
            flex-direction: column;
            display: flex;
            align-items: center;
            gap: 5px;
            color: var(--grey_0);
            font-size: 24px;
            cursor: pointer;
            transition: 0.5s;

            &:hover{
                color: var(--color1);
                transform: scale(1.2);
                transition: 0.5s;
            }
        }
    }

    .postInfo {
        border-top: solid 2px var(--grey_1);
        padding-top: 5px;
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
        gap: 3px;
        color: var(--grey_1);
        cursor: pointer;
    }

`