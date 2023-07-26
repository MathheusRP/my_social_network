import styled from "styled-components";

export const MessagesStyled = styled.section`
    background-color: var(--grey_2);
    height: 100vh;

    .messagesBody {
        display: flex;
        
        width: 100%;

        .friendsList {
            display: none;
        }

        .messageContainer {
            display: flex;
            flex-direction: column;
            /* border: 2px solid red; */
            width: 100%;
            height: 100vh;
            margin: 0px auto;
            padding: 80px 0px;
            max-width: 700px;
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
                /* border: 2px solid red; */
                display: flex;
                overflow-y: scroll;
                

                ul {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    /* height: 100%; */
                    /* border: 2px solid blue; */
                    /* justify-content: flex-end; */
                    gap: 15px;
                    
                    
                    
                    .date {
                        width: 100%;
                        /* background-color: var(--grey_1); */
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
                        /* border: 2px black solid; */
                        max-width: 80%;
                        align-self: flex-start;
                        gap: 5px;

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
        }

        .messageOwner {
            display: none;
           
        }
    }
`