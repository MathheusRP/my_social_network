import styled from "styled-components";

export const FriendRequestStyled = styled.section`
    
    /* width: 35%; */
    /* max-width: 340px; */
    right: 15px;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;

    .request {
        display: flex;
        flex-direction: column;
        height: 300px;
        gap: 15px;
        

        .requestHeader {
            display: flex;
            justify-content: space-between;
            /* padding: 0px 10px; */
            align-items: center;

            h3 {
                color: var(--grey_1);
                font-size: 22px;
            }

            p {
                font-size: 18px;
                background-color: var(--color1);
                padding: 5px 25px;
                color: var(--grey_3);
                border-radius: 8px;
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 30px;
            overflow-y: auto;
            height: 100%;

            li {
                display: flex;
                flex-direction: column;
                background-color: var(--grey_3);
                border-radius: 8px;
                padding: 15px 10px 25px 10px;
                box-shadow: 0px 0px 15px rgb(0, 0, 0, 0.2);
                

                .owner {
                    display: flex;
                    gap: 10px;
                    align-items: center;

                    img {
                        height: 50px;
                        width: 50px;
                        object-fit: cover;
                        border-radius: 50%;
                    }

                    p {
                        /* letter-spacing: 1px; */
                        font-size: 1rem;
                        /* text-align: start; */
                    }
                }

                .buttons {
                    position: relative;
                    width: 100%;
                    

                    button {
                        position: absolute;
                        height: 30px;
                        /* background-color: aqua; */
                        width: 85px;
                        font-size: 18px;
                        border-radius: 8px;
                        color: var(--grey_3);
                        bottom: -40px;
                        box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.2);
                    }

                    .accept {
                        background-color: var(--green);
                        /* position: absolute; */
                        /* bottom: -30px; */
                        right: 15px;
                    }

                    .refuse {
                        left: 15px;
                        background-color: var(--red);
                    }
                }
            }
        }
    }
    

`