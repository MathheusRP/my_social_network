import styled from "styled-components";

export const PostOpenStyled = styled.section`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0px;
    left: 0px;
    overflow-x: hidden;
    background-color: var(--grey_0);
    z-index: 10;
    overflow-y: hidden;

    .imageContainer {
        z-index: 0;

        img {
            z-index: 10;
        }
    }

    .icon {
        position: absolute;
        top: 15px;
        left: 15px;
        color: var(--grey_3);
        height: 50px;
        width: 50px;
        padding: 5px;
        background-color: rgb(0, 0, 0, 0.4);
        border-radius: 50%;
        opacity: 100%;
        transition: 1s;
        z-index: 1;
        cursor: pointer;

        &.open {
            display: none;
        }

        &.hidden{
            opacity: 0%;
            transition: 1s;
            z-index: -2;
        }
    }

    .postContent {
        height: 100%;
        width: 100%;
        /* border: 4px solid red; */
        display: flex;
        align-items: center;
        justify-content: center;

        .postImage {
            max-width: 100%;
            /* display: none; */
        }
    }

    .detailAndComments {
        height: 100vh;
        width: 100%;
        position: absolute;
        /* bottom: 0px; */
        z-index: 0;

    }

    .postDetail {
        /* height: 100%; */
        width: 100%;
        /* border: 2px solid red; */
        position: absolute;
        opacity: 100%;
        transition: 1s;
        bottom: 0px;
        transition: 1s;

        &.none {
            display: none;

        }

        &.hidden {
            bottom: -200px;
            opacity: 0%;
            transition: 1s;
        }

        .info {
            padding: 10px 0px;
            position: absolute;
            min-height: 150px;
            max-height: 300px;
            width: 100%;
            background-color: rgb(0, 0, 0, 0.5);
            bottom: 100px;
            display: flex;
            align-items: start;
            padding: 15px;
            flex-direction: column;
            gap: 15px;
            overflow-y: auto;

            .owner {
                display: flex;
                gap: 15px;
                align-items: center;
                
                img {
                    height: 50px;
                    width: 50px;
                    border-radius: 50%;
                }

                div {
                    color: var(--grey_3);
                }
            }

            .text {
                color: var(--grey_3);
                line-height: 22px;
                letter-spacing: 0.5px;
            }

            .date {
                color: var(--grey_3);
            }
        }

        .likesEndComment {
            height: 100px;
            width: 100%;
            position: absolute;
            bottom: 0px;
            padding: 10px 15px;
            background-color: rgb(0, 0, 0, 0.5);
            display: flex;
            flex-direction: column;
            gap: 10px;

            .likesAndCommentsInfo {
                display: flex;
                justify-content: space-between;
                color: var(--grey_3);
            }

            .button {
                color: var(--grey_3);
                display: flex;
                justify-content: space-between;
                border-top: 2px solid var(--grey_3);
                padding-top: 10px;
                cursor: pointer;
               
                div {
                    display: flex;
                    gap: 10px;
                    align-items: center;

                    .icons {
                        font-size: 30px;
                    }
                }  
            }
        }
    }

    .comment {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0px;
        display: flex;
        background-color: var(--grey_2);
        gap: 20px;
        z-index: 10;

        &.open {
            animation-name: open;
            animation-duration: 1s;
        }

        &.close {
            animation-name: close;
            animation-duration: 1s;
        }

        &.none {
            display: none;
        }

        button {
            height: 40px;
            font-size: 20px;
            color: var(--color1);
            box-shadow: 0px 0px 15px rgb(0, 0, 0, 0.3);
        }

        .filter {
            position: relative;
            margin-top: 10px;
            height: 50px;
            width: 100%;
            padding: 0px 15px;

            select {
                width: 100%;
                height: 50px;
                border: none;
                border-radius: 8px;
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            gap: 40px;
            z-index: 0;
            overflow-y: auto;
            padding-top: 15px;
            padding-bottom: 60px;

            &::-webkit-scrollbar{
                background-color: transparent;
                width: 5px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: var(--color1);
                border-radius: 5px;
            }

            li {
                z-index: 10;
                display: flex;
                position: relative;
                padding: 10px 10px 10px 40px;
                
                /* flex-direction: column; */

                img {
                    width: 60px;
                    height: 60px;
                    position: absolute;
                    left: 10px;
                    border-radius: 50%;
                    border: 4px solid var(--grey_2);
                    align-self: center;
                    object-fit: cover;
                }

                .commentContainer {
                    background-color: var(--color1);
                    padding: 25px 5px 15px 40px;
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    color: var(--grey_2);
                    width: 100%;
                    
                    p {
                        letter-spacing: 0.5px;
                        line-height: 22px;
                    }

                    h4 {
                        font-size: 18px;
                    }
                }

                .likes {
                    position: absolute;
                    right: 30px;
                    padding: 5px 15px;
                    background-color: var(--color1);
                    border: 3px solid var(--grey_2);
                    display: flex;
                    top: -5px;
                    gap: 10px;
                    font-size: 18px;
                    border-radius: 8px;
                    color: var(--grey_2);
                }

                .buttons {
                    position: absolute;
                    bottom: -15px;
                    right: 20px;
                    display: flex;
                    gap: 5px;
                }
            }

            span {
                font-size: 18px;
                margin-left: 20px;
            }
        }

        .input {
            height: 60px;
            background-color: var(--grey_2);
            position: absolute;
            bottom: 0px;
            width: 100%;
            z-index: 25px;
            padding: 10px;
            display: flex;
            align-items: center;

            input {
                width: 100%;
                height: 100%;
                border-radius: 8px 0px 0px 8px;
                border: none;
                padding: 0px 10px;
                font-size: 18px;
                background-color: var(--grey_3);
                outline: none;
            }

            div {
                display: flex;
                gap: 15px;
                background-color: var(--grey_3);
                height: 100%;
                align-items: center;
                padding-right: 10px;
                border-radius: 0px 8px 8px 0px;

                .inputIcon {
                    height: 25px;
                    width: 25px;
                }
            }
        }
    }

    @media (min-width: 1000px) {
        
        .postContent {
            height: 100vh;
            width: 100vw;
            display: grid;
            position: relative;
            grid-template-columns: 60% 40%;
            gap: 20px;
            gap: 0px;
     
        }

        .imageContainer {
            grid-column: 1 / 2;
            position: relative;
            
            display: flex;
            justify-content: center;
        }

        .detailAndComments {
            grid-column: 2 / 2;
            max-height: 100vh;
            overflow-y: scroll;
            min-height: 100vh;   

            
        }

        .postDetail {
            top: 100px;
            bottom: auto;
            display: flex;
            flex-direction: column;
            background-color: var(--grey_2);
            z-index: 30;
            color: var(--grey_0);
            position: relative;
            min-height: 200px;
            height: fit-content;
            

            .info {
                position: relative;
                height: fit-content;
                max-height: fit-content;
            }

            p {
                color: var(--grey_1);
            }

            .icons {
                color: var(--grey_1);
            }

            h3 {
                color: var(--grey_1);
            }

            .likesEndComment {
                background-color: var(--grey_2);

                .button {
                    border-color: var(--grey_1);
                }
            }

            .info {
                background-color: var(--grey_2);
            }

            &.none {
                display: flex;
            }
        }

        .comment {
            width: 100%;
            position: relative;
            /* height: fit-content; */
            /* min-height: 80%; */
            height: fit-content;
            
            ul {
                overflow-y: hidden; 
                min-height: 600px;
                /* background-color: aqua; */
                
            }

            .hidden {
                animation: none;
            }

            &.close, &.open{
                animation-name: none;

            }

            padding-top: 20px;

            button {
                display: none;
            }

            &.none {
                display: flex;
            }

            .input {
                position: sticky;
                width: 100%;
                right: 10px;
            }
        }


        
    }

    @keyframes close {
        0% {
            transform: translateY(0%);
        }

        100% {
            transform: translateY(110%);
        }
    }
    @keyframes open {
        0% {
            transform: translateY(110%);
        }

        100% {
            transform: translateY(0%);
        }
    }
`