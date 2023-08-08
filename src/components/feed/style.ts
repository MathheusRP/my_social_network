import styled from "styled-components";

export const FeedStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    height: min-content;

    .newPost {
        width: 100%;
        height: 60px;
        background-color: var(--grey_3);
        box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.3);
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 8px;

        p {
            font-size: 0.8rem;
            color: var(--grey_1);
        }

        .post {
            padding:  12px;
            height: 40px;
            background-color: var(--color1);
            color: var(--grey_3);
            border-radius: 8px;
        }
    }

    .postList {
        border-radius: 8px;

        ul {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        li {
            background-color: var(--grey_3);
            padding: 16px;
            border-radius: 8px;
            cursor: pointer;
        }

        .post {
            display: flex;
            flex-direction: column;
            gap: 15px;

            .owner {
                display: flex;
                gap: 10px;
                align-items: center;

                img {
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                    border-radius: 50%;
                }

                div {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;

                    p {
                        color: var(--grey_1);
                        font-size: 12px;
                        font-weight: 400;
                    }

                    .name {
                        font-weight: 600;
                        color: var(--grey_0);
                        font-size: 18px;
                    }
                }
            }

            .content {
                color: var(--grey_0);
                letter-spacing: 1px;
                font-size: 14px;
                display: flex;
                flex-direction: column;
                gap: 16px;

                .imageContainer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    max-height: 500px;
                    background-color: var(--grey_2);
                    border-radius: 8px;  
                }

                img {
                    max-height: 500px;
                    border-radius: 8px;
                    max-width: 100%;
                }
            }
            
        }
    }

    @media (min-width: 800px) {

        .newPost {

            p {
                font-size: 1.1rem;
            }
        }

        .content {
            p {
                font-size: 1.1rem;
            }
        }  
    }
`