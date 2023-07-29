import styled from "styled-components";

export const MessagesStyled = styled.section`
    background-color: var(--grey_2);
    height: 100vh;
    display: flex;
    overflow-y: hidden;

    
    .header {
        display: none;
    }

    .messagesBody {
        display: flex;
        width: 100%;
        height: 100%;

        .friendsList {
            display: none;
        }

        .messageOwner {
            display: none; 
        }


        .messageContainer {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 0px auto;
            max-width: 800px;
            box-shadow: 0px 0px 15px rgb(0, 0, 0, 0.3);
             

            .messageHeader {
                display: flex;
                height: 80px;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                box-shadow: 0px 10px 15px rgb(0, 0, 0, 0.2);
                padding: 0px 10px;
                z-index: 5;

                .person {
                    display: flex;
                    align-items: center;
                    /* gap: 10px; */
                    transform: translateX(-5px);

                    .icon {
                        font-size: 32px;
                    }

                    img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }

                    h3 {
                        color: var(--color1);
                        font-size: 20px;
                    }
                }

                .icon {
                    font-size: 24px;
                    color: var(--color1);
                }
            }

            .messagesList {
                height: 100%;
                padding: 20px 15px;
                display: flex;
                overflow-y: scroll;    
                
                &::-webkit-scrollbar{
                    background-color: transparent;
                    width: 5px;
                }

                &::-webkit-scrollbar-thumb {
                    background-color: var(--color1);
                    border-radius: 5px;
                }

                ul {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    gap: 15px;
                    
                    .date {
                        width: 100%;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 8px;
                        color: var(--grey_1);
                        font-weight: 600;
                    }

                    .message {
                        display: flex;
                        flex-direction: column;
                        max-width: 80%;
                        align-self: flex-start;
                        gap: 5px;
                        
                        span {
                            padding-bottom: 10px;
                        }

                        p {
                            background-color: var(--grey_1);
                            padding: 10px;
                            color: var(--grey_2);
                            border-radius: 8px 8px 8px 0px; 
                        }
                    }

                    .owner {
                        align-self: flex-end;

                        p {
                            border-radius: 8px 8px 0px 8px;
                            background-color: var(--color1);
                        }

                        span {
                            align-self: flex-end;
                        }
                    }
                }
            }

            .toSend {
                border-top: 4px solid var(--color1);
                /* border-radius: 16px; */

                .inputSection {
                    height: 100%;
                    width: 100%;
                    background-color: var(--grey_3);
                    padding: 0px 15px;
                    display: flex;
                    align-items: center;
                    /* gap: 20px; */
                    /* border-radius: 16px; */
                }

                input {
                    height: 60px;
                    display: flex;
                    font-size: 20px;
                    width: 100%;
                    align-items: center;
                    background-color: transparent;
                    border: none;
                    outline: none;
                    padding: 0px 15px;
                    /* border-radius: 16px; */
                }

                .icons {
                    height: 45px;
                    background-color: var(--color1);
                    width: fit-content;
                    display: flex;
                    gap: 20px;
                    padding: 0px 20px;
                    align-items: center;
                    border-radius: 8px;
                }

                .icon {
                    
                    font-size: 26px;
                    color: var(--grey_2);
                }
            }
        }
    }

    @media (min-width: 800px) {
        .header {
            display: flex;
        }

        .messagesBody {
            margin-top: 120px;
            height: 82%;
            /* background-color: aquamarine; */
            gap: 10px;
            padding: 0px 15px;

            .messageContainer {
                width: 60%;
                max-width: 700px;
                border-radius: 16px;
                background-color: var(--grey_3);
                /* margin-bottom: 20px; */

                .toSend {
                    border: 4px solid var(--color1);
                    border-radius: 0px 0px 16px 16px;
                    

                    .inputSection {
                        border-radius: 0px 0px 16px 16px;
                        padding: 0px;
                    }

                    .icons {
                        height: 60px;
                        border-radius: 0px 0px 10px 0px;

                    }
                }
            }

            .friendsList {
                /* position: absolute; */
                background-color: var(--grey_3);
                display: flex;
                flex-direction: column;
                gap: 15px;
                width: 35%;
                max-width: 400px;
                height: 100%;
                border-radius: 16px;
                padding: 25px 15px;
                
                .search {
                    width: 100%;
                    display: flex;
                    height: 40px;
                    color: var(--grey_1);
                    border: 2px solid var(--color1);
                    border-radius: 8px;
                    padding: 0px 15px;
                    align-items: center;
                    

                    input {
                        font-size: 1rem;
                        font-weight: 600;
                        background-color: transparent;
                        border: none;
                        width: 100%;
                        outline: none;
                        padding-right: 15pxs;
                    }

                    .icon {
                        font-size: 24px;
                    }
                }

                .list {
                    /* background-color: aquamarine; */
                    width: 100%;
                    height: 100%;
                    overflow-y: auto;

                    &::-webkit-scrollbar{
                        background-color: transparent;
                        width: 5px;
                    }

                    &::-webkit-scrollbar-thumb {
                        background-color: var(--color1);
                        border-radius: 5px;
                    }

                    ul {
                        width: 100%;
                        /* background-color: aqua; */
                        /* border: 2px solid red; */
                        display: flex;
                        flex-direction: column;
                        gap: 10px;

                        li {
                            display: flex;
                            height: 80px;
                            align-items: center;
                            gap: 15px;

                            

                            .friendImage {
                                position: relative;

                                img {
                                    height: 60px;
                                    width: 60px;
                                    border-radius: 50%;
                                    object-fit: cover;
                                }

                                span {
                                    height: 16px;
                                    width: 16px;
                                    /* background-color: var(--red); */
                                    position: absolute;
                                    right: 0px;
                                    bottom: 6px;
                                    border-radius: 50%;
                                }

                                span.online {
                                    background-color: var(--green);
                                }

                                span.offline {
                                    background-color: var(--red);
                                }
                            }

                            .friendName {
                                display: flex;
                                flex-direction: column;
                                width: 100%;

                                p {
                                    font-size: 1.2rem;
                                    font-weight: bold;
                                    color: var(--grey_0);
                                    
                                }
                            }

                            .icon {
                                justify-self: flex-end;
                                font-size: 20px;
                                width: 30px;
                                opacity: 0%;
                                /* background-color: aqua; */
                            }

                            /* .friendName:hover ~ .icon{
                                background-color: aqua;
                            } */
                           
                            &:hover {
                                .icon {
                                    opacity: 100%;
                                }
                            }
                        }

                    }
                }
            }
        }

        
    }
`