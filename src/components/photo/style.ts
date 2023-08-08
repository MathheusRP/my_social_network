import styled from "styled-components";


export const PhotoStyle = styled.section`
    position: fixed;
    top: 0px;
    height: 100vh;
    width: 100vw;
    left: 0px;
    right: 0px;
    background-color: var(--grey_3);
    z-index: 10;
    overflow-y: hidden;
    /* padding-top: 100px; */
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px 15px 15px 15px;
    overflow-y: auto;
    max-height: 100vh;

    .postDetail {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        gap: 10px;
        /* top: 250px; */
        overflow-y: auto;
        /* overflow-y: auto; */
        position: relative;
        padding-right: 10px;

        .close {
            display: none;
        }

        &.noImage {
            max-width: 600px;
            border-radius: 16px;
            margin: 0px auto;

            .close {
                display: block;
            }
            
            
        }

        &::-webkit-scrollbar{
            background-color: transparent;
            width: 5px;
          
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--color1);
            border-radius: 5px;
        }

        .close {
            position: absolute;
            height: 40px;
            width: 40px;
            right: 15px;
            top: 15px;
            color: var(--color1);
            cursor: pointer;
            
        }

        .newComment {
            background-color: var(--grey_3);
            /* width: 100%; */
            left: 15px;
            right: 15px;
            /* height: 80px; */
            position: fixed;
            bottom: 10px;
            padding: 15px 0px;
            

            div {
                border: 4px solid var(--grey_2);
                height: 50px;
                display: flex;
                gap: 15px;
                align-items: center;
                background-color: var(--grey_3);
                border-radius: 8px;
                padding: 0px 15px;

                input {
                    height: 50px;
                    border: none;
                    background-color: transparent;
                    width: 100%;
                    outline: none;
                    font-size: 20px;
                    color: var(--grey_0);
                }

                .icon {
                    font-size: 32px;
                    color: var(--grey_1);
                }
            }
            
        }
    }

    .imgContainer{
        width: 100%;
        display: flex;
        justify-content: center;

        &.noImage {
            display: none;
        }
        
        .icon {
            position: absolute;
            top: 25px;
            left: 25px;
            z-index: 5;
            color: var(--grey_2);
            height: 40px;
            width: 40px;
            cursor: pointer;
        }

        img {
            width: 100%;
            max-width: 600px;
            border-radius: 8px;
            max-height: 95%;
            object-fit: contain;
        }

    } 

    .ownerContainer {
        display: flex;
        /* flex-direction: column; */
        border-top: 4px solid var(--grey_2);
        padding-top: 15px;
        gap: 15px;
        align-items: center;

        img {
            height: 60px;
            width: 60px;
            border-radius: 50%;
            object-fit: cover;
            
        }

        .info {
            display: flex;
            flex-direction: column;
            gap: 5px;
            color: var(--grey_1);
            /* background-color: aqua; */
            width: 100%;

            p {
                font-size: 22px;
                font-weight: 600;
            }
        }
    }

    .text {
        font-size: 1.2rem;
        letter-spacing: 2px;
        padding-bottom: 10px;
    }
    

    ul {
        /* background-color: aquamarine; */
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 25px 0px 40px 0px;
        border-top: 4px solid var(--grey_2);
        /* min-height: 280px; */
        /* min-height: fit-content; */
        height: 100%;
        /* overflow-y: auto; */
        /* max-height: 50vh; */

        li {
            display: flex;
            position: relative;
            padding: 0px 0px 0px 30px;
            align-items: center;

            img {
                width: 60px;
                height: 60px;
                object-fit: cover;
                border-radius: 50%;
                position: absolute;
                left: 0px;
                border: 4px solid var(--grey_3);
            }

            .commentContainer {
                background-color: var(--color2);
                width: 100%;
                border-radius: 8px;
                padding: 20px 0px 20px 40px;
                color: var(--grey_2);
                display: flex;
                flex-direction: column;
                gap: 5px;
                letter-spacing: 1px;

                .name {
                    font-size: 20px;
                    font-weight: 600;
                }

                .comment {
                    font-size: 1rem;
                }
            }

            .likes {
                color: var(--grey_2);
                background-color: var(--color2);
                display: flex;
                position: absolute;
                right: 15px;
                top: -15px;
                border: 2px solid var(--grey_3);
                padding: 5px 10px;
                border-radius: 6px;
            }

            .buttons {
                position: absolute;
                bottom: -30px;
                display: flex;
                gap: 20px;
                color: var(--grey_1);
                font-size: 18px;

                p {
                    cursor: pointer;
                }
            }

            
        }
    }

    @media (min-width: 1000px) {
        flex-direction: row;
        gap: 0px;
        padding-right: 30px;
        padding: 150px 50px 50px 50px;
        background-color: var(--grey_2);

        .imgContainer {
            background-color: var(--grey_3);
            border-radius: 16px 0px 0px 16px;
            border-right: 10px solid var(--grey_2);
            padding: 0px 15px;
            box-shadow: -5px 0px 25px rgb(0, 0, 0, 0.3);
            /* z-index: 3; */
            position: relative;

            .icon {
                /* z-index: 10;
                left: 50px;
                top: 50px;
                color: red; */
            }

            img {
                /* max-height: 400px; */
                align-self: center;
            }
        } 
        
        .postDetail {
            max-width: 40%;
            background-color: var(--grey_3);
            padding: 0px 15px 0px 15px;
            /* overflow-x: hidden; */
            border-radius: 0px 16px 16px 0px;
            border-top: 15px solid var(--grey_3);
            border-bottom: 15px solid var(--grey_3);
            box-shadow: 5px 0px 25px rgb(0, 0, 0, 0.3);

            .newComment{
               /* right: 60px;
               width: 100%;
               left: auto;
               bottom: 60px;
               max-width:580px; */
               position: sticky;
               bottom: 0px;
               padding: 20px 10px;
                
           
            }
           
            ul {
                padding-right: 20px;
            }

        }
    }

    @media (min-width: 1400px) {

        .imgContainer img {
                max-width: 1000px;
           
        }

        

        .postDetail {
            max-width: 600px
        }
    }
`