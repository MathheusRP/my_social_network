import styled from "styled-components";

export const FriendsListStyle = styled.section`
    height: 55vh;
    /* border: 2px solid brown; */
    width: 35%;
    top: 420px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .friendsListHeader {
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

    .list {
        display: flex;
        flex-direction: column;
        padding: 15px;
        background-color: var(--grey_3);
        border-radius: 8px;
        gap: 10px;
        overflow-y: auto;

        &::-webkit-scrollbar{
            background-color: transparent;
            width: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--color1);
            border-radius: 5px;
        }

        .search {
           display: flex;
           border: 3px solid var(--color1);
           padding: 5px 10px;
           gap: 10px;
           border-radius: 8px;

            input {
                width: 100%;
                background-color: transparent;
                border: none;
                outline: none;
                font-size: 18px;
                color: var(--grey_1);
                font-weight: 600;
            }

            .icon {
              width: 25px;
              height: 25px;
              color: var(--grey_1);
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            width: 100%; 
            gap: 20px;

            span {
                position: relative;
                .status {
                    height: 12px;
                    width: 12px;
                    position: absolute;
                    right: 5px;
                    bottom: 2px;
                    border-radius: 50%;
                }

                .online {
                    background-color: var(--green);
                }
                .offline {
                    background-color: var(--red);
                }


            }

            li {
                display: flex;
                height: 80px;
                align-items: center;
                gap: 10px;
                color: var(--grey_0);

                .name {
                    width: 65%;

                    p {
                        font-size: 20px;
                        font-weight: 600;
                    }
                }

                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                .icon {
                    cursor: pointer;
                }
            }
        }
    }
`